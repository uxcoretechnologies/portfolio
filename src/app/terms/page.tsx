import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/legal/legal-layout";
import { site } from "@/lib/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms governing engagements with ${site.name}.`,
  path: "/terms",
  image: { kind: "generated", title: "Terms of Service", eyebrow: site.shortName },
});

const sections: LegalSection[] = [
  {
    id: "engagements-sows",
    title: "Engagements & Statements of Work",
    body: (
      <>
        <p>
          These Terms of Service (“Terms”) govern your use of this website and establish the master
          framework under which {site.name} delivers design and software engineering services. Every
          project is carried out under a written Statement of Work (“SOW”) or proposal, which details:
        </p>
        <ul>
          <li>The specific deliverables, features, and design artifacts in scope.</li>
          <li>Agreed milestones, acceptance criteria, and delivery timelines.</li>
          <li>Project pricing, deposit terms, and the payment schedule.</li>
        </ul>
        <p>Where a signed SOW and these Terms conflict, the SOW governs for that specific engagement.</p>
      </>
    ),
  },
  {
    id: "ip-ownership",
    title: "Intellectual Property & Ownership",
    body: (
      <>
        <ul>
          <li>
            <strong>Client-owned deliverables:</strong> upon full payment for a contracted milestone, all
            custom software, design files, and documentation authored specifically for your project
            become your sole property.
          </li>
          <li>
            <strong>Background IP:</strong> {site.name} retains ownership of its own pre-existing
            internal tools, component libraries, and frameworks reused across projects (“Background IP”).
            You receive a perpetual, worldwide, royalty-free license to use, modify, and deploy any
            Background IP embedded in your deliverables — no separate licensing fee, no lock-in.
          </li>
          <li>
            <strong>Open-source components:</strong> we use permissively licensed open-source software
            (MIT, Apache, and similar). We don’t introduce restrictive copyleft (GPL-style) components
            into your proprietary codebase without your explicit sign-off.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "acceptance-testing",
    title: "Review & Acceptance",
    body: (
      <p>
        When a milestone is delivered to a staging environment, you have a review period (specified in
        your SOW, typically 10 business days) to test it against the agreed specification. If you
        identify reproducible defects within that window, we’ll remediate them at no extra charge. If no
        written defect report is submitted within the review period, the milestone is considered accepted
        and work proceeds to the next phase.
      </p>
    ),
  },
  {
    id: "warranty-support",
    title: "Warranty & Support",
    body: (
      <p>
        Every custom build includes a post-launch warranty window (specified in your SOW, typically 30
        days) during which we’ll fix functional bugs or deviations from the agreed spec in our own code
        at no additional cost. This warranty doesn’t cover issues caused by unauthorized changes to our
        code after handoff, breaking changes in third-party APIs, or failures in your own hosting
        infrastructure.
      </p>
    ),
  },
  {
    id: "payment-terms",
    title: "Payment Terms",
    body: (
      <ul>
        <li>
          <strong>Deposit:</strong> a commencement deposit (typically 30–50% of project value) is
          required to schedule work and begin discovery.
        </li>
        <li>
          <strong>Milestone invoicing:</strong> invoices are issued upon completion and acceptance of
          each agreed milestone.
        </li>
        <li>
          <strong>Payment terms:</strong> invoices are due within 14 calendar days of issuance unless
          otherwise agreed in writing.
        </li>
      </ul>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <p>
        Both parties agree to keep the other’s proprietary technical information, business data, and
        trade secrets confidential, using at least the same care they’d apply to their own sensitive
        information. This obligation survives the end of an engagement for a minimum of three years.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by law, each party’s total liability arising from a given SOW
          is capped at the fees actually paid by the client under that SOW in the twelve months preceding
          the claim.
        </p>
        <p>
          Neither party is liable for indirect, incidental, or consequential damages — including lost
          profits or business interruption — arising from the engagement.
        </p>
      </>
    ),
  },
  {
    id: "term-termination",
    title: "Term & Termination",
    body: (
      <>
        <p>
          Either party may terminate an active engagement with 30 days’ written notice. In that case,
          the client pays pro-rata for all completed and accepted work up to the termination date.
        </p>
        <p>
          Upon final payment for work performed, we’ll promptly hand over all completed code
          repositories, design files, and relevant documentation — no assets are withheld.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    body: (
      <p>
        In the event of a disagreement, both parties commit to a good-faith resolution period (15 days)
        before pursuing formal action. These Terms and any associated SOWs are governed by the laws of
        the jurisdiction specified in your SOW, without regard to conflict-of-law principles.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time; the effective date above reflects the most recent
        revision. Material changes will be communicated to active clients directly. These Terms don’t
        retroactively apply to an SOW already signed under a prior version unless both parties agree
        otherwise.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <p>
        Questions about these Terms, or need a Master Services Agreement for enterprise procurement?
        Reach out to <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Client Agreement"
      title="Terms of Service"
      effectiveDate="September 1, 2026"
      version="Master Engagement Terms v1.0"
      commitmentTitle="Client-first ownership, plain and simple"
      commitmentBody={`Our engagements run on mutual clarity. Once you’ve paid in full for a milestone, you own 100% of the custom code, design files, and documentation we built for you — no vendor lock-in, no exceptions. Every build also includes a dedicated post-launch warranty period at no extra charge.`}
      sections={sections}
      contactEmail={site.email}
    />
  );
}
