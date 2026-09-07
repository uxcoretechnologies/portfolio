import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Band } from "@/components/ui/band";
import { Stats } from "@/components/sections/stats";
import { Industries } from "@/components/sections/industries";
import { ContactCTA } from "@/components/sections/contact-cta";
import { countries } from "@/lib/data/misc";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "UX Core Technologies is a Kolkata-based product design and engineering studio — senior designers and engineers, staffed on real client work, not a spec-execution vendor.",
  path: "/about",
  image: { kind: "generated", title: "We build the products behind ambitious companies", eyebrow: "About Us" },
});

const values = [
  {
    title: "Research before pixels",
    description: "We validate problems with real users before committing to a solution.",
  },
  {
    title: "Senior talent only",
    description: "Every engagement is staffed with senior designers and engineers, not trainees.",
  },
  {
    title: "Outcomes over output",
    description: "We measure success in business impact, not just delivered tickets.",
  },
  {
    title: "Transparent by default",
    description: "Weekly demos, open roadmaps, and no black-box development.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Band tone="light">
        <section className="pt-20 pb-16 sm:pt-28">
          <Container className="max-w-3xl">
            <Reveal>
              <SectionHeading
                eyebrow="About us"
                title="We build the products behind ambitious companies"
                description="UX Core Technologies started as a small design studio and grew into a full-stack product partner — without losing the obsession with craft that got us here."
              />
            </Reveal>
          </Container>
        </section>

        <Container className="pb-24 sm:pb-32">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src="/images/about/enabling-teams.png"
                alt="Enabling teams at UX Core Technologies"
                width={1920}
                height={820}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </Container>
      </Band>

      <Band tone="dark">
        <section className="py-24 sm:py-32">
          <Container>
            <Reveal>
              <SectionHeading eyebrow="What we believe" title="Our values" align="center" />
            </Reveal>
            <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <RevealItem key={v.title} className="rounded-2xl border border-border bg-surface p-6">
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted">{v.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      </Band>

      <Band tone="light">
        <Stats />
      </Band>

      <Band tone="light">
        <section className="pb-24 sm:pb-32">
          <Container>
            <Reveal>
              <SectionHeading eyebrow="Global reach" title="Where we work" align="center" />
            </Reveal>
            <Reveal delay={0.1} className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
              {countries.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-muted"
                >
                  {c}
                </span>
              ))}
            </Reveal>
          </Container>
        </section>

        <Industries />
      </Band>

      <Band tone="dark">
        <ContactCTA />
      </Band>
    </>
  );
}
