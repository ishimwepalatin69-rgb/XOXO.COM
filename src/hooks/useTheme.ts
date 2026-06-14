import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const KEY = "xoxo-theme";

/* Read the initial theme from the <html> element. The no-flash inline script
   in index.html has already applied it (saved pref or OS setting) before React
   mounts, so there's no flash of the wrong theme. */
function readInitial(): Theme {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  }
  return "light";
}

let currentTheme: Theme = readInitial();
const listeners = new Set<() => void>();

function applyTheme(t: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  // Smooth-transition layer (added on first interaction, not on initial load).
  root.classList.add("theme-anim");
  root.classList.toggle("dark", t === "dark");
  try {
    localStorage.setItem(KEY, t);
  } catch {
    /* ignore */
  }
}

function notify() {
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

// Follow the OS preference if the user hasn't explicitly chosen.
if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      try {
        if (!localStorage.getItem(KEY)) {
          currentTheme = e.matches ? "dark" : "light";
          applyTheme(currentTheme);
          notify();
        }
      } catch {
        /* ignore */
      }
    });
}

/** Single source of truth for the theme — shared by every component. */
export function useTheme() {
  const theme = useSyncExternalStore(
    subscribe,
    () => currentTheme,
    () => "light" as Theme
  );

  const setTheme = useCallback((t: Theme) => {
    if (t === currentTheme) return;
    currentTheme = t;
    applyTheme(t);
    notify();
  }, []);

  const toggle = useCallback(() => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(currentTheme);
    notify();
  }, []);

  return { theme, toggle, setTheme };
}
