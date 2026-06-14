import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Close, ChevronLeft, ChevronRight } from "./ui/Icons";

// Owner-supplied gallery photos (Photos & Vibe).
const shots = [
  { src: "https://files.catbox.moe/wie81j.jpg", caption: "The dining room" },
  { src: "https://files.catbox.moe/3je0b9.jpg", caption: "Peppered beef, mushroom jus" },
  { src: "https://files.catbox.moe/pqulpy.jpg", caption: "Choco-Berry Tower" },
  { src: "https://files.catbox.moe/jdgock.jpg", caption: "The bar" },
  { src: "https://files.catbox.moe/z8vxpf.jpg", caption: "Wok-fired specials" },
  { src: "https://files.catbox.moe/5hydqo.jpg", caption: "Set for the evening" },
  { src: "https://files.catbox.moe/sjixw1.jpg", caption: "Spaghetti Carbonara" },
  { src: "https://files.catbox.moe/jt76o8.jpg", caption: "Made for sharing" },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + shots.length) % shots.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % shots.length)),
    []
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, prev, next]);

  return (
    <section id="gallery" className="grain relative bg-panel-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Photos & Vibe"
          title={
            <>
              A taste of the <span className="text-gradient-gold italic">XOXO</span> atmosphere
            </>
          }
          description="Candle-light, full plates and good company. Tap any image to explore."
        />

        <div className="mt-14 columns-2 gap-4 [column-fill:_balance] lg:columns-3">
          {shots.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 80} className="mb-4 break-inside-avoid">
              <button
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-gold/15 bg-espresso"
              >
                <img
                  src={s.src}
                  alt={s.caption}
                  loading="lazy"
                  className="block w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="p-4 font-display text-lg italic text-cream">{s.caption}</span>
                </div>
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-gold/40 bg-ink/40 text-gold-soft opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  +
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && index !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm animate-fade-up"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-gold/30 text-cream transition-colors hover:border-gold/60"
            aria-label="Close"
          >
            <Close width={24} height={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-gold/30 text-cream transition-colors hover:border-gold/60 sm:left-8"
            aria-label="Previous"
          >
            <ChevronLeft width={26} height={26} />
          </button>
          <figure className="max-h-[85vh] max-w-4xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={shots[index].src}
              alt={shots[index].caption}
              className="max-h-[78vh] w-auto rounded-2xl border border-gold/20 object-contain"
            />
            <figcaption className="mt-4 text-center font-display text-xl italic text-gold-soft">
              {shots[index].caption}
              <span className="ml-3 text-sm not-italic text-cream/40">
                {index + 1} / {shots.length}
              </span>
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-gold/30 text-cream transition-colors hover:border-gold/60 sm:right-8"
            aria-label="Next"
          >
            <ChevronRight width={26} height={26} />
          </button>
        </div>
      )}
    </section>
  );
}
