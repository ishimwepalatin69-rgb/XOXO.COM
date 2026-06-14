import { menuItems, rf } from "@/data/menu";
import { img } from "@/data/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { ArrowRight } from "./ui/Icons";

const signatures = menuItems.filter((m) => m.signature);

export function Signature() {
  return (
    <section className="grain relative overflow-hidden bg-panel-2 py-24 sm:py-32">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url(${img.candleSetup})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Chef's Signatures"
          title={
            <>
              The dishes we're <span className="text-gradient-gold italic">known for</span>
            </>
          }
          description="Three plates that capture the XOXO spirit — fire, craft and flavour worth sharing."
        />

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {signatures.map((dish, i) => (
            <Reveal key={dish.id} delay={i * 110}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-edge bg-panel shadow-lg shadow-shadow transition-all duration-500 hover:-translate-y-1.5 hover:border-edge-strong">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-gold/40 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold-soft backdrop-blur">
                    Signature
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-full bg-gradient-to-r from-gold-deep to-gold-soft px-4 py-1.5 text-sm font-bold text-espresso shadow-lg">
                    {rf(dish.price)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-gold-deep">
                    {dish.tags?.[0]}
                  </div>
                  <h3 className="mt-2 font-display text-2xl text-fg">{dish.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-2">{dish.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={120}>
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-luxe text-gold-deep transition-colors hover:text-gold"
          >
            View the full menu
            <ArrowRight width={18} height={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
