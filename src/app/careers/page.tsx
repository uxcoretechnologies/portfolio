import type { Metadata } from "next";
import { Suspense } from "react";
import { Briefcase, MapPin, Clock, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Band } from "@/components/ui/band";
import { Eyebrow, SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ApplyForm } from "@/components/forms/apply-form";
import { openRoles, perks, values } from "@/lib/data/careers";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description: `Open roles at ${site.name} — design and engineering positions, based in Kolkata or remote.`,
};

export default function CareersPage() {
  return (
    <>
      <Band tone="dark">
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-24">
          <Container className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="flex flex-col items-center">
                <Eyebrow>Careers</Eyebrow>
                <h1 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  Build what&rsquo;s next, with us
                </h1>
                <p className="mt-5 max-w-xl text-balance text-muted sm:text-lg">
                  We&rsquo;re a small, senior, design-and-engineering team based in Kolkata, working on real
                  products for ambitious clients. If that sounds like your kind of work, we&rsquo;d like to hear
                  from you.
                </p>
                <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
                  <Button href="#open-roles" size="lg">
                    View open roles <ArrowUpRight className="size-4" />
                  </Button>
                  <Button href="#apply" variant="secondary" size="lg">
                    Apply now
                  </Button>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </Band>

      {/* Values */}
      <Band tone="light">
        <section className="py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Why join us"
                title="What working here actually looks like"
                description="Not the usual careers-page platitudes — this is what we mean by them."
              />
            </Reveal>

            <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <RevealItem key={value.title}>
                  <div className="h-full rounded-2xl border border-border bg-surface p-7">
                    <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      </Band>

      {/* Perks */}
      <Band tone="dark">
        <section className="py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Perks & benefits"
                title="What you get, beyond the paycheck"
                align="center"
                className="mx-auto"
              />
            </Reveal>

            <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {perks.map((perk) => (
                <RevealItem key={perk.title}>
                  <div className="flex gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-primary">
                      <Icon name={perk.icon} className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{perk.title}</h3>
                      <p className="mt-1 text-sm text-muted">{perk.description}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      </Band>

      {/* Open roles */}
      <Band tone="light">
        <section id="open-roles" className="scroll-mt-24 py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Open roles"
                title="Current openings"
                description="Don't see an exact match? Scroll down and send a general application — we'd still like to hear from you."
              />
            </Reveal>

            <div className="mt-14 flex flex-col gap-5">
              {openRoles.map((role) => (
                <Reveal key={role.slug}>
                  <div className="flex flex-col gap-6 rounded-3xl border border-border bg-surface p-7 sm:p-8 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                      <h3 className="font-display text-xl font-semibold">{role.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="size-3.5 text-muted-2" />
                          {role.department}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5 text-muted-2" />
                          {role.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3.5 text-muted-2" />
                          {role.type}
                        </span>
                      </div>
                      <p className="mt-4 text-muted">{role.summary}</p>

                      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <p className="text-sm font-medium text-foreground/90">You&rsquo;ll do</p>
                          <ul className="mt-2.5 flex flex-col gap-2">
                            {role.responsibilities.map((r) => (
                              <li key={r} className="flex items-start gap-2 text-sm text-muted">
                                <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground/90">You&rsquo;ll need</p>
                          <ul className="mt-2.5 flex flex-col gap-2">
                            {role.requirements.map((r) => (
                              <li key={r} className="flex items-start gap-2 text-sm text-muted">
                                <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Button
                      href={`/careers?role=${encodeURIComponent(role.title)}#apply`}
                      variant="secondary"
                      className="shrink-0"
                    >
                      Apply for this role <ArrowUpRight className="size-4" />
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </Band>

      {/* Apply form */}
      <Band tone="light">
        <section id="apply" className="scroll-mt-24 pb-24 sm:pb-32">
          <Container className="mx-auto max-w-2xl">
            <Reveal>
              <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10">
                <SectionHeading eyebrow="Apply" title="Tell us about yourself" />
                <div className="mt-8">
                  <Suspense fallback={null}>
                    <ApplyForm />
                  </Suspense>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </Band>
    </>
  );
}
