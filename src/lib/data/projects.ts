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

  // A real product's own logo, shown in place of the plain-text name label
  // above the hero tagline — omit to keep the current text label.
  brandLogo?: ProjectImage;
  // Which side the hero image sits on. Defaults to "right" (current
  // behavior) when omitted.
  heroImagePosition?: "left" | "right";
  // An optional splash band rendered above the standard hero — a full brand
  // moment (logo, headline, CTA, image) for case studies with real product
  // marketing assets to show off. Omit to skip straight to the standard hero.
  bigHero?: {
    headline: string;
    ctaLabel: string;
    ctaHref: string;
    image: ProjectImage;
  };
  // Per-project override for the dark screen-gallery band's background —
  // omit to use the site's default dark tone. Lets a case study match its
  // own source design (e.g. a specific brand navy) without re-theming the
  // shared dark band used elsewhere on the site.
  galleryBg?: string;
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
      { src: "/images/work/afs-desk/afs-screen-1.png", alt: "AFS Desk dashboard with lead stats, follow-ups, and pipeline chart" },
      { src: "/images/work/afs-desk/afs-screen-2.png", alt: "AFS Desk user activity timeline with login and follow-up events" },
      { src: "/images/work/afs-desk/afs-screen-3.png", alt: "AFS Desk leads list with quick-actions menu open" },
      { src: "/images/work/afs-desk/afs-screen-4.jpeg", alt: "AFS Desk login screen" },
      { src: "/images/work/afs-desk/afs-screen-5.png", alt: "AFS Desk profile and settings screen" },
    ],
    coverImage: {
      src: "/images/work/afs-desk/afs-desk-hero-mockup.png",
      alt: "AFS Desk — three phone mockups showing dashboard, activity, and leads screens",
    },
    heroImage: {
      src: "/images/work/afs-desk/afs-desk-showcase-right.png",
      alt: "AFS Desk — phone mockups on a warm background showing dashboard, activity, and leads screens",
    },
    requirementsImage: {
      src: "/images/work/afs-desk/afs-desk-showcase-left.png",
      alt: "AFS Desk — four phones on a blue gradient background showing login, dashboard, activity, and leads",
    },
    brandLogo: {
      src: "/images/work/afs-desk/afs-logo-mark.svg",
      alt: "AFS Desk logo",
    },
    heroImagePosition: "left",
    galleryBg: "#0c2778",
    bigHero: {
      headline: "Your Business in Your Hands",
      ctaLabel: "Get Started",
      ctaHref: "/contact",
      image: {
        src: "/images/work/afs-desk/afs-desk-hero-mockup.png",
        alt: "AFS Desk — four phone mockups showing the splash screen, dashboard, activity, and leads screens",
      },
    },
  },
  {
    slug: "learnup",
    name: "LearnUp",
    industry: "EdTech — Technical & Vocational Training",
    type: "Mobile & Web Application",
    summary:
      "A connected learning platform for a vocational training institute — course delivery, exams, certification, and fee collection in one mobile-first system, backed by a live operations dashboard for staff.",
    challenge:
      "A vocational training institute was running its entire student lifecycle — enrollment, coursework, certification exams, and fee collection — across spreadsheets and messaging apps. There was no shared system to track a student's progress, no way to verify a certificate was genuine, and no live view for staff of enrollments, payments, or exam results.",
    solution:
      "LearnUp centralizes an entire vocational institute's student lifecycle behind one mobile-first app. Students enroll in hands-on technical courses, work through structured video-and-text lessons, sit timed certification exams, and pay course fees in installments — while every enrollment, payment, and exam result lands instantly in a live operations dashboard the institute's staff run day to day.",
    results: [
      { label: "Content languages", value: "3" },
      { label: "Certification", value: "QR-verified" },
      { label: "Staff roles", value: "4-tier" },
    ],
    tags: ["EdTech", "Vocational Training", "Mobile Learning"],
    color: "from-amber-500/25 to-indigo-400/15",
    tagline: "Every Student's Progress, in Real Time",
    client: "Confidential",
    servicesProvided: [
      "Mobile App Development",
      "Admin Dashboard Development",
      "Backend API Development",
      "Database Design",
      "Product & UX/UI Design",
    ],
    techStack: [
      { name: "React Native", icon: "Smartphone" },
      { name: "Real-time Backend", icon: "Radio" },
      { name: "Cloud Object Storage", icon: "Database" },
      { name: "Role-Based Access", icon: "ShieldCheck" },
    ],
    requirementsIntro:
      "The institute needed to move an entire student lifecycle — enrollment, hands-on technical coursework, certification exams, and fee collection — off spreadsheets and messaging apps into one connected system, without losing the practical, hands-on character of vocational trade training.",
    requirements: [
      "A mobile-first learning experience built for students already living on their phones, not a desktop-only LMS",
      "Multi-language content (English, Hindi, Marathi) for a genuinely multilingual student base",
      "Structured curriculum delivery — modules, lessons, and mixed text/video/quiz content — with progressive unlocking",
      "A real exam engine: timed sessions, shuffled question banks, configurable pass thresholds and retake limits",
      "Verifiable digital certificates an employer could actually check, not just a downloadable PDF",
      "Built-in fee collection with real payment processing and configurable installment plans",
      "One operations dashboard for staff to manage students, courses, fees, exams, and support",
    ],
    approach:
      "The backend was designed real-time-first from the initial schema — students, courses, enrollments, and payments all connected through one live system, so a change an admin makes reaches a student's phone without a manual refresh. Delivery went module by module: course and curriculum management first, then the exam and certification engine, then fee collection and payments, then an AI-assisted mentor and a gamified progress layer — each shipped and used before the next was built on top of it.",
    // Real product screenshots pending — these render as labeled gradient
    // placeholders (via PlaceholderMedia) until final assets land.
    gallery: [
      "Student dashboard with course progress",
      "Timed exam session with shuffled questions",
      "QR-verified digital certificate",
      "Admin operations dashboard with live activity feed",
      "Installment-based fee payment & receipts",
    ],
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
