export type ServiceGroup = "Design & Engineering" | "AI & Data" | "Enterprise & IoT";

export type PricingTier = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  navLabel: string;
  group: ServiceGroup;
  summary: string;
  description: string;
  capabilities: string[];
  icon: string; // lucide icon name, resolved in components

  // Dedicated-page fields — every service links to its own /services/[slug].
  problem: string;
  stat: { label: string; value: string };
  techStack: string[];
  process: ProcessStep[];
  pricing: PricingTier[];
  faqs: ServiceFAQ[];
};

export const serviceGroups: ServiceGroup[] = ["Design & Engineering", "AI & Data", "Enterprise & IoT"];

export const services: ServiceItem[] = [
  {
    slug: "product-design",
    title: "Product & UX/UI Design",
    navLabel: "UX/UI Design",
    group: "Design & Engineering",
    summary: "Research-led design systems and interfaces that convert.",
    description:
      "We start every engagement with real user research, not assumptions. From information architecture to pixel-perfect UI and scalable design systems, we design products people actually enjoy using.",
    capabilities: [
      "User Research & Discovery",
      "UX Strategy & Wireframing",
      "UI Design Systems",
      "Interaction & Motion Design",
      "Usability Testing",
    ],
    icon: "PenTool",
    problem:
      "Placeholder: most products don't fail because engineering was slow — they fail because the wrong thing got built quickly. Untested design decisions are the most expensive rework a team can sign up for.",
    stat: { label: "Placeholder: faster time-to-validate", value: "3–4×" },
    techStack: ["Figma", "FigJam", "Maze", "Framer", "Principle", "Storybook"],
    process: [
      {
        step: "01",
        title: "Discover",
        description: "Placeholder: user interviews, competitive audit, and stakeholder alignment on what success looks like.",
      },
      {
        step: "02",
        title: "Define",
        description: "Placeholder: information architecture and low-fidelity wireframes, tested before a single pixel is polished.",
      },
      {
        step: "03",
        title: "Design",
        description: "Placeholder: high-fidelity UI and a reusable design system, built for handoff from day one.",
      },
      {
        step: "04",
        title: "Validate",
        description: "Placeholder: usability testing with real users, iterated until the flow holds up under pressure.",
      },
    ],
    pricing: [
      {
        name: "Design Sprint",
        price: "$8,000–$15,000",
        cadence: "one-time",
        description: "Placeholder: validate one product idea before committing an engineering budget to it.",
        features: ["2–4 week timeline", "User interviews", "Clickable prototype", "Usability test readout"],
      },
      {
        name: "Full Product Design",
        price: "$25,000–$60,000",
        cadence: "one-time",
        description: "Placeholder: end-to-end design for a new product or a major redesign.",
        features: [
          "Research & IA",
          "Full UI design",
          "Reusable design system",
          "Usability testing",
          "Developer handoff",
        ],
        highlighted: true,
      },
      {
        name: "Design Partnership",
        price: "Custom quote",
        cadence: "monthly retainer",
        description: "Placeholder: an embedded design team for ongoing feature work and design system upkeep.",
        features: ["Dedicated designer(s)", "Design system ownership", "Roadmap collaboration", "Priority turnaround"],
      },
    ],
    faqs: [
      {
        question: "How long does a typical design engagement take?",
        answer: "Placeholder: a focused design sprint runs 2–4 weeks; a full product design engagement typically runs 8–14 weeks depending on scope.",
      },
      {
        question: "Do you provide developer handoff and design systems?",
        answer: "Placeholder: yes — every engagement ships with a documented, reusable component library, not just static screens.",
      },
      {
        question: "Can you work within our existing brand guidelines?",
        answer: "Placeholder: absolutely. We extend existing brand systems rather than replacing them, unless a rebrand is explicitly in scope.",
      },
      {
        question: "What if we don't have existing users to research yet?",
        answer: "Placeholder: we run lightweight discovery with your target audience or comparable proxy users before design work begins.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Application Development",
    navLabel: "Web Development",
    group: "Design & Engineering",
    summary: "Fast, scalable, secure web platforms built for growth.",
    description:
      "Modern web applications built on proven, scalable architectures — from marketing sites to complex SaaS platforms — engineered for performance and long-term maintainability.",
    capabilities: [
      "Frontend Engineering (React/Next.js)",
      "Backend & API Development",
      "SaaS Platform Development",
      "Web Performance Optimization",
      "CMS & Headless Architecture",
    ],
    icon: "Code2",
    problem:
      "Placeholder: most web apps don't struggle because of one bad decision — they accumulate years of shortcuts until every new feature takes weeks instead of days.",
    stat: { label: "Placeholder: faster page loads, typical rebuild", value: "-60%" },
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS / Vercel", "Tailwind CSS"],
    process: [
      { step: "01", title: "Architecture & Planning", description: "Placeholder: map the data model, integrations, and scale requirements before writing code." },
      { step: "02", title: "Sprint-Based Build", description: "Placeholder: two-week sprints with a demoable increment at the end of every cycle." },
      { step: "03", title: "QA & Hardening", description: "Placeholder: automated testing, performance budgets, and security review before launch." },
      { step: "04", title: "Launch & Support", description: "Placeholder: a monitored launch with a defined handoff or ongoing support plan." },
    ],
    pricing: [
      {
        name: "MVP Build",
        price: "$15,000–$35,000",
        cadence: "one-time",
        description: "Placeholder: a lean, production-ready first version scoped to your core workflow.",
        features: ["6–10 week timeline", "Core workflow only", "Hosting setup included", "Launch support"],
      },
      {
        name: "Full Platform",
        price: "$50,000–$150,000+",
        cadence: "one-time",
        description: "Placeholder: a multi-role SaaS platform with integrations and admin tooling.",
        features: ["Multi-role access", "Third-party integrations", "Admin dashboard", "Scalable architecture", "QA & load testing"],
        highlighted: true,
      },
      {
        name: "Ongoing Development",
        price: "Custom quote",
        cadence: "monthly retainer",
        description: "Placeholder: a dedicated team for continuous feature development and maintenance.",
        features: ["Dedicated engineers", "Sprint planning", "Priority bug response", "Quarterly roadmap review"],
      },
    ],
    faqs: [
      { question: "What tech stack do you use — can we bring our own?", answer: "Placeholder: our default stack is Next.js/React/Node, but we regularly work within an existing stack if one is already in place." },
      { question: "How do you handle QA?", answer: "Placeholder: automated test coverage on critical paths plus manual QA before every release." },
      { question: "Do you offer ongoing maintenance after launch?", answer: "Placeholder: yes, via a monthly retainer scoped to your support and feature-development needs." },
      { question: "Can you take over an existing or legacy codebase?", answer: "Placeholder: yes — we start with a technical audit before committing to a scope or timeline." },
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile Application Development",
    navLabel: "Mobile Development",
    group: "Design & Engineering",
    summary: "Native-quality apps for iOS, Android, and cross-platform.",
    description:
      "We build mobile products that feel native, ship fast, and scale across platforms using React Native and native toolchains where it matters most.",
    capabilities: [
      "iOS & Android Native",
      "React Native / Cross-Platform",
      "App Store Optimization",
      "Offline-First Architecture",
      "Push & Real-Time Features",
    ],
    icon: "Smartphone",
    problem:
      "Placeholder: a mobile app that feels 90% native still reads as broken to users — the last 10% (offline handling, push, platform conventions) is where most budgets run out.",
    stat: { label: "Placeholder: median App Store rating across launches", value: "4.7★" },
    techStack: ["React Native", "Swift", "Kotlin", "Firebase", "App Store Connect", "Google Play Console"],
    process: [
      { step: "01", title: "Platform Strategy", description: "Placeholder: decide native vs. cross-platform based on your actual feature requirements, not defaults." },
      { step: "02", title: "Design & Prototyping", description: "Placeholder: platform-appropriate UI, prototyped and tested before development starts." },
      { step: "03", title: "Build in Sprints", description: "Placeholder: incremental builds you can install on a real device from week one." },
      { step: "04", title: "Submit & Launch", description: "Placeholder: we handle App Store and Play Store submission, including review-rejection troubleshooting." },
    ],
    pricing: [
      {
        name: "Single-Platform MVP",
        price: "$20,000–$40,000",
        cadence: "one-time",
        description: "Placeholder: launch on iOS or Android first to validate demand before doubling investment.",
        features: ["One platform", "Core feature set", "Store submission", "Crash monitoring setup"],
      },
      {
        name: "Cross-Platform App",
        price: "$45,000–$100,000",
        cadence: "one-time",
        description: "Placeholder: a single React Native codebase shipping to both iOS and Android.",
        features: ["iOS + Android", "Offline-first data", "Push notifications", "Backend integration", "Store optimization"],
        highlighted: true,
      },
      {
        name: "Enterprise Mobile Program",
        price: "Custom quote",
        cadence: "monthly retainer",
        description: "Placeholder: a dedicated mobile team for a portfolio of apps or a complex, evolving product.",
        features: ["Dedicated mobile team", "Device lab testing", "Compliance support", "Continuous releases"],
      },
    ],
    faqs: [
      { question: "Native or cross-platform — which is right for us?", answer: "Placeholder: cross-platform (React Native) covers most product needs at lower cost; we recommend native only when a feature genuinely requires it." },
      { question: "Who handles App Store and Play Store submission?", answer: "Placeholder: we do, end-to-end, including responding to review rejections." },
      { question: "Do you support offline functionality?", answer: "Placeholder: yes, offline-first architecture is one of our core specialties for field and low-connectivity use cases." },
      { question: "What about push notifications and backend integration?", answer: "Placeholder: included in cross-platform and enterprise engagements, integrated with your existing backend or ours." },
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce Development",
    navLabel: "E-commerce",
    group: "Design & Engineering",
    summary: "Storefronts and checkout experiences built to sell.",
    description:
      "From headless commerce builds to custom checkout flows, we build e-commerce experiences optimized for conversion, speed, and scale during peak traffic.",
    capabilities: [
      "Headless Commerce",
      "Custom Checkout & Payments",
      "Storefront Performance",
      "Marketplace Integrations",
      "Inventory & Order Systems",
    ],
    icon: "ShoppingCart",
    problem:
      "Placeholder: every extra second of load time and every unnecessary checkout step is a measurable percentage of revenue walking away — most storefronts never audit either.",
    stat: { label: "Placeholder: typical checkout completion lift", value: "+25%" },
    techStack: ["Shopify Hydrogen", "Next.js Commerce", "Stripe", "Klaviyo", "Algolia"],
    process: [
      { step: "01", title: "Platform Audit", description: "Placeholder: review current storefront performance, checkout drop-off, and integration debt." },
      { step: "02", title: "Storefront Design", description: "Placeholder: conversion-focused design informed by your actual funnel data." },
      { step: "03", title: "Build & Integrate", description: "Placeholder: headless build with payment, inventory, and marketing tool integrations." },
      { step: "04", title: "Launch & Load-Test", description: "Placeholder: launch validated against simulated peak-season traffic, not just a demo load." },
    ],
    pricing: [
      {
        name: "Storefront Refresh",
        price: "$12,000–$25,000",
        cadence: "one-time",
        description: "Placeholder: a focused redesign of your existing storefront and checkout on your current platform.",
        features: ["Conversion-focused redesign", "Checkout optimization", "Mobile performance pass"],
      },
      {
        name: "Headless Commerce Build",
        price: "$40,000–$90,000",
        cadence: "one-time",
        description: "Placeholder: a full headless rebuild for speed, flexibility, and scale.",
        features: ["Headless architecture", "Custom checkout", "Marketplace integrations", "Inventory sync", "Peak-load testing"],
        highlighted: true,
      },
      {
        name: "Enterprise Commerce Platform",
        price: "Custom quote",
        cadence: "monthly retainer",
        description: "Placeholder: a dedicated team for a multi-brand or multi-region commerce operation.",
        features: ["Multi-storefront support", "ERP/inventory integration", "Dedicated engineering team"],
      },
    ],
    faqs: [
      { question: "Which platform do you build on?", answer: "Placeholder: most commonly Shopify (headless) or a fully custom Next.js storefront, chosen based on your catalog complexity." },
      { question: "Can you migrate our existing store without downtime?", answer: "Placeholder: yes, via a parallel-run migration approach with a defined cutover window." },
      { question: "How do you handle peak-season traffic?", answer: "Placeholder: every build is load-tested against a simulated peak before launch, not just checked at normal traffic." },
      { question: "Do you integrate with our existing ERP or inventory system?", answer: "Placeholder: yes — inventory and order sync integrations are part of most engagements." },
    ],
  },
  {
    slug: "ai-agents",
    title: "Autonomous AI & Agents",
    navLabel: "AI & Agents",
    group: "AI & Data",
    summary: "Production-grade AI agents that automate real workflows.",
    description:
      "We design and deploy AI agents and LLM-powered automations that plug into your existing systems — reducing manual work without adding operational risk.",
    capabilities: [
      "Enterprise AI Solutions",
      "AI Agent Automation",
      "RAG & Knowledge Systems",
      "LLM Evaluation & Guardrails",
      "AI for Research & Development",
    ],
    icon: "Bot",
    problem:
      "Placeholder: most AI pilots never reach production — not because the model isn't capable, but because nobody built the guardrails and evaluation needed to trust it with real work.",
    stat: { label: "Placeholder: manual work automated, typical deployment", value: "-35%" },
    techStack: ["OpenAI / Anthropic APIs", "LangChain", "Vector databases", "Python", "Evaluation harnesses"],
    process: [
      { step: "01", title: "Feasibility Audit", description: "Placeholder: identify which workflows are actually good candidates for automation — not all of them are." },
      { step: "02", title: "Prototype", description: "Placeholder: a working prototype in 2–4 weeks, tested against real (anonymized) cases." },
      { step: "03", title: "Production Build", description: "Placeholder: guardrails, evaluation, and human-in-the-loop checkpoints built in from the start." },
      { step: "04", title: "Monitor & Iterate", description: "Placeholder: ongoing evaluation against real outcomes, not just a one-time launch." },
    ],
    pricing: [
      {
        name: "AI Feasibility Sprint",
        price: "$6,000–$12,000",
        cadence: "one-time",
        description: "Placeholder: a paid 2–3 week pilot to prove an automation is viable before a full build.",
        features: ["2–3 week timeline", "Working prototype", "Feasibility report", "ROI estimate"],
      },
      {
        name: "Production Agent Build",
        price: "$30,000–$80,000",
        cadence: "one-time",
        description: "Placeholder: a production-grade agent integrated with your existing tools.",
        features: ["Guardrails & evaluation", "Tool/system integrations", "Human-in-the-loop options", "Monitoring dashboard"],
        highlighted: true,
      },
      {
        name: "Managed AI Program",
        price: "Custom quote",
        cadence: "monthly retainer",
        description: "Placeholder: ongoing management as agents expand across more of your workflows.",
        features: ["Dedicated AI team", "Continuous evaluation", "Model/vendor flexibility", "Quarterly roadmap"],
      },
    ],
    faqs: [
      { question: "How do you prevent AI agents from making costly mistakes?", answer: "Placeholder: through scoped permissions, evaluation harnesses, and human-in-the-loop checkpoints for high-stakes actions." },
      { question: "Can this integrate with our existing tools?", answer: "Placeholder: yes — CRM, helpdesk, and internal APIs are common integration points." },
      { question: "Is our data used to train external models?", answer: "Placeholder: no — we configure API usage to opt out of training wherever the provider supports it, and document this in writing." },
      { question: "How do you measure ROI?", answer: "Placeholder: against a baseline captured during the feasibility sprint — hours saved, error rate, or turnaround time, depending on the use case." },
    ],
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    navLabel: "Data Engineering",
    group: "AI & Data",
    summary: "Modern data stacks that turn raw data into decisions.",
    description:
      "We design and modernize data infrastructure — pipelines, warehousing, and real-time analytics — so your teams can trust the numbers and move faster.",
    capabilities: [
      "Data Pipeline Architecture",
      "Cloud Data Warehousing",
      "Real-Time Analytics",
      "Data Quality & Governance",
      "BI & Reporting Enablement",
    ],
    icon: "Database",
    problem:
      "Placeholder: when three teams report three different numbers for the same metric, the problem usually isn't the analysts — it's a data pipeline nobody fully trusts.",
    stat: { label: "Placeholder: manual reporting time removed", value: "-70%" },
    techStack: ["Snowflake", "dbt", "Airflow", "Fivetran", "Looker"],
    process: [
      { step: "01", title: "Data Audit", description: "Placeholder: map every source, pipeline, and report to find where trust actually breaks down." },
      { step: "02", title: "Architecture Design", description: "Placeholder: design a warehouse and pipeline structure that scales with your data volume." },
      { step: "03", title: "Build & Migrate", description: "Placeholder: build the new stack alongside the old one, validated before cutover." },
      { step: "04", title: "Enable & Document", description: "Placeholder: train your team and document the system so it doesn't become a black box again." },
    ],
    pricing: [
      {
        name: "Data Audit & Roadmap",
        price: "$8,000–$15,000",
        cadence: "one-time",
        description: "Placeholder: a full audit of your current data stack with a prioritized roadmap.",
        features: ["Source & pipeline mapping", "Data quality assessment", "Prioritized roadmap"],
      },
      {
        name: "Modern Data Stack Build",
        price: "$35,000–$80,000",
        cadence: "one-time",
        description: "Placeholder: a full pipeline and warehouse build, migrated from your legacy setup.",
        features: ["Warehouse setup", "Pipeline orchestration", "Data quality checks", "BI tool enablement"],
        highlighted: true,
      },
      {
        name: "Managed Data Platform",
        price: "Custom quote",
        cadence: "monthly retainer",
        description: "Placeholder: ongoing pipeline management and new-source onboarding.",
        features: ["Dedicated data engineer(s)", "New-source onboarding", "SLA-backed uptime"],
      },
    ],
    faqs: [
      { question: "Can you migrate from our legacy data warehouse without downtime?", answer: "Placeholder: yes, via a parallel-run approach — the old system stays live until the new one is fully validated." },
      { question: "Do you train our team to maintain the pipelines?", answer: "Placeholder: yes, documentation and hands-on training are part of every build." },
      { question: "How do you ensure data quality and governance?", answer: "Placeholder: automated data quality checks and clear ownership are built into the pipeline from day one, not bolted on after." },
      { question: "What if we don't know exactly what reports we need yet?", answer: "Placeholder: the audit phase surfaces the highest-value reports based on how your teams currently make decisions." },
    ],
  },
  {
    slug: "enterprise-solutions",
    title: "Enterprise Solutions",
    navLabel: "Enterprise Solutions",
    group: "Enterprise & IoT",
    summary: "Complex platforms and integrations, orchestrated cleanly.",
    description:
      "We integrate and extend the enterprise systems that run your business — CRM, ERP, and internal platforms — so teams collaborate on a single source of truth.",
    capabilities: [
      "CRM Implementation & Customization",
      "ERP Integration",
      "Workflow Automation",
      "Legacy System Modernization",
      "Cross-Platform Data Sync",
    ],
    icon: "Building2",
    problem:
      "Placeholder: enterprise tools rarely fail from lack of features — they fail because nobody owns the integration between them, so teams re-enter the same data three times.",
    stat: { label: "Placeholder: manual handoff time removed", value: "-46%" },
    techStack: ["Salesforce", "SAP", "Workato / Zapier", "REST & GraphQL APIs"],
    process: [
      { step: "01", title: "Systems Audit", description: "Placeholder: map every tool, integration, and manual workaround your teams currently rely on." },
      { step: "02", title: "Integration Architecture", description: "Placeholder: design the data flow between systems before touching configuration." },
      { step: "03", title: "Phased Rollout", description: "Placeholder: roll out by team or region, validating each phase before expanding." },
      { step: "04", title: "Training & Change Management", description: "Placeholder: hands-on training so adoption doesn't stall after go-live." },
    ],
    pricing: [
      {
        name: "Integration Audit",
        price: "$7,000–$15,000",
        cadence: "one-time",
        description: "Placeholder: a full map of your current systems and where they break down.",
        features: ["Systems & workaround mapping", "Integration risk assessment", "Phased rollout plan"],
      },
      {
        name: "CRM/ERP Implementation",
        price: "$40,000–$120,000",
        cadence: "one-time",
        description: "Placeholder: full implementation or integration of your core enterprise systems.",
        features: ["CRM/ERP configuration", "Custom integrations", "Data migration", "Team training"],
        highlighted: true,
      },
      {
        name: "Enterprise Modernization Program",
        price: "Custom quote",
        cadence: "monthly retainer",
        description: "Placeholder: an ongoing program to modernize legacy systems in phases.",
        features: ["Dedicated integration team", "Legacy system migration", "Change management support"],
      },
    ],
    faqs: [
      { question: "Can you work within our existing Salesforce or SAP instance?", answer: "Placeholder: yes, most engagements extend and clean up an existing instance rather than replacing it." },
      { question: "How do you minimize disruption during migration?", answer: "Placeholder: phased rollouts by team or region, with each phase validated before the next begins." },
      { question: "Do you provide staff training?", answer: "Placeholder: yes, hands-on training and documentation are included in every implementation." },
      { question: "What's your approach to legacy systems nobody wants to touch?", answer: "Placeholder: we start with a low-risk audit to understand what the system actually does before proposing any changes." },
    ],
  },
  {
    slug: "iot",
    title: "Internet of Things (IoT)",
    navLabel: "IoT",
    group: "Enterprise & IoT",
    summary: "Connected devices and edge systems, made reliable.",
    description:
      "We connect physical assets to software through edge computing and smart sensor networks, giving industrial and field teams real-time visibility.",
    capabilities: [
      "Edge Computing Architecture",
      "Sensor & Device Integration",
      "IoT Dashboards & Monitoring",
      "Predictive Maintenance",
      "Fleet & Asset Tracking",
    ],
    icon: "Radio",
    problem:
      "Placeholder: most IoT projects stall at the pilot stage — the hardware works on one bench in one office, then falls apart across real sites with real connectivity problems.",
    stat: { label: "Placeholder: unplanned downtime reduction, typical pilot", value: "-30%" },
    techStack: ["AWS IoT Core", "MQTT", "Industrial gateways", "Grafana"],
    process: [
      { step: "01", title: "Feasibility & Hardware Audit", description: "Placeholder: assess existing sensors, connectivity, and site conditions before proposing hardware." },
      { step: "02", title: "Pilot Deployment", description: "Placeholder: a single-site pilot to validate the approach before wider rollout." },
      { step: "03", title: "Scale Rollout", description: "Placeholder: expand to additional sites using the validated pilot architecture." },
      { step: "04", title: "Monitor & Support", description: "Placeholder: ongoing monitoring and support once devices are live in the field." },
    ],
    pricing: [
      {
        name: "Pilot Deployment",
        price: "$15,000–$30,000",
        cadence: "one-time",
        description: "Placeholder: a single-site pilot to validate hardware, connectivity, and dashboards.",
        features: ["Single-site deployment", "Sensor integration", "Monitoring dashboard"],
      },
      {
        name: "Full-Site Rollout",
        price: "$50,000–$150,000",
        cadence: "one-time",
        description: "Placeholder: a full deployment across one facility or region, built on the validated pilot.",
        features: ["Multi-sensor deployment", "Predictive maintenance model", "Fleet/asset tracking", "Alerting & dashboards"],
        highlighted: true,
      },
      {
        name: "Multi-Site Fleet Program",
        price: "Custom quote",
        cadence: "monthly retainer",
        description: "Placeholder: ongoing deployment and support across multiple sites or a vehicle fleet.",
        features: ["Dedicated IoT team", "Multi-site support", "Continuous monitoring"],
      },
    ],
    faqs: [
      { question: "Do we need new hardware, or can you work with existing sensors?", answer: "Placeholder: we assess existing sensors first — new hardware is only proposed where there's a real gap." },
      { question: "How do you handle connectivity in remote or low-bandwidth environments?", answer: "Placeholder: edge computing architectures that buffer and sync data rather than requiring constant connectivity." },
      { question: "How accurate is predictive maintenance in practice?", answer: "Placeholder: accuracy improves over time as the model sees more real failure data — we set expectations honestly during the pilot phase." },
      { question: "Who owns the data collected from our devices?", answer: "Placeholder: you do, always — this is stated explicitly in every engagement agreement." },
    ],
  },
];
