import { useId } from "react";
import { PixelTrail } from "@/components/ui/pixel-trail";

/**
 * Original abstract hero graphic built from the brand's own gradient
 * (blue → violet → magenta): soft blurred color fields, a faint digit
 * texture nodding at "tech", and the logo's dot-trail motif scattered in.
 * Pure CSS/SVG — no external image assets.
 */
export function HeroArt() {
  const patternId = useId();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
      <div
        className="absolute inset-0"
        style={{
          maskImage: "radial-gradient(ellipse 65% 65% at 50% 45%, black 55%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 65% at 50% 45%, black 55%, transparent 100%)",
        }}
      >
        <div className="animate-drift absolute -left-6 top-4 size-56 rounded-full bg-[radial-gradient(circle,var(--brand-blue)_0%,transparent_70%)] opacity-70 blur-3xl sm:size-72" />
        <div
          className="animate-drift absolute right-0 top-20 size-64 rounded-full bg-[radial-gradient(circle,var(--brand-violet)_0%,transparent_70%)] opacity-60 blur-3xl sm:size-80"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="animate-drift absolute bottom-4 left-1/4 size-52 rounded-full bg-[radial-gradient(circle,var(--brand-magenta)_0%,transparent_70%)] opacity-50 blur-3xl sm:size-64"
          style={{ animationDelay: "-14s" }}
        />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.08] mix-blend-multiply"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id={patternId}
              width="38"
              height="38"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(14)"
            >
              <text x="0" y="14" fontFamily="var(--font-mono)" fontSize="12" fill="var(--brand-ink)">
                01
              </text>
              <text x="16" y="32" fontFamily="var(--font-mono)" fontSize="12" fill="var(--brand-ink)">
                10
              </text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
      </div>

      <PixelTrail className="absolute right-4 top-2 w-9 opacity-80 sm:right-8" />
      <PixelTrail className="absolute bottom-6 left-2 w-7 opacity-40 sm:left-6" flip />
    </div>
  );
}
