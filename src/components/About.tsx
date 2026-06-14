import { useEffect, useRef, useState } from "react";
import { img, features, stats } from "@/data/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { useCountUp } from "@/hooks/useCountUp";
import { Sparkles, Heart, ShoppingBag, Scooter, Quote } from "./ui/Icons";

const iconMap = {
  spark: Sparkles,
  heart: Heart,
  bag: ShoppingBag,
  scoot: Scooter,
} as const;

function StatCounter({
  value,
  suffix,
  label,
  decimals,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals: number;
  start: boolean;
}) {
  const v = useCountUp(value, 1700, start);
  return (
    <div className="text-center">
      <div className="font-display text-4xl text-fg sm:text-5xl">
        {v.toFixed(decimals)}
        <span className="text-gradient-gold">{suffix}</span>
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-fg-3">
        {label}
      </div>
    </div>
  );
}

export function About() {
  const statRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = statRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setStart(true), io.disconnect()),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="relative overflow-hidden bg-canvas py-24 sm:py-32">
      {/* soft background accents */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-clay/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image collage */}
          <Reveal className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-gold/40" />
              <div className="relative overflow-hidden rounded-[2rem] bg-espresso shadow-2xl shadow-shadow">
                <img
                  src={img.interior1}
                  alt="The warm, candle-lit interior of XOXO"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>

              {/* overlapping smaller image */}
              <div className="absolute -bottom-8 -right-4 w-40 overflow-hidden rounded-2xl border-4 border-canvas shadow-xl sm:w-52">
                <img src={img.cocktail} alt="Signature cocktail" className="aspect-square w-full object-cover" />
              </div>

              {/* floating badge */}
              <div className="absolute -left-3 bottom-16 animate-floaty rounded-2xl border border-gold/30 bg-espresso/95 px-5 py-3 shadow-xl backdrop-blur sm:-left-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-gold">
                    <Heart width={20} height={20} />
                  </span>
                  <div className="leading-tight">
                    <div className="font-display text-sm text-cream">Women-Owned</div>
                    <div className="text-[11px] text-cream/60">& proudly inclusive</div>
                  </div>
                </div>
              </div>

              {/* est badge */}
              <div className="absolute -right-3 -top-3 grid h-20 w-20 place-items-center rounded-full border border-gold/40 bg-canvas text-center shadow-lg sm:-right-6">
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-widest text-gold-deep">Since</div>
                  <div className="font-display text-xl text-fg">2019</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={
                <>
                  Where Kigali gathers to{" "}
                  <span className="text-gradient-gold italic">indulge</span>
                </>
              }
            />
            <Reveal delay={80}>
              <p className="mt-6 text-base leading-relaxed text-fg-2 sm:text-lg">
                XOXO by Tasty Bites KGL began with a simple belief — that great food
                should be generous, warm and within reach. What started as a love for
                feeding friends has grown into one of Kigali's most-loved kitchens,
                blending smoky continental grills, bold pan-Asian wok-fire and silky
                Italian classics under one candle-lit roof.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-base leading-relaxed text-fg-2">
                As a women-owned and proudly inclusive house, every guest is family.
                Our share-friendly menu and honest prices mean you can linger, taste
                everything and still leave smiling.
              </p>
            </Reveal>

            {/* feature pills */}
            <Reveal delay={200}>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {features.map((f) => {
                  const Icon = iconMap[f.icon as keyof typeof iconMap];
                  return (
                    <div
                      key={f.label}
                      className="flex items-center gap-2.5 rounded-xl border border-edge bg-panel-soft px-3 py-3 text-sm font-medium text-fg"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold-deep">
                        <Icon width={18} height={18} />
                      </span>
                      <span className="leading-tight">{f.label}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* founder quote */}
            <Reveal delay={260}>
              <figure className="mt-8 border-l-2 border-gold/50 pl-5">
                <Quote width={26} height={26} className="text-gold/50" />
                <blockquote className="mt-2 font-serif text-xl italic text-fg">
                  “We cook the way we host — with heart, fire and a little extra for the
                  table.”
                </blockquote>
                <figcaption className="mt-2 text-sm font-semibold text-fg-2">
                  — The XOXO Kitchen Team
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statRef}
          className="mt-20 grid grid-cols-2 gap-8 rounded-3xl border border-edge bg-panel-soft px-6 py-10 sm:px-10 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <StatCounter
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              decimals={s.decimals}
              start={start}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
