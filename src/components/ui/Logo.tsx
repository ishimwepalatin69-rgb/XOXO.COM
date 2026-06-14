import { cn } from "@/utils/cn";

export function Logo({
  onDark = false,
  compact = false,
  className,
}: {
  onDark?: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <a href="#home" className={cn("group flex items-center gap-3", className)} aria-label="XOXO home">
      <span className="relative grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-gradient-to-br from-gold/20 to-transparent">
        <span className="absolute inset-1 rounded-full border border-gold/30" />
        <svg viewBox="0 0 40 40" className="h-6 w-6 text-gold">
          <text
            x="20"
            y="26"
            textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontSize="18"
            fontStyle="italic"
            fill="currentColor"
          >
            X
          </text>
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold-soft" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className={cn("font-display text-xl tracking-wide", onDark ? "text-cream" : "text-fg")}>
            XOXO
          </span>
          <span
            className={cn(
              "mt-1 text-[9px] font-semibold uppercase tracking-luxe",
              onDark ? "text-gold-soft/90" : "text-gold-deep/90"
            )}
          >
            by Tasty Bites KGL
          </span>
        </span>
      )}
    </a>
  );
}
