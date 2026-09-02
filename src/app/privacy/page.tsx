import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/legal/legal-layout";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
};

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <p>We practice data minimization — we only collect what’s genuinely needed to scope, deliver, and support a project:</p>
        <ul>
          <li>
            <strong>Contact & project details:</strong> your name, email, company, project type, budget
            range, and project brief, submitted through our contact form or a discovery call.
          </li>
          <li>
            <strong>Project assets:</strong> wireframes, technical specifications, credentials, and
            business context you share with us during an active engagement — typically under a signed
            NDA.
          </li>
          <li>
            <strong>Communication records:</strong> emails, call notes, and messages needed to track
            project scope, decisions, and approvals.
          </li>
          <li>
            <strong>Site usage data:</strong> standard browser and device information collected to keep
            this website secure and responsive. We don’t use this for cross-site advertising.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How We Use Your Information",
    body: (
      <>
        <ul>
          <li>
            <strong>Scoping & proposals:</strong> to assess feasibility and provide an accurate estimate
            for your project.
          </li>
          <li>
            <strong>Delivering the engagement:</strong> to design, build, test, and support the software
            we’re contracted to deliver.
          </li>
          <li>
            <strong>Client communication & billing:</strong> to send invoices, project updates, and
            respond to support requests.
          </li>
          <li>
            <strong>Security:</strong> to protect our systems and yours from abuse, spam, and
            unauthorized access.
          </li>
        </ul>
        <p>
          We do not use your project data, source code, or business information to train any AI model —
          ours or a third party’s.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality & Client IP",
    body: (
      <p>
        Anything shared with us during a project — code, data, business logic, internal documentation —
        is treated as confidential by default. For engagements involving sensitive systems or data, we’re
        glad to sign a mutual non-disclosure agreement before any discovery work begins.
      </p>
    ),
  },
  {
    id: "data-storage-security",
    title: "Data Storage & Security",
    body: (
      <ul>
        <li>
          <strong>Encryption in transit:</strong> all data sent to and from our website and tools is
          encrypted (TLS).
        </li>
        <li>
          <strong>Encryption at rest:</strong> stored project data is encrypted using industry-standard
          methods.
        </li>
        <li>
          <strong>Least-privilege access:</strong> access to client repositories and environments is
          limited to the engineers actively working on that project, protected by multi-factor
          authentication.
        </li>
      </ul>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    body: (
      <p>
        We rely on a small number of trusted providers to run our business — cloud hosting, workspace and
        communication tools, and payment processing. Each is bound by its own data protection obligations
        and only processes what’s necessary to provide its service to us. We don’t sell, rent, or trade
        your data to any third party for their own marketing purposes.
      </p>
    ),
  },
  {
    id: "cookies-tracking",
    title: "Cookies & Tracking",
    body: (
      <p>
        We use only essential cookies and local storage for basic site functionality — like remembering
        a display preference. We don’t run third-party advertising trackers or cross-site marketing
        pixels on this site.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: (
      <>
        <p>
          Depending on where you’re located, you may have rights under GDPR, UK GDPR, CCPA, or similar
          regulations, including the right to:
        </p>
        <ul>
          <li>Access and receive a copy of the personal data we hold about you.</li>
          <li>Correct inaccurate or incomplete information.</li>
          <li>Request deletion of your data, subject to legal or contractual retention requirements.</li>
          <li>Opt out of any non-contractual communication at any time.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    body: (
      <p>
        Inquiry details from prospective clients who don’t move forward with a project are retained for
        up to 12 months, then securely deleted. Active client records — contracts, invoices, and project
        documentation — are retained as required for accounting and legal compliance.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We’ll update the effective date above whenever this policy changes, and note any material
        changes on this page. Continued use of our site or services after an update constitutes
        acceptance of the revised policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <p>
        Questions about this policy or a request regarding your data? Reach out to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Trust & Transparency"
      title="Privacy Policy"
      effectiveDate="September 1, 2026"
      version="Version 1.0"
      commitmentTitle="Our core privacy commitment"
      commitmentBody={`${site.name} builds custom software and design systems on a foundation of trust. We do not sell, rent, or trade your personal or business data under any circumstances — and every technical asset you share with us during a project is treated as strictly confidential.`}
      sections={sections}
      contactEmail={site.email}
    />
  );
}
