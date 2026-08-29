"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/data/misc";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="What partners say about working with us" align="center" />
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={`${t.name}-${i}`} className="min-w-0 flex-[0_0_100%] px-2">
                  <div className="rounded-3xl border border-border bg-surface p-10 text-center">
                    <Quote className="mx-auto size-8 text-primary/60" />
                    <p className="mt-6 text-balance font-display text-xl font-medium leading-relaxed sm:text-2xl">
                      {t.quote}
                    </p>
                    <div className="mt-6">
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={scrollPrev}
              className="flex size-10 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:text-foreground"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <span
                  key={`${t.name}-${i}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === selected ? "w-6 bg-primary" : "w-1.5 bg-border-strong"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={scrollNext}
              className="flex size-10 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:text-foreground"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
