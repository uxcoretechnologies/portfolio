import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { LinkedinIcon, GithubIcon, DribbbleIcon, XIcon } from "@/components/ui/social-icons";
import { allNavLinks, site } from "@/lib/data/site";
import { services } from "@/lib/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="tone-dark border-t border-border bg-background">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" aria-label="UX Core Technologies home" className="inline-flex">
            <Logo variant="light" height={26} />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted">{site.description}</p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { icon: LinkedinIcon, href: site.social.linkedin, label: "LinkedIn" },
              { icon: XIcon, href: site.social.x, label: "X" },
              { icon: DribbbleIcon, href: site.social.dribbble, label: "Dribbble" },
              { icon: GithubIcon, href: site.social.github, label: "GitHub" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary/60 hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Company</h3>
          <ul className="mt-4 space-y-3">
            {allNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold text-foreground">Services</h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
        <p className="text-xs text-muted-2">
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="text-xs text-muted-2 transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-muted-2 transition-colors hover:text-foreground">
            Terms of Service
          </Link>
          <p className="text-xs text-muted-2">{site.email}</p>
        </div>
      </Container>
    </footer>
  );
}
