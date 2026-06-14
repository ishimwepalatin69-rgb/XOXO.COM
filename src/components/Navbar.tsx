import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { navLinks, business } from "@/data/site";
import { useTheme } from "@/hooks/useTheme";
import { useCart } from "@/hooks/useCart";
import { Logo } from "./ui/Logo";
import { ThemeToggle } from "./ui/ThemeToggle";
import { Menu, Close, Phone, Bag } from "./ui/Icons";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const { theme } = useTheme();
  const { count, setOpen: setCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
      setScrolled(h.scrollTop > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The bar reads as "dark" when it's over the hero (not scrolled) OR when the
  // whole site is in dark mode. Otherwise (scrolled + light mode) it's light.
  const onDark = !scrolled || theme === "dark";
  const linkBase = onDark ? "text-cream/75 hover:text-cream" : "text-fg-2 hover:text-fg";
  const linkActive = onDark ? "text-gold-soft" : "text-gold-deep";

  return (
    <>
      {/* scroll progress */}
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-gold-deep via-gold to-gold-soft transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2.5" : "py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500",
              scrolled &&
                "border bg-panel/85 shadow-2xl shadow-black/20 backdrop-blur-xl " +
                  (onDark ? "border-gold/15" : "border-edge")
            )}
          >
            <Logo onDark={onDark} />

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active === l.href.replace("#", "") ? linkActive : linkBase
                  )}
                >
                  {l.label}
                  {active === l.href.replace("#", "") && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gold/70" />
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle onDark={onDark} />
              <button
                onClick={() => setCartOpen(true)}
                className={cn(
                  "relative grid h-9 w-9 place-items-center rounded-full border transition-colors",
                  onDark
                    ? "border-gold/30 text-cream hover:border-gold/60"
                    : "border-edge-strong text-fg hover:border-gold/60"
                )}
                aria-label={`Open cart, ${count} items`}
              >
                <Bag width={18} height={18} />
                {count > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-gradient-to-br from-gold-deep to-gold-soft px-1 text-[10px] font-bold text-espresso shadow">
                    {count}
                  </span>
                )}
              </button>
              <a
                href={`tel:${business.phoneTel}`}
                className={cn(
                  "hidden items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors xl:flex",
                  onDark
                    ? "border-gold/30 text-cream/90 hover:border-gold/60 hover:text-gold-soft"
                    : "border-edge-strong text-fg hover:border-gold/60 hover:text-gold-deep"
                )}
              >
                <Phone width={16} height={16} className="text-gold" />
                {business.phone}
              </a>
              <a
                href="#reserve"
                className="hidden rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-soft px-5 py-2.5 text-sm font-semibold text-espresso shadow-lg shadow-gold/20 transition-transform hover:scale-[1.03] sm:inline-block"
              >
                Reserve a Table
              </a>
              <button
                onClick={() => setOpen(true)}
                className={cn(
                  "grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden",
                  onDark
                    ? "border-gold/30 text-cream hover:border-gold/60"
                    : "border-edge-strong text-fg hover:border-gold/60"
                )}
                aria-label="Open menu"
              >
                <Menu width={22} height={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[70] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-espresso px-7 py-7 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <Logo compact onDark />
            <button
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-cream"
              aria-label="Close menu"
            >
              <Close width={22} height={22} />
            </button>
          </div>
          <div className="my-8 hairline" />
          <nav className="flex flex-col gap-1">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-white/5 py-4 font-display text-2xl text-cream transition-colors hover:text-gold-soft"
              >
                <span>
                  <span className="mr-3 text-xs font-sans font-semibold text-gold/70">
                    0{i + 1}
                  </span>
                  {l.label}
                </span>
                <span className="text-gold/40 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </nav>
          <a
            href="#reserve"
            onClick={() => setOpen(false)}
            className="mt-8 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-soft py-4 text-center text-sm font-semibold text-espresso"
          >
            Reserve a Table
          </a>
          <a
            href={`tel:${business.phoneTel}`}
            className="mt-3 flex items-center justify-center gap-2 rounded-full border border-gold/30 py-4 text-center text-sm font-medium text-cream"
          >
            <Phone width={16} height={16} className="text-gold" />
            {business.phone}
          </a>
          <div className="mt-5 flex items-center justify-center gap-3 text-xs uppercase tracking-luxe text-cream/45">
            <span>Appearance</span>
            <ThemeToggle onDark />
          </div>
        </div>
      </div>
    </>
  );
}
