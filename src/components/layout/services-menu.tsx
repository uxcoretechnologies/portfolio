"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { services, serviceGroups } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const closeDelay = 150;

export function ServicesMenu({ active }: { active?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const clearTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearTimer();
    closeTimer.current = setTimeout(() => setOpen(false), closeDelay);
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  const hoverProps = {
    onMouseEnter: () => {
      clearTimer();
      setOpen(true);
    },
    onMouseLeave: scheduleClose,
  };

  return (
    // Keyed by pathname: on navigation, React fully unmounts and remounts
    // this component instead of relying on AnimatePresence's exit animation
    // to finish — that exit gets interrupted by the route change, which
    // otherwise leaves an invisible-but-still-`pointer-events: auto` panel
    // node behind (opacity settles to 0, but the DOM node itself lingers).
    <div key={pathname} ref={wrapperRef} className="relative">
      <div {...hoverProps} className="inline-flex">
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls="services-menu-panel"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex h-10 items-center gap-1 rounded-full px-4 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground",
            (open || active) && "bg-surface text-foreground"
          )}
        >
          Services
          <ChevronDown className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="services-menu-panel"
            role="menu"
            {...hoverProps}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-40 border-t border-b border-border bg-background shadow-xl shadow-black/[0.06]"
          >
            <Container>
              <div className="grid grid-cols-[1fr_260px]">
                <div className="grid grid-cols-3 py-6">
                  {serviceGroups.map((group, i) => (
                    <div key={group} className={cn("px-6", i > 0 && "border-l border-border")}>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-label-accent">
                        {group}
                      </p>
                      <ul className="mt-3 flex flex-col gap-1">
                        {services
                          .filter((s) => s.group === group)
                          .map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/services/${service.slug}`}
                                role="menuitem"
                                onClick={() => setOpen(false)}
                                className="group -mx-2 flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-surface hover:text-foreground"
                              >
                                <Icon
                                  name={service.icon}
                                  className="size-4 shrink-0 text-muted-2 transition-colors group-hover:text-primary"
                                />
                                {service.navLabel}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured CTA */}
                <div className="flex flex-col justify-between gap-4 border-l border-border py-6 pl-6">
                  <div className="rounded-2xl bg-surface p-5">
                    <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Sparkles className="size-4" />
                    </div>
                    <h3 className="mt-3 font-display text-base font-semibold">Not sure where to start?</h3>
                    <p className="mt-1.5 text-sm text-muted">
                      Tell us about your project — we’ll point you to the right service, free of charge.
                    </p>
                    <Button href="/contact" size="sm" onClick={() => setOpen(false)} className="mt-4 w-full">
                      Talk to us <ArrowUpRight className="size-3.5" />
                    </Button>
                  </div>
                </div>
              </div>

              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-t border-border py-4 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                View all services
                <ArrowUpRight className="size-3.5" />
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
