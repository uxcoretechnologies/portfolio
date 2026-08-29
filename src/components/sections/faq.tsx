"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/lib/data/misc";

export function FAQ() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" />
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion.Root type="single" collapsible className="mt-12 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium">
                    {faq.question}
                    <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden px-6 text-sm text-muted data-[state=open]:pb-5 data-[state=open]:animate-fade-up">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </Container>
    </section>
  );
}
