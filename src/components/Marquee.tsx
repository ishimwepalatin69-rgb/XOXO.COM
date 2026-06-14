const items = [
  "Women-Owned",
  "LGBTQ+ Friendly",
  "Grilled to Order",
  "Made for Sharing",
  "Craft Cocktails",
  "Kerbside Pickup",
  "No-Contact Delivery",
  "Open till 11 pm",
  "Kigali's Table",
];

export function Marquee() {
  return (
    <div className="marquee-pause relative overflow-hidden border-y border-edge bg-panel-2 py-4">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-lg italic text-fg">{item}</span>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-gold">
              <path
                fill="currentColor"
                d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2z"
              />
            </svg>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-panel-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-panel-2 to-transparent" />
    </div>
  );
}
