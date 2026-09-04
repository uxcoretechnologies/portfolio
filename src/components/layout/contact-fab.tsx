"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/social-icons";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const waMessage = encodeURIComponent("Hi! I'd like to know more about UX Core Technologies.");

/**
 * Persistent floating call/WhatsApp launcher, mounted once in the root
 * layout. Collapsed it's a single pulsing button; opening it reveals two
 * real <a> actions (tel: / wa.me) so both remain crawlable and
 * right-click-able, not just onClick handlers.
 */
export function ContactFab() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  const actions = [
    {
      key: "whatsapp",
      label: "WhatsApp us",
      sub: site.whatsappPhone,
      href: `https://wa.me/${site.whatsappNumber}?text=${waMessage}`,
      icon: WhatsappIcon,
      iconClassName: "bg-[#25D366] text-white",
    },
    {
      key: "call",
      label: "Call us",
      sub: site.phone,
      href: `tel:+${site.callNumber}`,
      icon: Phone,
      iconClassName: "bg-primary text-white",
    },
  ];

  return (
    <div ref={wrapperRef} className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label="Contact options"
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end gap-2.5"
          >
            {actions.map((action, i) => (
              <motion.a
                key={action.key}
                role="menuitem"
                href={action.href}
                target={action.key === "whatsapp" ? "_blank" : undefined}
                rel={action.key === "whatsapp" ? "noreferrer noopener" : undefined}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.18, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-3 rounded-full border border-border bg-surface py-2 pl-4 pr-2 shadow-lg shadow-black/[0.08] transition-colors hover:border-border-strong"
              >
                <span className="text-right">
                  <span className="block text-sm font-semibold leading-tight text-foreground">
                    {action.label}
                  </span>
                  <span className="block text-xs leading-tight text-muted">{action.sub}</span>
                </span>
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-105",
                    action.iconClassName
                  )}
                >
                  <action.icon className="size-5" />
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Contact us on call or WhatsApp"}
        onClick={() => setOpen((v) => !v)}
        className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-xl shadow-primary/25 transition-transform hover:scale-105 active:scale-95"
      >
        {!open && (
          <span
            className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/50"
            style={{ animationDuration: "2.4s" }}
            aria-hidden="true"
          />
        )}
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
            transition={{ duration: 0.16 }}
            className="flex items-center justify-center"
          >
            {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
