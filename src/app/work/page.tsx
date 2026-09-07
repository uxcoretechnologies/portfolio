import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Band } from "@/components/ui/band";
import { ContactCTA } from "@/components/sections/contact-cta";
import { projects } from "@/lib/data/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description: "Case studies in CRM software, vocational training, retail operations, and business automation.",
  path: "/work",
  image: { kind: "generated", title: "Our latest creations", eyebrow: "Case Studies" },
});

export default function WorkPage() {
  return (
    <>
      <section className="pt-20 pb-16 sm:pt-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our work"
              title="Our latest creations"
              description="A snapshot of products we've helped design, build, and ship — from mobile CRM platforms to AI-driven automation."
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <RevealItem key={project.slug}>
                <Link href={`/work/${project.slug}`} className="group block">
                  <PlaceholderMedia
                    label={`${project.name} — case study cover`}
                    ratio="aspect-[16/11]"
                    gradient={project.color}
                    className="transition-transform duration-500 group-hover:scale-[1.01]"
                    src={project.coverImage?.src}
                    alt={project.coverImage?.alt}
                  />
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-2">
                        {project.type} · {project.industry}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold">{project.name}</h3>
                      <p className="mt-1 text-sm text-muted">{project.summary}</p>
                    </div>
                    <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <Band tone="dark">
        <ContactCTA />
      </Band>
    </>
  );
}
