import { cn } from "@/lib/utils";

export function Marquee({
  items,
  reverse = false,
  className,
  itemClassName,
}: {
  items: React.ReactNode[];
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-center gap-10 pr-10",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            "group-hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <div key={idx} className={cn("shrink-0", itemClassName)}>
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
