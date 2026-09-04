type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  industry: string;
  type: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  tags: string[];
  color: string; // placeholder gradient accent per case study

  // Extended case-study fields — optional so older/lighter entries still
  // render fine; the detail page shows each section only when present.
  tagline?: string;
  client?: string;
  servicesProvided?: string[];
  techStack?: { name: string; icon: string }[];
  showcaseHeadline?: string;
  showcaseTagline?: string;
  requirementsIntro?: string;
  requirements?: string[];
  approach?: string;
  gallery?: (string | ProjectImage)[];
  testimonial?: { quote: string; name: string; role: string };

  // Real screenshots/mockups — optional. When present these replace the
  // gradient placeholder in the matching slot on the /work listing and
  // case-study detail pages; omit to keep the placeholder as-is.
  coverImage?: ProjectImage;
  heroImage?: ProjectImage;
  showcaseImage?: ProjectImage;
  requirementsImage?: ProjectImage;
};

export const projects: Project[] = [
  {
    slug: "afs-desk",
    name: "AFS Desk",
    industry: "Sales & CRM Software",
    type: "Mobile Application",
    summary:
      "A multi-tenant CRM platform that brings lead management, follow-ups, and team activity into one mobile-first workspace.",
    challenge:
      "Sales teams were managing leads across spreadsheets, chat threads, and sticky notes, with no shared record of who owned a lead, what had been said, or when the next follow-up was due. Follow-ups slipped, ownership was unclear between reps, and there was no way to see how a team — or an individual executive — was actually performing.",
    solution:
      "AFS Desk centralizes the entire lead lifecycle behind a single, organization-aware mobile app. Leads can be imported in bulk from CSV, assigned automatically or by hand, and tracked through a shared status pipeline, while every call, message, and status change lands in one activity timeline the whole team can see.",
    results: [
      { label: "User roles", value: "3-tier" },
      { label: "Data isolation", value: "Per-org" },
      { label: "Lead import", value: "Bulk CSV" },
    ],
    tags: ["CRM", "SaaS", "Sales"],
    color: "from-blue-600/25 to-teal-400/15",
    tagline: "One platform. Every lead. Every follow-up.",
    client: "Confidential",
    servicesProvided: [
      "Mobile App Development",
      "Backend API Development",
      "Database Design",
      "Product & UX/UI Design",
    ],
    techStack: [
      { name: "React Native", icon: "Smartphone" },
      { name: "Node.js & Express", icon: "Server" },
      { name: "MongoDB", icon: "Database" },
      { name: "Role-Based Access", icon: "ShieldCheck" },
    ],
    showcaseHeadline: "AFS DESK",
    showcaseTagline: "Manage. Grow. Succeed.",
    requirementsIntro:
      "The platform needed to support multiple organizations securely from day one — each with its own users, leads, and data — without the complexity or cost of running a separate deployment per client.",
    requirements: [
      "Multi-organization architecture with strict data isolation between companies",
      "Role-based access for Admins, Sub-admins/Managers, and Executives",
      "Bulk lead import via CSV for teams migrating off spreadsheets",
      "Automatic and manual lead assignment with full ownership history",
      "A follow-up system that surfaces overdue and upcoming tasks by date",
      "A complete activity timeline for every lead — who did what, and when",
    ],
    approach:
      "The data model was designed multi-tenant from the first schema — organizations, users, leads, and activities all scoped to a company from day one — so the same codebase could serve one team or hundreds without a later rebuild. Delivery went module by module (dashboard, then leads, then follow-ups, then activity and notifications), letting the core workflow ship and get used early, with each later module building on real usage instead of assumptions.",
    gallery: [
      { src: "/images/work/afs-desk/afs-desk-followups.jpg", alt: "AFS Desk follow-ups list grouped by status, with overdue items flagged" },
      { src: "/images/work/afs-desk/afs-desk-settings.jpg", alt: "AFS Desk settings screen covering lead statuses, sources, and roles" },
      { src: "/images/work/afs-desk/afs-desk-lead-status-setup.jpg", alt: "AFS Desk custom lead status editor with color and ordering" },
      { src: "/images/work/afs-desk/afs-desk-message-template.jpg", alt: "AFS Desk message template editor with lead-data placeholders" },
      { src: "/images/work/afs-desk/afs-desk-followup-detail.jpg", alt: "AFS Desk follow-up detail view for a scheduled call" },
    ],
    coverImage: {
      src: "/images/work/afs-desk/afs-desk-dashboard.jpg",
      alt: "AFS Desk dashboard — case study cover",
    },
    heroImage: {
      src: "/images/work/afs-desk/afs-desk-dashboard.jpg",
      alt: "AFS Desk dashboard showing lead stats and pipeline breakdown",
    },
    showcaseImage: {
      src: "/images/work/afs-desk/afs-desk-login.jpg",
      alt: "AFS Desk login screen",
    },
    requirementsImage: {
      src: "/images/work/afs-desk/afs-desk-leads-actions.jpg",
      alt: "AFS Desk leads list with the quick-actions menu open",
    },
  },
  {
    slug: "retailos",
    name: "RetailOS",
    industry: "Retail & Multi-Location Commerce",
    type: "Web & Mobile Application",
    summary:
      "A unified operations platform that brings POS, inventory, and omnichannel orders together for multi-location retail chains.",
    challenge:
      "A growing retail chain was running its stores on three disconnected systems — a legacy POS, a separate inventory spreadsheet per location, and a bolted-on online store. Stock counts were always out of date, restocking decisions were reactive, and staff had no single place to see what was happening across the business.",
    solution:
      "RetailOS unifies point-of-sale, inventory, and online orders into one real-time system. Stock updates the moment a sale happens anywhere — in-store or online — and managers get a live view of every location from a single dashboard, with automatic low-stock alerts and restock suggestions based on actual sell-through.",
    results: [
      { label: "Stock accuracy", value: "+38%" },
      { label: "Locations unified", value: "24" },
      { label: "Restock time", value: "-45%" },
    ],
    tags: ["Retail", "Commerce", "Operations"],
    color: "from-fuchsia-500/25 to-orange-400/15",
    tagline: "Every store, one system, real-time.",
    client: "Confidential",
    servicesProvided: [
      "Web Application Development",
      "Mobile App Development",
      "POS Integration",
      "Product & UX/UI Design",
      "Data Engineering",
    ],
    techStack: [
      { name: "Next.js", icon: "Code2" },
      { name: "React Native", icon: "Smartphone" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "POS & Payments API", icon: "ShoppingCart" },
    ],
    showcaseHeadline: "RETAILOS",
    showcaseTagline: "See every store. Instantly.",
    requirementsIntro:
      "The client needed a single source of truth across dozens of physical locations and an online store, without ripping out the POS hardware already installed in every shop.",
    requirements: [
      "Real-time inventory sync across POS, warehouse, and online store",
      "Multi-location dashboard with per-store performance breakdowns",
      "Automatic low-stock alerts and data-driven restock suggestions",
      "Role-based access for store staff, regional managers, and HQ",
      "Offline-tolerant POS that syncs the moment connectivity returns",
    ],
    approach:
      "Inventory sync was built as the backbone first — every other feature (dashboards, alerts, restock suggestions) reads from that same real-time stock ledger, so numbers never drift between the POS, the warehouse, and the storefront. Store rollout was staged in batches of five, giving the team room to fix real-world edge cases before the next batch went live.",
    gallery: [
      "POS checkout screen",
      "Multi-location inventory dashboard",
      "Low-stock alert & restock flow",
      "Store performance comparison view",
      "Order fulfillment tracking",
    ],
    testimonial: {
      quote:
        "We finally have one number everyone trusts — corporate, the warehouse, and the store floor are all looking at the same stock count for the first time.",
      name: "VP of Retail Operations",
      role: "National retail chain (name withheld)",
    },
  },
  {
    slug: "flowmind-ai",
    name: "FlowMind AI",
    industry: "AI & Business Process Automation",
    type: "Web Application",
    summary:
      "An AI agent platform that reads incoming support tickets, invoices, and requests, then routes, drafts, and resolves them automatically.",
    challenge:
      "A fast-growing SaaS company's support and ops teams were drowning in repetitive tickets — password resets, invoice questions, standard refund requests — that followed the same handful of patterns every time, but still needed a human to read, classify, and respond to each one.",
    solution:
      "FlowMind AI reads every incoming ticket and document, classifies intent, and either resolves it end-to-end for routine cases or drafts a response and routes it to the right person with full context attached for complex ones — with a human always able to review, edit, or override before anything is sent.",
    results: [
      { label: "Tickets auto-resolved", value: "61%" },
      { label: "First-response time", value: "-74%" },
      { label: "Agents freed for complex work", value: "12" },
    ],
    tags: ["AI & Automation", "SaaS", "Customer Support"],
    color: "from-sky-500/25 to-violet-400/15",
    tagline: "Let the agent handle the repetitive 80%.",
    client: "Confidential",
    servicesProvided: [
      "Autonomous AI & Agents",
      "Web Application Development",
      "Data Engineering",
      "Product & UX/UI Design",
    ],
    techStack: [
      { name: "Python & LangGraph", icon: "Bot" },
      { name: "Next.js", icon: "Code2" },
      { name: "PostgreSQL & pgvector", icon: "Database" },
      { name: "Node.js Workers", icon: "Server" },
    ],
    showcaseHeadline: "FLOWMIND AI",
    showcaseTagline: "Read. Decide. Resolve.",
    requirementsIntro:
      "Leadership wanted automation that could actually take action — not just suggest a canned reply — while keeping a human in the loop for anything ambiguous, sensitive, or outside policy.",
    requirements: [
      "Automatic classification and routing of incoming tickets and documents",
      "End-to-end resolution for well-defined, policy-covered request types",
      "Drafted responses with full context for anything outside policy",
      "A review queue where a human can approve, edit, or override every agent action",
      "An audit trail of every decision the agent made and why",
    ],
    approach:
      "The agent was scoped deliberately narrow at launch — three ticket types it could fully resolve — and every action it took, correct or not, was logged and reviewed weekly to retrain its confidence thresholds before adding the next category. That review loop, more than any single model upgrade, is what got auto-resolution from acceptable to trusted.",
    gallery: [
      "Ticket triage & classification view",
      "Agent resolution with reasoning trail",
      "Human review & override queue",
      "Automation performance dashboard",
      "Policy & guardrail configuration",
    ],
    testimonial: {
      quote:
        "The team stopped dreading the ticket queue. The routine 80% just gets handled, and the agent's reasoning is right there when we need to check its work.",
      name: "Head of Customer Operations",
      role: "B2B SaaS company (name withheld)",
    },
  },
  {
    slug: "payledger",
    name: "PayLedger",
    industry: "Fintech & SMB Finance",
    type: "Web & Mobile Application",
    summary:
      "A cash-flow and expense platform that gives small business owners a real-time view of money in, money out, and what's coming next.",
    challenge:
      "Small business owners were piecing together their financial picture from a bank app, a spreadsheet, and a shoebox of receipts — finding out they were short on cash only after a payment had already bounced.",
    solution:
      "PayLedger connects directly to business bank accounts and card feeds to build a live cash-flow view, auto-categorizes expenses from receipt photos, and forecasts upcoming shortfalls before they happen — all from a single mobile-first dashboard.",
    results: [
      { label: "Cash-flow visibility", value: "Real-time" },
      { label: "Bounced payments", value: "-52%" },
      { label: "Expenses auto-categorized", value: "93%" },
    ],
    tags: ["Fintech", "SMB", "Finance"],
    color: "from-emerald-600/25 to-blue-400/15",
    tagline: "Know your number, every day.",
    client: "Confidential",
    servicesProvided: [
      "Mobile App Development",
      "Web Application Development",
      "Banking API Integration",
      "Data Engineering",
      "Product & UX/UI Design",
    ],
    techStack: [
      { name: "React Native", icon: "Smartphone" },
      { name: "Next.js", icon: "Code2" },
      { name: "Banking Data API", icon: "Database" },
      { name: "Node.js", icon: "Server" },
    ],
    showcaseHeadline: "PAYLEDGER",
    showcaseTagline: "Know your number, every day.",
    requirementsIntro:
      "Small business owners needed one trustworthy, real-time picture of cash flow — without hiring a bookkeeper or learning accounting software built for accountants, not owners.",
    requirements: [
      "Live bank and card feed sync across multiple accounts",
      "Automatic expense categorization from receipt photos",
      "A cash-flow forecast that flags an upcoming shortfall before it happens",
      "A mobile-first dashboard an owner can read in under a minute",
      "Bank-level security and encrypted credential handling throughout",
    ],
    approach:
      "Forecasting was kept intentionally simple and explainable at launch — a rolling view of confirmed inflows and outflows, not a black-box prediction — because owners needed to trust the number enough to act on it immediately. More sophisticated forecasting was layered in only after that trust was established.",
    gallery: [
      "Live cash-flow dashboard",
      "Receipt capture & auto-categorization",
      "Upcoming shortfall forecast alert",
      "Multi-account overview",
      "Expense breakdown by category",
    ],
    testimonial: {
      quote:
        "For the first time I know exactly where I stand before the fifteenth of the month, not after a payment bounces.",
      name: "Owner",
      role: "Independent retail business (name withheld)",
    },
  },
];
