export type ServiceGroup = "Design & Engineering" | "AI & Data" | "Enterprise & IoT";

export type ServiceItem = {
  slug: string;
  title: string;
  navLabel: string;
  group: ServiceGroup;
  summary: string;
  description: string;
  capabilities: string[];
  icon: string; // lucide icon name, resolved in components
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
  },
];
