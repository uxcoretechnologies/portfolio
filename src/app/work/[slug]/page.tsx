import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Band } from "@/components/ui/band";
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

  return (
    <>
      <section className="pt-20 pb-12 sm:pt-28">
        <Container>
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" /> Back to work
            </Link>

            <p className="mt-8 text-xs font-medium uppercase tracking-wider text-muted-2">
              {project.type} · {project.industry}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">{project.summary}</p>
          </Reveal>
        </Container>
      </section>

      <Container>
        <Reveal>
          <PlaceholderMedia
            label={`${project.name} — hero screenshot`}
            ratio="aspect-[16/8]"
            gradient={project.color}
          />
        </Reveal>
      </Container>

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="font-display text-xl font-semibold">The Challenge</h2>
                <p className="mt-3 text-muted">{project.challenge}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold">The Solution</h2>
                <p className="mt-3 text-muted">{project.solution}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-2">Results</h3>
              <dl className="mt-5 flex flex-col gap-5">
                {project.results.map((result) => (
                  <div key={result.label}>
                    <dt className="text-sm text-muted">{result.label}</dt>
                    <dd className="font-display text-2xl font-bold text-gradient">{result.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
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

      <Band tone="dark">
        <ContactCTA />
      </Band>
    </>
  );
}
