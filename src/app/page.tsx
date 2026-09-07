import { Band } from "@/components/ui/band";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Stats } from "@/components/sections/stats";
import { WhyUs } from "@/components/sections/why-us";
import { WorkPreview } from "@/components/sections/work-preview";
import { Process } from "@/components/sections/process";
import { Industries } from "@/components/sections/industries";
import { Testimonials } from "@/components/sections/testimonials";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQ } from "@/components/sections/faq";
import { ContactCTA } from "@/components/sections/contact-cta";
import { faqs } from "@/lib/data/misc";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Band tone="light">
        <Hero />
        <TrustedBy />
      </Band>
      <Band tone="dark">
        <ServicesGrid />
      </Band>
      <Band tone="light">
        <Stats />
      </Band>
      <Band tone="dark">
        <WhyUs />
      </Band>
      <Band tone="light">
        <WorkPreview />
      </Band>
      <Band tone="dark">
        <Process />
      </Band>
      <Band tone="light">
        <Industries />
      </Band>
      <Band tone="dark">
        <Testimonials />
      </Band>
      <Band tone="light">
        <BlogPreview />
        <FAQ />
      </Band>
      <Band tone="dark">
        <ContactCTA />
      </Band>
    </>
  );
}
