"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ServicesMenu } from "@/components/layout/services-menu";
import { MobileDrawer } from "@/components/layout/mobile-drawer";
import { navLinks } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes, following React's
  // "adjusting state during render" pattern (avoids a setState-in-effect).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm transition-shadow duration-200",
        scrolled && "shadow-[0_1px_0_0_rgba(15,17,23,0.04),0_8px_24px_-16px_rgba(15,17,23,0.12)]"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <Link href="/" aria-label="UX Core Technologies home" className="flex items-center">
            <Logo variant="color" height={34} />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <ServicesMenu active={pathname.startsWith("/services")} />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={cn(
                  "inline-flex h-10 items-center rounded-full px-4 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground",
                  pathname === link.href && "bg-surface text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <span className="h-6 w-px border-l border-dashed border-border-strong" aria-hidden="true" />
            <Button href="/contact" size="sm">
              Start a Project <ArrowUpRight className="size-4" />
            </Button>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-surface lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </nav>
      </Container>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
