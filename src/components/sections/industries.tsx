import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { industries } from "@/lib/data/misc";

export function Industries() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Powering diverse industries"
            align="center"
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-14 flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {industry}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
