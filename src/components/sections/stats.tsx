import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/data/misc";
import { cn } from "@/lib/utils";

export function Stats() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              UX Core enables teams beyond development
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-muted sm:text-lg">
              Together, we analyze your goals, user needs, and digital
              landscape to shape a strategy that fits your vision.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className={cn(
                "px-6 first:pl-0",
                i > 0 && "lg:border-l lg:border-dashed lg:border-border-strong"
              )}
            >
              <p className="text-sm text-muted">{stat.label}</p>
              <div className="mt-4 font-display text-4xl font-bold text-brand sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
