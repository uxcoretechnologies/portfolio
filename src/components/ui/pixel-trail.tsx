import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * The diagonal dot-trail lifted from the UX Core logomark (next to the "X").
 * Used as a recurring signature accent — section dividers, card corners,
 * the hero graphic — so the brand mark's own geometry becomes the site's
 * decorative language instead of a generic pattern.
 */
export function PixelTrail({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  const gradientId = useId();
  const dots = [
    { x: 29.3, y: 0, w: 10, h: 11 },
    { x: 48.3, y: 0, w: 10, h: 11 },
    { x: 47.3, y: 18, w: 11, h: 11 },
    { x: 29.3, y: 18, w: 10, h: 11 },
    { x: 11.3, y: 18, w: 10, h: 11 },
    { x: 0.3, y: 35, w: 11, h: 11 },
    { x: 25.3, y: 35, w: 11, h: 11 },
  ];

  return (
    <svg
      viewBox="0 0 59 46"
      fill="none"
      className={cn("h-auto w-12", flip && "-scale-x-100", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="29.5" y1="0" x2="29.5" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--brand-blue)" />
          <stop offset="1" stopColor="var(--brand-violet)" />
        </linearGradient>
      </defs>
      {dots.map((d, i) => (
        <rect
          key={i}
          x={d.x}
          y={d.y}
          width={d.w}
          height={d.h}
          rx={2}
          fill={`url(#${gradientId})`}
        />
      ))}
    </svg>
  );
}
