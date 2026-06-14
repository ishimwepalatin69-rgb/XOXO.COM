import { cn } from "@/utils/cn";
import { Star } from "./Icons";

type StarsProps = {
  rating: number;
  size?: number;
  className?: string;
};

export function Stars({ rating, size = 16, className }: StarsProps) {
  return (
    <div className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - (i - 1)));
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star width={size} height={size} className="absolute inset-0 text-gold/25" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star width={size} height={size} className="text-gold" />
            </span>
          </span>
        );
      })}
    </div>
  );
}
