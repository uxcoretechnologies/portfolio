import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { process } from "@/lib/data/misc";

export function Process() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="Our approach to work"
            description="We blend research, strategy, and design to create products that deliver measurable outcomes."
            align="center"
          />
        </Reveal>

        <RevealGroup className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute top-6 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block"
            aria-hidden="true"
          />
          {process.map((item) => (
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
  );
}
