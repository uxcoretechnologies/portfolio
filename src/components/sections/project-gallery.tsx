"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { cn } from "@/lib/utils";

/**
 * A centered, multi-screen gallery — several case-study screens visible at
 * once, the middle one full size and in focus, neighbors receded to either
 * side. Built on Swiper (swiper/react) rather than a hand-rolled distance/
 * scale calculation: an earlier version reimplemented this centering and
 * looping logic itself on top of embla-carousel-react, which turned out
 * fragile (an unmemoized options object was silently reinitializing the
 * carousel on every slide change, freezing the scroll position).
 *
 * Wraparound (last → first, first → last) is handled by hand in the
 * prev/next click handlers below rather than via Swiper's own `loop` mode:
 * loop mode clones slides internally to fake an infinite strip, and with
 * only 5 images per case study its clone-buffer requirement (roughly
 * `ceil(slidesPerView) + ceil(slidesPerView / 2)` real slides, before
 * loop even engages) is right at the edge of what a gallery this size can
 * supply — in testing it silently produced zero clones and left navigation
 * stuck after a single click. A manual `slideTo` wrap sidesteps that
 * failure mode entirely and is visually indistinguishable for a
 * button-driven (as opposed to drag-past-the-edge) carousel like this one.
 */
export type GalleryImage = string | { src: string; alt: string };

export function ProjectGallery({ images, color }: { images: GalleryImage[]; color: string }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  // Opens on the 2nd screen rather than the 1st — clamped for the (unused
  // in practice) case of a gallery with only one image.
  const initialSlide = Math.min(1, images.length - 1);
  const [selected, setSelected] = useState(initialSlide);

  // Swiper measures its container once at mount to size/position slides. If
  // that container's real width isn't settled yet at that instant (a layout
  // shift from a web font swap, images loading in above it, or this section
  // simply not being laid out yet), it locks in a wrong size — a single
  // deferred re-measure the moment layout has actually settled corrects it.
  useEffect(() => {
    const raf = requestAnimationFrame(() => swiperRef.current?.update());
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={rootRef} className="relative mx-auto max-w-4xl">
      {/* Thin vertical guide lines framing the carousel, echoing the site's line motif */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(90%,720px)] -translate-x-1/2 border-x border-border sm:block"
        aria-hidden="true"
      />

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setSelected(swiper.activeIndex)}
        initialSlide={initialSlide}
        centeredSlides
        watchSlidesProgress
        slidesPerView={1.4}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={24}
        className="!py-6"
      >
        {images.map((image) => {
          const isReal = typeof image !== "string";
          return (
            <SwiperSlide
              key={isReal ? image.src : image}
              className={cn(
                "shrink-0 opacity-35 transition-all duration-500 [&.swiper-slide-active]:opacity-100",
                "scale-[0.78] [&.swiper-slide-active]:scale-100",
                "[&.swiper-slide-next]:scale-[0.88] [&.swiper-slide-next]:opacity-60",
                "[&.swiper-slide-prev]:scale-[0.88] [&.swiper-slide-prev]:opacity-60"
              )}
            >
              {isReal ? (
                <PlaceholderMedia src={image.src} alt={image.alt} ratio="aspect-[5/8]" className="rounded-[20px]" />
              ) : (
                <PlaceholderMedia label={image} ratio="aspect-[5/8]" gradient={color} className="rounded-[20px]" />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          aria-label="Previous screen"
          onClick={() => {
            const swiper = swiperRef.current;
            if (!swiper) return;
            if (swiper.isBeginning) swiper.slideTo(images.length - 1);
            else swiper.slidePrev();
          }}
          className="flex size-10 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex items-center gap-2">
          {images.map((image, i) => (
            <button
              key={typeof image === "string" ? image : image.src}
              aria-label={`Go to screen ${i + 1}`}
              onClick={() => swiperRef.current?.slideTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === selected ? "w-6 bg-primary" : "w-1.5 bg-border-strong hover:bg-muted"
              )}
            />
          ))}
        </div>
        <button
          aria-label="Next screen"
          onClick={() => {
            const swiper = swiperRef.current;
            if (!swiper) return;
            if (swiper.isEnd) swiper.slideTo(0);
            else swiper.slideNext();
          }}
          className="flex size-10 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:text-foreground"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
