import { useEffect, useState } from "react";
import { business } from "@/data/site";
import { Whatsapp, ArrowUp } from "./ui/Icons";
import { cn } from "@/utils/cn";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 sm:bottom-7 sm:right-7">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-espresso/90 text-gold-soft shadow-lg backdrop-blur transition-all duration-300 hover:bg-espresso",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <ArrowUp width={20} height={20} />
      </button>
      <a
        href={business.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-900/30 transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <Whatsapp width={28} height={28} className="relative" />
      </a>
    </div>
  );
}
