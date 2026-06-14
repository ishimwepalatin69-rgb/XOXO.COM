import { useCallback, useSyncExternalStore } from "react";
import { menuItems, type MenuItem } from "@/data/menu";

export type CartLine = { item: MenuItem; qty: number };

const STORAGE_KEY = "xoxo-cart";

/* ---- persistence: store only id+qty, rehydrate from the menu data ---- */
function loadLines(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw) as { id: string; qty: number }[];
    const out: CartLine[] = [];
    for (const { id, qty } of data) {
      const item = menuItems.find((m) => m.id === id);
      if (item && qty > 0) out.push({ item, qty });
    }
    return out;
  } catch {
    return [];
  }
}

function persist(lines: CartLine[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(lines.map((l) => ({ id: l.item.id, qty: l.qty })))
    );
  } catch {
    /* ignore */
  }
}

/* ---- module-level store ---- */
let lines: CartLine[] = loadLines();
let open = false;
let snapshot: { lines: CartLine[]; open: boolean } = { lines, open };
const listeners = new Set<() => void>();

function commit(nextLines: CartLine[], nextOpen: boolean) {
  lines = nextLines;
  open = nextOpen;
  snapshot = { lines, open }; // fresh reference so React re-renders
  persist(lines);
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}
const getSnapshot = () => snapshot;
const getServerSnapshot = () => snapshot;

/** Single source of truth for the order cart — shared by every component. */
export function useCart() {
  const snap = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const add = useCallback((item: MenuItem, qty = 1) => {
    const existing = lines.find((l) => l.item.id === item.id);
    const next = existing
      ? lines.map((l) => (l.item.id === item.id ? { ...l, qty: l.qty + qty } : l))
      : [...lines, { item, qty }];
    commit(next, true); // pop the cart open so the guest sees their order
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    if (qty <= 0) {
      commit(lines.filter((l) => l.item.id !== id), open);
      return;
    }
    commit(
      lines.map((l) => (l.item.id === id ? { ...l, qty } : l)),
      open
    );
  }, []);

  const remove = useCallback((id: string) => {
    commit(lines.filter((l) => l.item.id !== id), open);
  }, []);

  const inc = useCallback(
    (id: string) => {
      const l = lines.find((x) => x.item.id === id);
      if (l) setQty(id, l.qty + 1);
    },
    [setQty]
  );

  const dec = useCallback(
    (id: string) => {
      const l = lines.find((x) => x.item.id === id);
      if (l) setQty(id, l.qty - 1);
    },
    [setQty]
  );

  const clear = useCallback(() => commit([], open), []);
  const setOpen = useCallback((v: boolean) => commit(lines, v), []);

  const qtyOf = useCallback(
    (id: string) => snap.lines.find((l) => l.item.id === id)?.qty ?? 0,
    [snap.lines]
  );

  const count = snap.lines.reduce((a, l) => a + l.qty, 0);
  const subtotal = snap.lines.reduce((a, l) => a + l.qty * l.item.price, 0);

  return {
    lines: snap.lines,
    open: snap.open,
    count,
    subtotal,
    qtyOf,
    add,
    setQty,
    remove,
    inc,
    dec,
    clear,
    setOpen,
  };
}
