import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/hooks/useCart";
import { business } from "@/data/site";
import { rf } from "@/data/menu";
import { cn } from "@/utils/cn";
import {
  Close,
  Plus,
  Minus,
  Trash,
  Bag,
  Whatsapp,
  Check,
  ArrowRight,
} from "./ui/Icons";

type OrderType = "Delivery" | "Pickup" | "Dine-in";

// Payment methods available at XOXO (the team settles the actual money).
const payments = [
  { id: "MTN MoMo", emoji: "📱", hint: "MTN Mobile Money" },
  { id: "Airtel Money", emoji: "📲", hint: "Airtel Money" },
  { id: "Card", emoji: "💳", hint: "Visa / Mastercard link" },
  { id: "Cash", emoji: "💵", hint: "Pay on arrival" },
] as const;

const needsNumber = (p: string) => p === "MTN MoMo" || p === "Airtel Money";

export function CartDrawer() {
  const { lines, open, setOpen, count, subtotal, inc, dec, remove, clear } =
    useCart();
  const [type, setType] = useState<OrderType>("Delivery");
  const [payment, setPayment] = useState<string>("MTN MoMo");
  const [momoNumber, setMomoNumber] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [note, setNote] = useState("");
  const [placed, setPlaced] = useState(false);

  // lock body scroll while open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const detailsValid = name.trim() !== "" && phone.trim().length >= 9;
  const canCheckout = lines.length > 0 && detailsValid;

  const waLink = useMemo(() => {
    const itemList = lines
      .map((l) => `• ${l.qty}x ${l.item.name} — ${rf(l.qty * l.item.price)}`)
      .join("\n");
    const payLine =
      needsNumber(payment)
        ? `💳 *Payment:* ${payment} — please send a request to ${momoNumber || phone || "—"}\n`
        : payment === "Card"
        ? `💳 *Payment:* Card — please send a secure payment link\n`
        : `💳 *Payment:* Cash on ${type === "Delivery" ? "delivery" : "arrival"}\n`;
    const msg =
      `Hello ${business.name} by Tasty Bites KGL! 👋 I'd like to place an order:\n\n` +
      `🧾 *My Order*\n${itemList}\n\n` +
      `💰 *Subtotal: ${rf(subtotal)}*\n\n` +
      `🛵 *Order type:* ${type}\n` +
      `👤 *Name:* ${name || "—"}\n` +
      `📞 *Phone:* ${phone || "—"}\n` +
      (type === "Delivery" ? `📍 *Area/Address:* ${area || "—"}\n` : "") +
      payLine +
      (note ? `📝 *Note:* ${note}\n` : "") +
      `\nThank you! 🌶️`;
    return `${business.whatsapp}?text=${encodeURIComponent(msg)}`;
  }, [lines, subtotal, type, name, phone, area, note, payment, momoNumber]);

  const placeOrder = () => {
    if (!canCheckout) return;
    window.open(waLink, "_blank");
    setPlaced(true);
    clear();
  };

  const handleClose = () => {
    setOpen(false);
    // reset the success screen shortly after closing
    setTimeout(() => setPlaced(false), 350);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[80]",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      {/* backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={handleClose}
      />

      {/* panel */}
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-canvas text-fg shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-edge px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-gold-deep">
              <Bag width={20} height={20} />
            </span>
            <div>
              <h3 className="font-display text-xl leading-none text-fg">Your Order</h3>
              <p className="mt-1 text-xs text-fg-3">
                {count} {count === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-edge text-fg transition-colors hover:border-edge-strong hover:text-gold-deep"
            aria-label="Close cart"
          >
            <Close width={20} height={20} />
          </button>
        </div>

        {placed ? (
          /* ---------- SUCCESS ---------- */
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-gold-deep to-gold-soft text-espresso">
              <Check width={40} height={40} />
            </div>
            <h4 className="mt-6 font-display text-2xl text-fg">Order sent!</h4>
            <p className="mt-2 max-w-xs text-sm text-fg-2">
              We've opened WhatsApp with your order details. Just hit send and our
              team will confirm your {type.toLowerCase()} and arrange{" "}
              {payment === "Cash"
                ? "cash payment"
                : payment === "Card"
                ? "your card payment link"
                : `the ${payment.toLowerCase()} request`}
              . Thank you! 🌶️
            </p>
            <button
              onClick={handleClose}
              className="mt-7 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-soft px-6 py-3 text-sm font-semibold text-espresso"
            >
              Back to menu
            </button>
          </div>
        ) : lines.length === 0 ? (
          /* ---------- EMPTY ---------- */
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="grid h-20 w-20 place-items-center rounded-full border border-edge bg-panel-soft text-fg-3">
              <Bag width={36} height={36} />
            </div>
            <h4 className="mt-6 font-display text-2xl text-fg">Your cart is empty</h4>
            <p className="mt-2 max-w-xs text-sm text-fg-2">
              Browse the menu and tap “Add to Order” to start building your feast.
            </p>
            <button
              onClick={handleClose}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-edge-strong px-6 py-3 text-sm font-semibold text-fg hover:bg-gold/10"
            >
              Explore the menu <ArrowRight width={16} height={16} />
            </button>
          </div>
        ) : (
          /* ---------- FILLED ---------- */
          <>
            {/* items */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="space-y-3">
                {lines.map((l) => (
                  <div
                    key={l.item.id}
                    className="flex gap-3 rounded-2xl border border-edge bg-panel p-2.5"
                  >
                    <img
                      src={l.item.image}
                      alt={l.item.name}
                      className="h-16 w-16 shrink-0 rounded-xl object-cover"
                    />
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="truncate font-medium text-fg">{l.item.name}</h4>
                        <button
                          onClick={() => remove(l.item.id)}
                          className="shrink-0 text-fg-3 transition-colors hover:text-clay"
                          aria-label={`Remove ${l.item.name}`}
                        >
                          <Trash width={16} height={16} />
                        </button>
                      </div>
                      <div className="mt-1 text-xs text-gold-deep">
                        {rf(l.item.price)} each
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-1.5">
                        {/* qty stepper */}
                        <div className="flex items-center gap-1 rounded-full border border-edge p-0.5">
                          <button
                            onClick={() => dec(l.item.id)}
                            className="grid h-7 w-7 place-items-center rounded-full text-fg transition-colors hover:bg-gold/15"
                            aria-label="Decrease"
                          >
                            <Minus width={15} height={15} />
                          </button>
                          <span className="w-6 text-center text-sm font-semibold text-fg">
                            {l.qty}
                          </span>
                          <button
                            onClick={() => inc(l.item.id)}
                            className="grid h-7 w-7 place-items-center rounded-full text-fg transition-colors hover:bg-gold/15"
                            aria-label="Increase"
                          >
                            <Plus width={15} height={15} />
                          </button>
                        </div>
                        <span className="font-display text-base text-fg">
                          {rf(l.qty * l.item.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={clear}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-fg-3 transition-colors hover:text-clay"
              >
                <Trash width={14} height={14} /> Clear all
              </button>

              {/* order details */}
              <div className="mt-6 rounded-2xl border border-edge bg-panel-soft p-4">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-deep">
                  Order details
                </h4>

                <div className="mt-3 flex gap-2">
                  {(["Delivery", "Pickup", "Dine-in"] as OrderType[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      className={cn(
                        "flex-1 rounded-lg border px-2 py-2 text-xs font-semibold transition-all",
                        type === t
                          ? "border-transparent bg-gradient-to-r from-gold-deep to-gold-soft text-espresso"
                          : "border-edge text-fg-2 hover:border-edge-strong"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Payment method */}
                <div className="mt-4">
                  <h5 className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-fg-3">
                    Payment method
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {payments.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setPayment(p.id)}
                        className={cn(
                          "flex items-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-semibold transition-all",
                          payment === p.id
                            ? "border-transparent bg-gradient-to-r from-gold-deep to-gold-soft text-espresso"
                            : "border-edge text-fg-2 hover:border-edge-strong"
                        )}
                      >
                        <span className="text-base leading-none">{p.emoji}</span>
                        <span className="flex flex-col items-start leading-tight">
                          <span>{p.id}</span>
                          <span
                            className={cn(
                              "text-[9px] font-medium",
                              payment === p.id ? "text-espresso/70" : "text-fg-3"
                            )}
                          >
                            {p.hint}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                  {needsNumber(payment) && (
                    <input
                      value={momoNumber}
                      onChange={(e) => setMomoNumber(e.target.value)}
                      inputMode="tel"
                      placeholder={`${payment} number (e.g. 07XX XXX XXX)`}
                      className="mt-3 w-full rounded-lg border border-edge bg-canvas px-3 py-2.5 text-sm text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-gold"
                    />
                  )}
                </div>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="rounded-lg border border-edge bg-canvas px-3 py-2.5 text-sm text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-gold"
                  />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    inputMode="tel"
                    placeholder="Phone"
                    className="rounded-lg border border-edge bg-canvas px-3 py-2.5 text-sm text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-gold"
                  />
                </div>
                {type === "Delivery" && (
                  <input
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Delivery area / address"
                    className="mt-3 w-full rounded-lg border border-edge bg-canvas px-3 py-2.5 text-sm text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-gold"
                  />
                )}
                <input
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Note (extra spice, no onions…)"
                  className="mt-3 w-full rounded-lg border border-edge bg-canvas px-3 py-2.5 text-sm text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-gold"
                />
              </div>
            </div>

            {/* footer */}
            <div className="border-t border-edge bg-panel px-5 py-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-fg-2">Subtotal</span>
                <span className="font-display text-xl text-fg">{rf(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-fg-3">
                {type === "Delivery"
                  ? "Delivery fee confirmed by our team."
                  : type === "Pickup"
                  ? "Kerbside pickup at House 8, KK 343 St."
                  : "Dine-in at XOXO, Kigali."}
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-fg-2">
                <span>
                  Paying with <span className="font-semibold text-fg">{payment}</span>
                </span>
                {needsNumber(payment) && momoNumber && (
                  <span className="text-fg-3">· {momoNumber}</span>
                )}
              </div>
              <button
                onClick={placeOrder}
                disabled={!canCheckout}
                className={cn(
                  "mt-3 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all",
                  canCheckout
                    ? "bg-gradient-to-r from-gold-deep via-gold to-gold-soft text-espresso hover:scale-[1.02]"
                    : "cursor-not-allowed bg-panel-soft text-fg-3"
                )}
              >
                <Whatsapp width={18} height={18} />
                {detailsValid
                  ? `Place order · ${rf(subtotal)}`
                  : "Add name & phone to continue"}
              </button>
              {!detailsValid && (
                <p className="mt-2 text-center text-[11px] text-fg-3">
                  We arrange payment on WhatsApp — MoMo request, card link, or cash.
                </p>
              )}
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
