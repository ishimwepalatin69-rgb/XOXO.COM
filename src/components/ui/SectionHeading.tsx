import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-luxe text-gold-deep",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-gold/60" />
          {eyebrow}
          <span className="h-px w-8 bg-gold/60" />
        </div>
      )}
      <h2 className="font-display text-4xl leading-[1.08] tracking-tight text-fg sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-fg-2 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
