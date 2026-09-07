import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { site } from "@/lib/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Get in touch with ${site.name} to discuss your next project — response time under 24 hours.`,
  path: "/contact",
  image: { kind: "generated", title: "Let's build your next product", eyebrow: "Contact" },
});

const details = [
  { icon: Mail, label: "Email", value: site.email },
  { icon: Phone, label: "Phone", value: site.phone },
  { icon: MapPin, label: "Location", value: site.address },
  { icon: Clock, label: "Response Time", value: site.responseTime },
];

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div>
          <SectionHeading
            eyebrow="Contact us"
            title="Engage with the UX Core team"
            description="Reach out to ask questions, explore use cases, or understand how our expertise can support your business."
          />

          <div className="mt-10 flex flex-col gap-6">
            {details.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-primary">
                  <item.icon className="size-4.5" />
                </div>
                <div>
                  <p className="text-sm text-muted-2">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10">
          <h2 className="font-display text-xl font-semibold">Send us a message</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
