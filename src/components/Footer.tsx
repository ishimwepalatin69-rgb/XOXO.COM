import { useState } from "react";
import { business, navLinks, weeklyHours } from "@/data/site";
import { Logo } from "./ui/Logo";
import { Instagram, Facebook, Whatsapp, ArrowRight, MapPin, Phone } from "./ui/Icons";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="grain relative overflow-hidden bg-panel-2 text-fg">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fg-2">
              A women-owned kitchen in Kigali serving smoky grills, pan-Asian wok-fire and
              silky pasta — made to share, priced to return.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook, Whatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href={i === 2 ? business.whatsapp : "#"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-edge text-fg-2 transition-colors hover:border-gold/60 hover:text-gold-deep"
                >
                  <Icon width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-luxe text-gold-deep">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-fg-2 transition-colors hover:text-gold-deep">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#reserve" className="text-fg-2 transition-colors hover:text-gold-deep">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-luxe text-gold-deep">Visit</h4>
            <ul className="mt-5 space-y-4 text-sm text-fg-2">
              <li className="flex items-start gap-2">
                <MapPin width={16} height={16} className="mt-0.5 shrink-0 text-gold" />
                {business.address}
              </li>
              <li className="flex items-start gap-2">
                <Phone width={16} height={16} className="mt-0.5 shrink-0 text-gold" />
                <a href={`tel:${business.phoneTel}`} className="hover:text-gold-deep">
                  {business.phone}
                </a>
              </li>
              <li className="text-fg-3">{weeklyHours[0].hours} · daily</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-luxe text-gold-deep">
              Join the table
            </h4>
            <p className="mt-5 text-sm text-fg-2">
              Get first dibs on new dishes, tastings and private events.
            </p>
            {sent ? (
              <div className="mt-4 rounded-xl border border-edge-strong bg-gold/10 px-4 py-3 text-sm text-gold-deep">
                🎉 You're on the list — see you soon!
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setSent(true);
                }}
                className="mt-4 flex items-center gap-2 rounded-full border border-edge bg-panel-soft p-1.5"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-transparent px-3 py-1.5 text-sm text-fg placeholder:text-fg-3 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-r from-gold-deep to-gold-soft text-espresso transition-transform hover:scale-105"
                >
                  <ArrowRight width={17} height={17} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 hairline" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-fg-3 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.fullName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with <span className="text-gold">♥</span> in Kigali, Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}
