"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown, ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { navLinks } from "@/lib/data/site";
import { services, serviceGroups } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = original;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-foreground/25 backdrop-blur-[2px] lg:hidden"
            aria-hidden="true"
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-[70] flex w-[88vw] max-w-sm flex-col border-l border-border bg-background lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <Link href="/" onClick={onClose} aria-label="UX Core Technologies home">
                <Logo variant="color" height={28} />
              </Link>
              <button
                aria-label="Close menu"
                onClick={onClose}
                className="flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-2">
              <Link
                href="/"
                onClick={onClose}
                className="block border-b border-dashed border-border py-4 text-sm font-medium"
              >
                Home
              </Link>

              <div className="border-b border-dashed border-border">
                <button
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-4 text-left text-sm font-medium"
                >
                  Services
                  <ChevronDown
                    className={cn("size-4 text-muted-2 transition-transform duration-300", servicesOpen && "rotate-180")}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300",
                    servicesOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="flex flex-col gap-5 overflow-hidden pl-1">
                    {serviceGroups.map((group) => (
                      <div key={group}>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-label-accent">
                          {group}
                        </p>
                        <ul className="mt-2 flex flex-col gap-2.5">
                          {services
                            .filter((s) => s.group === group)
                            .map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={`/services#${service.slug}`}
                                  onClick={onClose}
                                  className="flex items-center gap-2.5 text-sm text-foreground/90"
                                >
                                  <Icon name={service.icon} className="size-4 text-muted-2" />
                                  {service.navLabel}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                    <Link
                      href="/services"
                      onClick={onClose}
                      className="flex items-center gap-1 text-sm font-medium text-primary"
                    >
                      View all services <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/products"
                onClick={onClose}
                className="block border-b border-dashed border-border py-4 text-sm font-medium"
              >
                Products
              </Link>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block border-b border-dashed border-border py-4 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-border p-4">
              <Button href="/contact" onClick={onClose} className="w-full">
                Start a Project
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
