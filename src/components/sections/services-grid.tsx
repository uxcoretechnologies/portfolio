import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { services } from "@/lib/data/services";

export function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32" id="services">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Flexible solutions for every business model."
            description="From early-stage product design to enterprise-scale platforms, we bring the right mix of design and engineering to each engagement."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.slug}>
              <Link
                href={`/services#${service.slug}`}
                id={service.slug}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-surface-2"
              >
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                    <Icon name={service.icon} className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-sm font-medium text-muted transition-colors group-hover:text-primary">
                  Learn more
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
