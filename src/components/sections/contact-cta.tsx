import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/data/site";

export function ContactCTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "var(--gradient-hero)" }}
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Your professional partner for comprehensive success
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-balance text-muted sm:text-lg">
                Let UX Core handle the complex work while your team focuses on the
                high-impact work that drives real results.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" size="lg">
                  Let&rsquo;s Connect <ArrowUpRight className="size-4" />
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-2">
                Response time: {site.responseTime} · {site.email}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
