import { business, popularTimes, popularHours } from "@/data/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import {
  MapPin,
  Phone,
  Globe,
  Clock,
  ArrowRight,
  Whatsapp,
  Sparkles,
} from "./ui/Icons";

// sample the day curve into the displayed buckets
const bars = [1, 3, 5, 7, 9, 11, 13].map((i) => popularTimes.Saturday[i]);
const nowIdx = 5; // ~7p marker

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-start gap-4 rounded-2xl border border-edge bg-panel-soft p-4 transition-colors hover:border-edge-strong"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold-deep">
        <Icon width={20} height={20} />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-widest text-fg-3">{label}</div>
        <div className="mt-0.5 truncate font-medium text-fg group-hover:text-gold-deep">{value}</div>
      </div>
    </a>
  );
}

export function Visit() {
  return (
    <section id="visit" className="relative bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Find Us"
          title={
            <>
              Plan your <span className="text-gradient-gold italic">visit</span>
            </>
          }
          description="Tucked into KK 343 Street in Kigali — easy to reach, easy to love."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {/* Left: details + popular times */}
          <div className="flex flex-col gap-4">
            <Reveal className="grid gap-4 sm:grid-cols-2">
              <ContactRow icon={MapPin} label="Address" value={business.address} href={business.directions} />
              <ContactRow icon={Phone} label="Call / WhatsApp" value={business.phone} href={`tel:${business.phoneTel}`} />
              <ContactRow icon={Globe} label="Website" value={business.websiteLabel} href={business.website} />
              <ContactRow icon={Clock} label="Plus Code" value={business.plusCode} href={business.directions} />
            </Reveal>

            {/* Popular times */}
            <Reveal delay={80}>
              <div className="rounded-2xl border border-edge bg-panel-soft p-5">
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-fg">
                    <Sparkles width={16} height={16} className="text-gold-deep" /> Popular times
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-500" /> Live · Saturday
                  </span>
                </div>
                <div className="mt-5 flex h-28 items-end justify-between gap-2">
                  {bars.map((v, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center justify-end gap-2">
                      <div className="flex w-full items-end justify-center" style={{ height: "100%" }}>
                        <div
                          className={`bar-grow w-full max-w-[1.6rem] rounded-t-md transition-colors ${
                            i === nowIdx
                              ? "bg-gradient-to-t from-gold-deep to-gold-soft"
                              : "bg-fg/15 hover:bg-fg/30"
                          }`}
                          style={{ height: `${v}%`, animationDelay: `${i * 60}ms` }}
                          title={`${v}% busy`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[10px] font-medium uppercase tracking-wider text-fg-3">
                  {popularHours.map((h) => (
                    <span key={h} className="flex-1 text-center">
                      {h}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-fg-2">
                  Evenings from 7pm are our busiest — book ahead for Friday & Saturday nights.
                </p>
              </div>
            </Reveal>

            {/* action buttons */}
            <Reveal delay={140}>
              <div className="flex flex-wrap gap-3">
                <a
                  href={business.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-soft px-5 py-3 text-sm font-semibold text-espresso shadow-md shadow-gold/20 transition-transform hover:scale-[1.03]"
                >
                  <MapPin width={16} height={16} /> Get Directions
                </a>
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-edge-strong px-5 py-3 text-sm font-semibold text-fg transition-colors hover:bg-gold/10"
                >
                  <Whatsapp width={16} height={16} /> Message us
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: map */}
          <Reveal delay={100}>
            <div className="relative h-full min-h-[24rem] overflow-hidden rounded-3xl border border-edge shadow-xl">
              <iframe
                title="XOXO location map"
                src={business.mapEmbed}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, filter: "saturate(0.9) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/85 to-transparent p-5">
                <div className="text-cream">
                  <div className="font-display text-lg">XOXO by Tasty Bites KGL</div>
                  <div className="text-xs text-cream/70">{business.address}</div>
                </div>
                <a
                  href={business.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-espresso"
                >
                  Open <ArrowRight width={15} height={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
