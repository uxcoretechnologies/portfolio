"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { cn } from "@/lib/utils";

/**
 * A simple, single-screen-at-a-time gallery — one slide fills the frame,
 * swipe/drag or the prev/next controls move to the next, dots show and set
 * position. Deliberately plain: an earlier version depth-scaled the
 * neighboring slides for a "carousel" look, which turned out fragile (an
 * unmemoized embla options object was silently reinitializing the carousel
 * on every slide change, freezing/resetting the scroll position) and added
 * complexity this gallery doesn't need — the case-study screens read better
 * one at a time anyway.
 */
export type GalleryImage = string | { src: string; alt: string };

// Hoisted to a stable reference — embla-carousel-react reinitializes
// whenever this options object's identity changes, so an inline literal
// (recreated on every render) would silently reset the carousel's scroll
// position on every slide change.
const EMBLA_OPTIONS = { loop: true, align: "center" } as const;

export function ProjectGallery({ images, color }: { images: GalleryImage[]; color: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_OPTIONS);
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="mx-auto w-full max-w-sm sm:max-w-md">
      <div className="overflow-hidden rounded-[24px] shadow-xl shadow-black/10" ref={emblaRef}>
        <div className="flex cursor-grab active:cursor-grabbing">
          {images.map((image) => {
            const isReal = typeof image !== "string";
            return (
              <div key={isReal ? image.src : image} className="min-w-0 shrink-0 basis-full">
                {isReal ? (
                  <PlaceholderMedia src={image.src} alt={image.alt} ratio="aspect-[5/8]" className="rounded-none border-0" />
                ) : (
                  <PlaceholderMedia
                    label={image}
                    ratio="aspect-[5/8]"
                    gradient={color}
                    className="rounded-none border-0"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          aria-label="Previous screen"
          onClick={scrollPrev}
          className="flex size-10 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex items-center gap-2">
          {images.map((image, i) => (
            <button
              key={typeof image === "string" ? image : image.src}
              aria-label={`Go to screen ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === selected ? "w-6 bg-primary" : "w-1.5 bg-border-strong hover:bg-muted"
              )}
            />
          ))}
        </div>
        <button
          aria-label="Next screen"
          onClick={scrollNext}
          className="flex size-10 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:text-foreground"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
