"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { services, serviceGroups } from "@/lib/data/services";
import { products } from "@/lib/data/products";
import { cn } from "@/lib/utils";

const closeDelay = 150;

type PanelId = "services" | "products";

const panels: { id: PanelId; label: string; href: string; viewAllLabel: string }[] = [
  { id: "services", label: "All Services", href: "/services", viewAllLabel: "View all services" },
  { id: "products", label: "Products", href: "/products", viewAllLabel: "View all products" },
];

export function ServicesMenu({ active }: { active?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Tabs the rail switches between — hovering/selecting a rail item swaps
  // the content shown, it doesn't navigate. Only the "View all…" link and
  // individual items inside a panel actually go anywhere.
  const [activePanel, setActivePanel] = useState<PanelId>(
    pathname.startsWith("/products") ? "products" : "services"
  );
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

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

  const activeMeta = panels.find((p) => p.id === activePanel)!;

  return (
    <div ref={wrapperRef} className="relative">
      <div {...hoverProps} className="inline-flex">
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={panelId}
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
            id={panelId}
            role="menu"
            {...hoverProps}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-40 border-t border-b border-border bg-background shadow-xl shadow-black/[0.06]"
          >
            <Container>
              <div className="grid grid-cols-[220px_1fr_260px]">
                {/* Quick-nav rail — switches the panel on hover/focus, doesn't navigate itself */}
                <div className="flex flex-col gap-1 border-r border-border py-6 pr-6" role="tablist">
                  {panels.map((panel) => {
                    const isActive = activePanel === panel.id;
                    return (
                      <button
                        key={panel.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onMouseEnter={() => setActivePanel(panel.id)}
                        onFocus={() => setActivePanel(panel.id)}
                        onClick={() => setActivePanel(panel.id)}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors",
                          isActive ? "bg-surface text-foreground" : "text-muted hover:bg-surface hover:text-foreground"
                        )}
                      >
                        {panel.label}
                        <ChevronRight className="size-3.5 text-muted-2" />
                      </button>
                    );
                  })}
                </div>

                {/* Panel content */}
                {activePanel === "services" ? (
                  <div className="grid grid-cols-3">
                    {serviceGroups.map((group, i) => (
                      <div key={group} className={cn("px-6 py-6", i > 0 && "border-l border-border")}>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-label-accent">
                          {group}
                        </p>
                        <ul className="mt-3 flex flex-col gap-1">
                          {services
                            .filter((s) => s.group === group)
                            .map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={`/services#${service.slug}`}
                                  role="menuitem"
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
                ) : (
                  <div className="px-6 py-6">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-label-accent">
                      Our Products
                    </p>
                    <ul className="mt-3 grid grid-cols-2 gap-1">
                      {products.map((product) => (
                        <li key={product.slug}>
                          <Link
                            href={`/products#${product.slug}`}
                            role="menuitem"
                            className="group -mx-2 flex items-start gap-2.5 rounded-lg px-2 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-surface hover:text-foreground"
                          >
                            <Icon
                              name={product.icon}
                              className="mt-0.5 size-4 shrink-0 text-muted-2 transition-colors group-hover:text-primary"
                            />
                            <span>
                              {product.name}
                              <span className="block text-xs font-normal text-muted">{product.tagline}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Featured CTA */}
                <div className="flex flex-col justify-between gap-4 border-l border-border py-6 pl-6">
                  <div className="rounded-2xl bg-surface p-5">
                    <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Sparkles className="size-4" />
                    </div>
                    <h3 className="mt-3 font-display text-base font-semibold">
                      {activePanel === "services" ? "Not sure where to start?" : "Curious how these work?"}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted">
                      {activePanel === "services"
                        ? "Tell us about your project — we’ll point you to the right service, free of charge."
                        : "Tell us what you’re building — we’ll show you how our tools could fit in."}
                    </p>
                    <Button href="/contact" size="sm" className="mt-4 w-full">
                      Talk to us <ArrowUpRight className="size-3.5" />
                    </Button>
                  </div>
                </div>
              </div>

              <Link
                href={activeMeta.href}
                className="flex items-center justify-between border-t border-border py-4 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {activeMeta.viewAllLabel}
                <ArrowUpRight className="size-3.5" />
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
