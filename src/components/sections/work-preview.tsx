import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { projects } from "@/lib/data/projects";

export function WorkPreview() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Our work"
              title="Our latest creations"
              description="A snapshot of products we've helped design, build, and ship."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/work" variant="secondary">
              See all work <ArrowUpRight className="size-4" />
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <RevealItem key={project.slug}>
              <Link href={`/work/${project.slug}`} className="group block">
                <PlaceholderMedia
                  label={`${project.name} — case study cover`}
                  ratio="aspect-[16/11]"
                  gradient={project.color}
                  className="transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-2">
                      {project.type} · {project.industry}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold">{project.name}</h3>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
