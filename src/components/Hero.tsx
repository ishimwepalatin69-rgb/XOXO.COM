import { business, img } from "@/data/site";
import { Stars } from "./ui/Stars";
import { ArrowRight, Utensils, MapPin, Clock, ChevronDown } from "./ui/Icons";

export function Hero() {
  return (
    <section id="home" className="grain relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-espresso">
        <img
          src={img.heroSteak}
          alt="XOXO by Tasty Bites KGL"
          className="animate-kenburns h-full w-full object-cover object-center"
        />
        {/* Dark overlays keep the text legible and add cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/20" />
      </div>

      {/* Decorative gold ring */}
      <div className="pointer-events-none absolute -right-40 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="animate-spin-slow h-[34rem] w-[34rem] rounded-full border border-gold/15" />
        <div className="absolute inset-10 rounded-full border border-gold/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-luxe text-gold-soft backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {business.statusText} · Kigali, Rwanda
          </div>

          <h1
            className="animate-fade-up mt-6 font-display text-[3.4rem] font-bold leading-[0.95] tracking-tight text-cream sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "0.08s" }}
          >
            X<span className="text-gradient-gold italic">O</span>X
            <span className="text-gradient-gold italic">O</span>
          </h1>

          <p
            className="animate-fade-up mt-4 font-serif text-2xl italic text-gold-soft/90 sm:text-3xl"
            style={{ animationDelay: "0.16s" }}
          >
            {business.tagline}
          </p>

          <p
            className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
            style={{ animationDelay: "0.24s" }}
          >
            A women-owned kitchen in the heart of Kigali where smoky grills, pan-Asian
            wok-fire and silky Italian pasta meet an affordable menu made for sharing.
          </p>

          {/* rating */}
          <div
            className="animate-fade-up mt-7 flex flex-wrap items-center gap-x-5 gap-y-3"
            style={{ animationDelay: "0.32s" }}
          >
            <div className="flex items-center gap-2">
              <Stars rating={business.rating} size={18} />
              <span className="font-display text-2xl text-cream">{business.rating}</span>
              <span className="text-sm text-cream/55">({business.reviewsCount} reviews)</span>
            </div>
            <span className="hidden h-5 w-px bg-cream/20 sm:block" />
            <span className="text-sm text-cream/70">
              {business.priceRange} <span className="text-cream/40">{business.pricePer}</span>
            </span>
          </div>

          {/* CTAs */}
          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#reserve"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-soft px-7 py-4 text-sm font-semibold text-espresso shadow-xl shadow-gold/20 transition-transform hover:scale-[1.03]"
            >
              Reserve Your Table
              <ArrowRight width={18} height={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 bg-cream/5 px-7 py-4 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:border-gold/60 hover:text-gold-soft"
            >
              <Utensils width={18} height={18} />
              Explore the Menu
            </a>
          </div>

          {/* quick info */}
          <div
            className="animate-fade-up mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-cream/60"
            style={{ animationDelay: "0.48s" }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin width={16} height={16} className="text-gold" /> {business.address}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock width={16} height={16} className="text-gold" /> {business.statusText}
            </span>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 transition-colors hover:text-gold-soft sm:flex"
      >
        <span className="text-[10px] uppercase tracking-luxe">Scroll</span>
        <ChevronDown width={18} height={18} className="animate-floaty" />
      </a>
    </section>
  );
}
