import { ShieldCheck, Gauge, Users2, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { Reveal } from "@/components/ui/reveal";

const points = [
  {
    icon: Users2,
    title: "Dedicated senior team",
    description: "No junior-heavy staffing — you work directly with senior designers and engineers.",
  },
  {
    icon: Gauge,
    title: "Built for performance",
    description: "Every product ships against a measurable performance and accessibility budget.",
  },
  {
    icon: Layers,
    title: "Design-to-code, unified",
    description: "The same team owns UX, UI, and engineering — no handoff gaps, no lost context.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade rigor",
    description: "Security, testing, and documentation practices that scale with your compliance needs.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <PlaceholderMedia
            label="Team / product photography placeholder"
            ratio="aspect-square"
            gradient="from-primary/25 via-surface-2 to-accent/15"
            src="/images/about/enabling-teams.png"
            alt="The UX Core Technologies team collaborating around a laptop"
          />
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Why UX Core"
            title="Enabling teams to move beyond development"
            description="We act as an extension of your team, not a vendor waiting on a spec — bringing product thinking to every engagement."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-primary">
                  <point.icon className="size-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-semibold">{point.title}</h3>
                  <p className="mt-1 text-sm text-muted">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
