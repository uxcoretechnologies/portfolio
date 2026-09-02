import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Band } from "@/components/ui/band";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { LegalToc } from "@/components/legal/legal-toc";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

export function LegalLayout({
  eyebrow,
  title,
  effectiveDate,
  version,
  commitmentTitle,
  commitmentBody,
  sections,
  contactEmail,
}: {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  version: string;
  commitmentTitle: string;
  commitmentBody: string;
  sections: LegalSection[];
  contactEmail: string;
}) {
  return (
    <>
      <Band tone="dark">
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
          <Container className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="flex flex-col items-center">
                <Eyebrow>{eyebrow}</Eyebrow>
                <h1 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-4 text-sm text-muted">
                  Effective {effectiveDate} · {version}
                </p>
              </div>
            </Reveal>
          </Container>
        </section>
      </Band>

      <Band tone="light">
        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface p-8 sm:p-10">
                <h2 className="font-display text-lg font-semibold">{commitmentTitle}</h2>
                <p className="mt-3 text-muted">{commitmentBody}</p>
              </div>
            </Reveal>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[220px_1fr]">
              {/* Table of contents */}
              <LegalToc sections={sections} />

              {/* Sections */}
              <div className="flex max-w-2xl flex-col gap-14">
                {sections.map((s, i) => (
                  <div key={s.id} id={s.id} className="scroll-mt-24">
                    <h2 className="font-display text-2xl font-semibold">
                      <span className="text-primary">{i + 1}.</span> {s.title}
                    </h2>
                    <div className="mt-4 flex flex-col gap-4 text-muted [&_a]:font-medium [&_a]:text-primary [&_a]:hover:underline [&_li]:leading-relaxed [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5">
                      {s.body}
                    </div>
                  </div>
                ))}

                <div className="rounded-2xl border border-border bg-surface p-6">
                  <p className="text-sm text-muted">
                    Questions about this document? Reach out at{" "}
                    <a href={`mailto:${contactEmail}`} className="font-medium text-primary hover:underline">
                      {contactEmail}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Band>
    </>
  );
}
