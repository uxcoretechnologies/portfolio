import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowLeft, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Band } from "@/components/ui/band";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ContactCTA } from "@/components/sections/contact-cta";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.group === service.group && s.slug !== slug).slice(0, 3);

  return (
    <>
      <Band tone="light">
        {/* Hero */}
        <section className="pt-20 pb-16 sm:pt-28">
          <Container>
            <Reveal>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-3.5" /> Back to services
              </Link>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_360px]">
              <Reveal>
                <Eyebrow>{service.group}</Eyebrow>
                <h1 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg text-muted">{service.problem}</p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button href="/contact">
                    Start a project <ArrowUpRight className="size-4" />
                  </Button>
                  <Button href="#pricing" variant="secondary">
                    See pricing
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-border bg-surface p-8">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                    <Icon name={service.icon} className="size-6" />
                  </div>
                  <p className="mt-5 font-display text-3xl font-bold text-gradient">{service.stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{service.stat.label}</p>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      </Band>

      {/* What's included */}
      <Band tone="dark">
        <section className="py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHeading eyebrow="What's included" title="Everything this engagement covers" />
            </Reveal>
            <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.capabilities.map((cap) => (
                <RevealItem key={cap}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-surface p-6">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground/90">{cap}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      </Band>

      {/* Process */}
      <Band tone="light">
        <section className="py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHeading eyebrow="How we work" title="Our process for this engagement" />
            </Reveal>
            <RevealGroup className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div
                className="absolute top-6 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block"
                aria-hidden="true"
              />
              {service.process.map((item) => (
                <RevealItem key={item.step} className="relative flex flex-col items-start gap-4">
                  <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border-strong bg-background font-display text-sm font-bold text-primary">
                    {item.step}
                  </div>
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      </Band>

      {/* Tech stack */}
      <Band tone="dark">
        <section className="py-16 sm:py-20">
          <Container>
            <Reveal>
              <p className="text-sm font-medium text-muted">Built with</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border-strong bg-surface px-4 py-2 text-sm text-foreground/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      </Band>

      {/* Pricing */}
      <Band tone="light">
        <section id="pricing" className="scroll-mt-20 py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Investment"
                title="Pricing built around how this actually gets delivered"
                description="Illustrative ranges based on typical scope — every engagement starts with a fixed quote once we understand your specifics."
              />
            </Reveal>
            <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {service.pricing.map((tier) => (
                <RevealItem key={tier.name}>
                  <div
                    className={cn(
                      "relative flex h-full flex-col rounded-3xl border p-8",
                      tier.highlighted
                        ? "border-primary bg-surface shadow-xl shadow-primary/10 lg:-translate-y-2"
                        : "border-border bg-surface"
                    )}
                  >
                    {tier.highlighted && (
                      <span className="absolute -top-3 left-1/2 w-fit -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold whitespace-nowrap text-white">
                        Most Popular
                      </span>
                    )}
                    <h3 className="font-display text-lg font-semibold">{tier.name}</h3>
                    <p className="mt-3 font-display text-2xl font-bold sm:text-3xl">{tier.price}</p>
                    {tier.cadence && <p className="text-xs text-muted-2">{tier.cadence}</p>}
                    <p className="mt-4 text-sm text-muted">{tier.description}</p>
                    <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      href="/contact"
                      variant={tier.highlighted ? "primary" : "secondary"}
                      className="mt-8 w-full"
                    >
                      Get started
                    </Button>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      </Band>

      {/* FAQ */}
      <Band tone="dark">
        <section className="py-24 sm:py-32">
          <Container className="mx-auto max-w-3xl">
            <Reveal>
              <SectionHeading eyebrow="FAQ" title="Common questions about this service" align="center" />
            </Reveal>
            <Reveal delay={0.1}>
              <Accordion.Root type="single" collapsible className="mt-12 flex flex-col gap-3">
                {service.faqs.map((faq, i) => (
                  <Accordion.Item
                    key={i}
                    value={`item-${i}`}
                    className="overflow-hidden rounded-2xl border border-border bg-surface"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium">
                        {faq.question}
                        <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden px-6 text-sm text-muted data-[state=open]:pb-5 data-[state=open]:animate-fade-up">
                      {faq.answer}
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </Reveal>
          </Container>
        </section>
      </Band>

      {/* Related services */}
      {related.length > 0 && (
        <Band tone="light">
          <section className="py-24 sm:py-32">
            <Container>
              <Reveal>
                <SectionHeading eyebrow="Related" title="Other services in this area" />
              </Reveal>
              <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {related.map((s) => (
                  <RevealItem key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
                    >
                      <div>
                        <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                          <Icon name={s.icon} className="size-4.5" />
                        </div>
                        <h3 className="mt-4 font-display text-base font-semibold">{s.title}</h3>
                        <p className="mt-1.5 text-sm text-muted">{s.summary}</p>
                      </div>
                      <div className="mt-5 flex items-center gap-1 text-sm font-medium text-muted transition-colors group-hover:text-primary">
                        Learn more <ArrowUpRight className="size-3.5" />
                      </div>
                    </Link>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </section>
        </Band>
      )}

      <Band tone="dark">
        <ContactCTA />
      </Band>
    </>
  );
}
