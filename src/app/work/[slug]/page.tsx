import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Eyebrow } from "@/components/ui/section-heading";
import { Band } from "@/components/ui/band";
import { Reveal } from "@/components/ui/reveal";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { ContactCTA } from "@/components/sections/contact-cta";
import { projects } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);
  const hasOverview = !!(project.client || project.servicesProvided || project.techStack);
  const hasShowcase = !!(project.showcaseHeadline || project.showcaseTagline);
  const hasRequirements = !!(project.requirements || project.approach);

  return (
    <>
      <Band tone="light">
        {/* Hero — small project-name label, tagline as the big headline (matches the reference pattern) */}
        <section className="pt-20 pb-16 sm:pt-28">
          <Container>
            <Reveal>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-3.5" /> Back to work
              </Link>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[42%_58%] lg:gap-16">
              <Reveal>
                <p className="text-sm font-medium text-primary">{project.name}</p>
                <h1 className="mt-3 text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
                  {project.tagline ?? project.name}
                </h1>
                <p className="mt-4 max-w-xl text-muted">{project.summary}</p>
                <div className="mt-8">
                  <Button href="/contact">
                    Let&rsquo;s connect <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <PlaceholderMedia
                  label={`${project.name} — hero mockup`}
                  ratio="aspect-square"
                  gradient={project.color}
                />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Overview — three columns: meta, services, description + tech stack */}
        {hasOverview && (
          <section className="pb-16 sm:pb-20">
            <Container>
              <Reveal>
                <div className="grid grid-cols-1 divide-y divide-border rounded-3xl border border-border bg-surface md:grid-cols-[30%_25%_45%] md:divide-x md:divide-y-0">
                  <div className="p-8">
                    <Eyebrow>Project Overview</Eyebrow>
                    <h2 className="mt-5 font-display text-xl font-semibold">{project.name}</h2>
                    <dl className="mt-6 flex flex-col gap-5">
                      {project.client && (
                        <div>
                          <dt className="text-sm text-muted">Client</dt>
                          <dd className="font-semibold">{project.client}</dd>
                        </div>
                      )}
                      <div>
                        <dt className="text-sm text-muted">Industry</dt>
                        <dd className="font-semibold">{project.industry}</dd>
                      </div>
                    </dl>
                  </div>

                  {project.servicesProvided && (
                    <div className="p-8">
                      <p className="text-sm font-medium text-muted">Services</p>
                      <div className="mt-4 flex flex-col flex-wrap gap-2.5">
                        {project.servicesProvided.map((s) => (
                          <span
                            key={s}
                            className="w-fit rounded-full border border-border-strong bg-background px-3.5 py-1.5 text-sm text-foreground/90"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    <p className="max-w-md text-foreground/90">{project.solution}</p>
                    {project.techStack && (
                      <>
                        <div className="my-6 h-px w-full bg-border" />
                        <p className="text-sm font-medium text-muted">Technologies</p>
                        <div className="mt-4 flex flex-wrap gap-2.5">
                          {project.techStack.map((t) => (
                            <div
                              key={t.name}
                              className="flex size-14 items-center justify-center rounded-xl border border-border-strong bg-background"
                              title={t.name}
                            >
                              <Icon name={t.icon} className="size-5 text-primary" />
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Reveal>
            </Container>
          </section>
        )}

        {/* Results — our own addition beyond the reference, kept as a slim stat strip
            rather than inventing a "Challenge" narrative the source page doesn't have */}
        <section className="pb-16 sm:pb-24">
          <Container>
            <Reveal>
              <div className="grid grid-cols-1 divide-y divide-dashed divide-border-strong rounded-3xl border border-border bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {project.results.map((result) => (
                  <div key={result.label} className="p-8 text-center">
                    <dt className="text-sm text-muted">{result.label}</dt>
                    <dd className="mt-2 font-display text-3xl font-bold text-gradient">{result.value}</dd>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      </Band>

      {/* Showcase break — big wordmark + tagline framing a large overlapping hero image */}
      {hasShowcase && (
        <section className="relative flex min-h-[70vh] flex-col justify-between overflow-hidden bg-surface py-10 sm:min-h-[85vh]">
          <Container className="relative z-10 flex flex-1 flex-col justify-between py-4">
            {project.showcaseHeadline && (
              <Reveal>
                <p className="text-center font-display text-3xl font-extrabold uppercase tracking-[0.15em] text-primary/40 sm:text-left sm:text-5xl">
                  {project.showcaseHeadline}
                </p>
              </Reveal>
            )}
            {project.showcaseTagline && (
              <Reveal delay={0.1}>
                <p className="mt-4 text-center text-xl text-foreground/80 sm:text-right">
                  {project.showcaseTagline}
                </p>
              </Reveal>
            )}
          </Container>
          <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 flex -translate-y-1/2 justify-center px-6">
            <PlaceholderMedia
              label={`${project.name} — app showcase`}
              ratio="aspect-[4/7]"
              gradient={project.color}
              className="w-full max-w-[280px] shadow-2xl sm:max-w-xs"
            />
          </div>
        </section>
      )}

      <Band tone="light">
        {/* Requirements & Approach */}
        {hasRequirements && (
          <section className="py-24 sm:py-32">
            <Container>
              <Reveal>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_0.9fr]">
                  <div className="rounded-3xl bg-surface p-8 sm:p-10">
                    <Eyebrow>Requirements</Eyebrow>
                    <h2 className="mt-4 font-display text-2xl font-semibold">Defining Project Requirements</h2>
                    {project.requirementsIntro && (
                      <p className="mt-3 text-muted">{project.requirementsIntro}</p>
                    )}
                    {project.requirements && (
                      <div className="mt-6">
                        <p className="text-sm text-foreground/80">Key requirements included:</p>
                        <ul className="mt-3 flex flex-col gap-2.5">
                          {project.requirements.map((r) => (
                            <li key={r} className="flex items-start gap-2.5 text-sm text-muted">
                              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.approach && (
                      <>
                        <div className="my-6 h-px w-full bg-border" />
                        <h3 className="font-display text-lg font-semibold">Agile Approach</h3>
                        <p className="mt-2 text-muted">{project.approach}</p>
                      </>
                    )}
                  </div>

                  <div className="min-h-[260px] overflow-hidden rounded-3xl lg:min-h-full">
                    <PlaceholderMedia
                      label={`${project.name} — fanned app screens`}
                      ratio="aspect-auto h-full"
                      gradient={project.color}
                      className="h-full rounded-3xl"
                    />
                  </div>
                </div>
              </Reveal>
            </Container>
          </section>
        )}
      </Band>

      {/* Screen gallery — draggable, depth-scaled carousel on a dark band */}
      {project.gallery && (
        <Band tone="dark">
          <section className="py-24 sm:py-32">
            <ProjectGallery images={project.gallery} color={project.color} />
          </section>
        </Band>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <Band tone="light">
          <section className="py-24 sm:py-32">
            <Container className="mx-auto max-w-3xl">
              <Reveal>
                <div className="rounded-[28px] bg-surface p-4 shadow-sm sm:p-8 lg:p-10">
                  <Eyebrow>Success Stories</Eyebrow>
                  <h2 className="mt-4 max-w-md font-display text-2xl font-semibold sm:text-3xl">
                    Delivering results our clients value and trust.
                  </h2>

                  <div className="relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-6 sm:p-10">
                    <div className="absolute top-6 right-6 rounded-xl bg-white/95 px-5 py-3 shadow-lg sm:top-8 sm:right-8">
                      <p className="font-display text-sm font-bold text-foreground">{project.name}</p>
                    </div>
                    <blockquote className="mt-16 max-w-xl text-balance text-lg font-medium leading-relaxed text-white sm:mt-0 sm:text-xl">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </blockquote>
                    <p className="mt-8 text-white/90">
                      — {project.testimonial.name}, {project.testimonial.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            </Container>
          </section>
        </Band>
      )}

      <Band tone="light">
        <section className="py-24 sm:py-32">
          <Container>
            <h2 className="font-display text-2xl font-semibold">More work</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {otherProjects.map((p) => (
                <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
                  <PlaceholderMedia
                    label={`${p.name} — case study cover`}
                    ratio="aspect-[16/11]"
                    gradient={p.color}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                    <ArrowUpRight className="size-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Button href="/contact">Start a similar project</Button>
            </div>
          </Container>
        </section>
      </Band>

      <Band tone="dark">
        <ContactCTA />
      </Band>
    </>
  );
}
