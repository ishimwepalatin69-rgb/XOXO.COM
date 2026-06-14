import { useState } from "react";
import { reviews, ratingBreakdown, reviewTags } from "@/data/reviews";
import { business } from "@/data/site";
import { Reveal } from "./ui/Reveal";
import { Stars } from "./ui/Stars";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Heart,
  Share,
} from "./ui/Icons";

const total = ratingBreakdown.reduce((a, b) => a + b.count, 0);

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 2-1.6 5-4.6 7l.1.7 6.6 5.1.7.1c4.3-4 6.8-9.8 6.8-16.2z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-.7.1-6.8 5.2-.2.6C6.5 41.1 14.6 46 24 46z" />
      <path fill="#FBBC05" d="M11.5 28.4c-.5-1.4-.7-2.8-.7-4.4s.3-3 .7-4.4l-.1-.7-6.8-5.3-.6.3C2.9 16.9 2 20.3 2 24s.9 7.1 2.6 10.1l6.9-5.7z" />
      <path fill="#EA4335" d="M24 10.5c3.6 0 6 1.6 7.4 2.9l5.4-5.3C33.7 4.6 28.7 2 24 2 14.6 2 6.5 6.9 2.6 14.9l6.9 5.3c1.8-5.3 6.7-9.7 12.5-9.7z" />
    </svg>
  );
}

export function Reviews() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const go = (d: number) => setI((p) => (p + d + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="grain relative bg-panel-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Summary */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-luxe text-gold-deep">
                <span className="h-px w-8 bg-gold/60" /> Guest Love
              </div>
              <h2 className="font-display text-4xl leading-tight text-fg sm:text-5xl">
                Loved by <span className="text-gradient-gold italic">Kigali</span>
              </h2>

              <div className="mt-7 flex items-end gap-5 rounded-3xl border border-edge bg-panel-soft p-6">
                <div className="text-center">
                  <div className="font-display text-6xl leading-none text-fg">{business.rating}</div>
                  <Stars rating={business.rating} size={16} className="mt-3 justify-center" />
                  <div className="mt-2 text-xs text-fg-3">{total} reviews</div>
                </div>
                <div className="flex-1 space-y-1.5">
                  {ratingBreakdown.map((b) => (
                    <div key={b.stars} className="flex items-center gap-2 text-xs">
                      <span className="w-3 text-fg-2">{b.stars}</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gold/15">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-gold-deep to-gold-soft"
                          style={{ width: `${(b.count / total) * 100}%` }}
                        />
                      </div>
                      <span className="w-7 text-right text-fg-3">{b.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {reviewTags.map((t) => (
                  <span
                    key={t.label}
                    className="rounded-full border border-edge bg-gold/5 px-3 py-1.5 text-xs text-fg-2"
                  >
                    {t.label} <span className="text-gold-deep">{t.count}</span>
                  </span>
                ))}
              </div>

              <a
                href="#reserve"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-edge-strong px-5 py-3 text-sm font-semibold text-gold-deep transition-colors hover:bg-gold/10"
              >
                Write a review <ArrowRight width={16} height={16} />
              </a>
            </div>
          </Reveal>

          {/* Carousel */}
          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -left-3 -top-6 text-gold/20">
                <Quote width={64} height={64} />
              </div>
              <div className="relative min-h-[19rem] rounded-3xl border border-edge bg-panel p-7 shadow-lg shadow-shadow sm:p-9">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br ${r.gradient} font-display text-lg text-cream ring-1 ring-gold/30`}
                    >
                      {r.initials}
                    </span>
                    <div>
                      <div className="font-semibold text-fg">{r.name}</div>
                      <div className="text-xs text-fg-3">{r.role}</div>
                    </div>
                  </div>
                  <GoogleG className="h-5 w-5" />
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <Stars rating={r.rating} size={16} />
                  <span className="text-xs text-fg-3">{r.time}</span>
                </div>

                <p key={r.id} className="mt-4 animate-fade-up text-[15px] leading-relaxed text-fg-2">
                  {r.text}
                </p>

                <div className="mt-6 flex items-center gap-5 text-xs text-fg-3">
                  <button className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-deep">
                    <Heart width={15} height={15} /> Helpful ({r.helpful})
                  </button>
                  <button className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-deep">
                    <Share width={15} height={15} /> Share
                  </button>
                </div>
              </div>

              {/* controls */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setI(idx)}
                      aria-label={`Go to review ${idx + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        idx === i ? "w-7 bg-gold" : "w-2 bg-fg/20 hover:bg-fg/40"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous review"
                    className="grid h-11 w-11 place-items-center rounded-full border border-edge-strong text-fg transition-colors hover:border-gold/60 hover:text-gold-deep"
                  >
                    <ChevronLeft width={20} height={20} />
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Next review"
                    className="grid h-11 w-11 place-items-center rounded-full border border-edge-strong text-fg transition-colors hover:border-gold/60 hover:text-gold-deep"
                  >
                    <ChevronRight width={20} height={20} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
