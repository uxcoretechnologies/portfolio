import { PixelTrail } from "@/components/ui/pixel-trail";

/**
 * Hero video asset demonstrating UX Core Technologies' AI Agent workflow in action.
 * Renders high-performance looping video (.webm / .mp4) with poster image fallback.
 */
export function HeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 via-violet-500/15 to-transparent blur-2xl" />

      {/* Video container */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-2xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-ai-flow-poster.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-ai-flow.webm" type="video/webm" />
          <source src="/videos/hero-ai-flow.mp4" type="video/mp4" />
        </video>
      </div>

      <PixelTrail className="absolute -right-3 -top-3 w-9 opacity-80" />
      <PixelTrail className="absolute -bottom-3 -left-3 w-7 opacity-40" flip />
    </div>
  );
}
