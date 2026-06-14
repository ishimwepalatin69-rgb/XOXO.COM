import { useMemo, useState } from "react";
import { menuItems, categories, rf } from "@/data/menu";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Whatsapp, Plus, Minus, Check } from "./ui/Icons";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/utils/cn";

export function Menu() {
  const [active, setActive] = useState<string>("All");
  const { add, inc, dec, qtyOf, count, subtotal, setOpen } = useCart();

  const filtered = useMemo(
    () => (active === "All" ? menuItems : menuItems.filter((m) => m.category === active)),
    [active]
  );

  return (
    <section id="menu" className="relative bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Menu"
          title={
            <>
              Crafted to <span className="text-gradient-gold italic">share</span> & savour
            </>
          }
          description="Honest prices, generous plates. Filter by craving — every dish is made to order in the XOXO kitchen."
        />

        {/* Category tabs */}
        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  active === cat
                    ? "border-transparent bg-gradient-to-r from-gold-deep via-gold to-gold-soft text-espresso shadow-md shadow-gold/20"
                    : "border-edge bg-panel-soft text-fg-2 hover:border-edge-strong hover:text-fg"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((dish, i) => (
            <Reveal key={dish.id} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-panel shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-edge-strong hover:shadow-xl hover:shadow-shadow">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  {dish.tags?.[0] && (
                    <span className="absolute left-3 top-3 rounded-full border border-gold/30 bg-canvas/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-deep backdrop-blur">
                      {dish.tags[0]}
                    </span>
                  )}
                  <div className="absolute bottom-3 right-3 rounded-full bg-black/85 px-3 py-1 text-sm font-bold text-gold-soft backdrop-blur">
                    {rf(dish.price)}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl leading-tight text-fg">{dish.name}</h3>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-2">{dish.description}</p>
                  <div className="mt-4 flex items-center gap-2 border-t border-edge pt-3 text-[11px]">
                    {dish.vegetarian && (
                      <span className="rounded-full bg-sage/15 px-2 py-0.5 font-semibold text-sage">Veg</span>
                    )}
                    {dish.spicy && (
                      <span className="rounded-full bg-clay/15 px-2 py-0.5 font-semibold text-clay">🌶 Spicy</span>
                    )}
                    <span className="ml-auto text-xs font-medium text-fg-3">{dish.category}</span>
                  </div>

                  {/* order control */}
                  {qtyOf(dish.id) > 0 ? (
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1 rounded-full border border-edge-strong bg-panel-soft p-1">
                        <button
                          onClick={() => dec(dish.id)}
                          className="grid h-8 w-8 place-items-center rounded-full text-fg transition-colors hover:bg-gold/15"
                          aria-label={`Fewer ${dish.name}`}
                        >
                          <Minus width={16} height={16} />
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-fg">
                          {qtyOf(dish.id)}
                        </span>
                        <button
                          onClick={() => inc(dish.id)}
                          className="grid h-8 w-8 place-items-center rounded-full text-fg transition-colors hover:bg-gold/15"
                          aria-label={`More ${dish.name}`}
                        >
                          <Plus width={16} height={16} />
                        </button>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-deep">
                        <Check width={14} height={14} /> In your order
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => add(dish)}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-edge-strong bg-panel-soft py-2.5 text-sm font-semibold text-fg transition-all hover:border-gold hover:bg-gold/10 hover:text-gold-deep"
                    >
                      <Plus width={16} height={16} /> Add to Order
                    </button>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Order CTA */}
        <Reveal className="mt-14">
          <div className="flex flex-col items-center justify-between gap-5 overflow-hidden rounded-3xl border border-edge bg-panel-2 px-7 py-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-2xl text-fg">
                {count > 0 ? "Ready to check out?" : "Rather dine at home?"}
              </h3>
              <p className="mt-1 text-sm text-fg-2">
                {count > 0
                  ? `You have ${count} ${count === 1 ? "item" : "items"} in your order (${rf(subtotal)}).`
                  : "Kerbside pickup & no-contact delivery available across Kigali."}
              </p>
            </div>
            <button
              onClick={() => setOpen(true)}
              disabled={count === 0}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold shadow-lg shadow-gold/20 transition-transform",
                count > 0
                  ? "bg-gradient-to-r from-gold-deep via-gold to-gold-soft text-espresso hover:scale-[1.03]"
                  : "cursor-not-allowed bg-panel-soft text-fg-3 shadow-none"
              )}
            >
              <Whatsapp width={18} height={18} />
              {count > 0 ? "Review your order" : "Your order is empty"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
