"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { cn } from "@/lib/utils";

/**
 * A draggable, depth-scaled screen gallery — the centered slide reads full
 * size and full opacity, neighbors recede — modeled on the swipe-through
 * case-study galleries seen on polished agency sites, rebuilt with our own
 * components and embla (already a project dependency).
 */
export type GalleryImage = string | { src: string; alt: string };

export function ProjectGallery({ images, color }: { images: GalleryImage[]; color: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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
    <div className="relative mx-auto max-w-4xl">
      {/* Thin vertical guide lines framing the carousel, echoing the site's line motif */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(90%,720px)] -translate-x-1/2 border-x border-border sm:block"
        aria-hidden="true"
      />

      <div className="overflow-hidden py-6" ref={emblaRef}>
        <div className="flex cursor-grab active:cursor-grabbing">
          {images.map((image, i) => {
            const distance = Math.min(
              Math.abs(i - selected),
              Math.abs(i - selected + images.length),
              Math.abs(i - selected - images.length)
            );
            const isReal = typeof image !== "string";
            return (
              <div
                key={isReal ? image.src : image}
                className="min-w-0 shrink-0 basis-[62%] px-3 transition-all duration-500 sm:basis-[38%] lg:basis-[26%]"
                style={{
                  transform: `scale(${distance === 0 ? 1 : distance === 1 ? 0.88 : 0.78})`,
                  opacity: distance === 0 ? 1 : distance === 1 ? 0.6 : 0.35,
                }}
              >
                {isReal ? (
                  <PlaceholderMedia
                    src={image.src}
                    alt={image.alt}
                    ratio="aspect-[5/8]"
                    className="rounded-[20px]"
                  />
                ) : (
                  <PlaceholderMedia label={image} ratio="aspect-[5/8]" gradient={color} className="rounded-[20px]" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className={cn("mt-6 flex items-center justify-center gap-4")}>
        <button
          aria-label="Previous screen"
          onClick={scrollPrev}
          className="flex size-10 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex items-center gap-2">
          {images.map((image, i) => (
            <span
              key={typeof image === "string" ? image : image.src}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === selected ? "w-6 bg-primary" : "w-1.5 bg-border-strong"
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
