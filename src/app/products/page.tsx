import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Band } from "@/components/ui/band";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ContactCTA } from "@/components/sections/contact-cta";
import { products } from "@/lib/data/products";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description: "Placeholder overview of software products built by UX Core Technologies.",
};

const statusStyles: Record<(typeof products)[number]["status"], string> = {
  Live: "bg-emerald-500/10 text-emerald-600",
  Beta: "bg-primary/10 text-primary",
  "Coming Soon": "bg-surface-2 text-muted",
};

export default function ProductsPage() {
  return (
    <>
      <Band tone="light">
        <section className="pt-20 pb-16 sm:pt-28">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Products"
                title="Software we've built for ourselves — and for you"
                description="Placeholder: alongside client work, we build and maintain a small set of our own products, born from problems we kept solving for clients."
              />
            </Reveal>
          </Container>
        </section>

        <section className="pb-24 sm:pb-32">
          <Container>
            <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {products.map((product) => (
                <RevealItem key={product.slug}>
                  <div
                    id={product.slug}
                    className="scroll-mt-24 flex h-full flex-col rounded-2xl border border-border bg-surface p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                        <Icon name={product.icon} className="size-5" />
                      </div>
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-1 text-xs font-medium",
                          statusStyles[product.status]
                        )}
                      >
                        {product.status}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold">{product.name}</h3>
                    <p className="mt-1 text-sm font-medium text-muted">{product.tagline}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{product.description}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      </Band>

      <Band tone="dark">
        <ContactCTA />
      </Band>
    </>
  );
}
