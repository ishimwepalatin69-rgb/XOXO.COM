import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon } from "./Icons";
import { cn } from "@/utils/cn";

/**
 * Theme switch. `onDark` controls the track tone so it stays legible whether
 * it sits over a dark surface (hero / mobile drawer) or a light one.
 */
export function ThemeToggle({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "relative flex h-9 w-[4.25rem] shrink-0 items-center rounded-full border p-1 transition-colors hover:border-gold/60",
        onDark ? "border-gold/30 bg-cream/10" : "border-edge-strong bg-fg/10",
        className
      )}
    >
      {/* static track icons */}
      <span
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center justify-between px-2.5",
          onDark ? "text-cream/45" : "text-fg/45"
        )}
      >
        <Sun width={15} height={15} />
        <Moon width={15} height={15} />
      </span>
      {/* sliding knob with active icon */}
      <span
        className={cn(
          "absolute left-1 top-1 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-gold-deep to-gold-soft text-espresso shadow-md transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isDark ? "translate-x-[2.05rem]" : "translate-x-0"
        )}
      >
        {isDark ? <Moon width={15} height={15} /> : <Sun width={15} height={15} />}
      </span>
    </button>
  );
}
