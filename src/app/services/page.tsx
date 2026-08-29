import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Band } from "@/components/ui/band";
import { ContactCTA } from "@/components/sections/contact-cta";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "UX/UI design, web and mobile development, AI agents, data engineering, enterprise solutions, and IoT — placeholder service overview for UX Core Technologies.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 pb-16 sm:pt-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Flexible solutions for every business model."
              description="Placeholder: from early-stage product design to enterprise-scale platforms, every engagement pairs senior design and engineering talent."
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="flex flex-col gap-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.04}>
              <div
                id={service.slug}
                className="scroll-mt-24 grid grid-cols-1 gap-8 rounded-3xl border border-border bg-surface p-8 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-start"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                  <Icon name={service.icon} className="size-6" />
                </div>

                <div>
                  <h2 className="font-display text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-3 max-w-2xl text-muted">{service.description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-sm">
                        <Check className="size-4 shrink-0 text-primary" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:pt-2">
                  <Button href="/contact" variant="secondary" size="sm">
                    Discuss this <ArrowUpRight className="size-3.5" />
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <Band tone="dark">
        <ContactCTA />
      </Band>
    </>
  );
}
