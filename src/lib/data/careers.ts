// Example roles — replace with your actual open positions. The apply
// form's "Position" dropdown is generated from this list automatically,
// plus a standing "General Application" option.
export type OpenRole = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const openRoles: OpenRole[] = [
  {
    slug: "senior-product-designer",
    title: "Senior Product Designer (UX/UI)",
    department: "Design",
    location: "Kolkata, India · Hybrid",
    type: "Full-time",
    summary:
      "Own the end-to-end design of client products — from research and flows through to a polished, developer-ready UI — across a handful of concurrent engagements.",
    responsibilities: [
      "Lead UX research, flows, and wireframes for new client engagements",
      "Design high-fidelity UI and maintain design systems in Figma",
      "Pair closely with engineering through implementation, not just handoff",
      "Present design decisions directly to clients and defend the rationale",
    ],
    requirements: [
      "4+ years designing production web or mobile products",
      "A portfolio showing full projects, not just polished screens",
      "Comfortable owning a project with light supervision",
      "Working knowledge of how your designs get built (HTML/CSS fundamentals)",
    ],
  },
  {
    slug: "fullstack-engineer",
    title: "Full-Stack Engineer (Next.js / Node.js)",
    department: "Engineering",
    location: "Kolkata, India · Hybrid",
    type: "Full-time",
    summary:
      "Build and ship client web applications end-to-end — from API and data model through a production-quality frontend.",
    responsibilities: [
      "Build features across the stack: React/Next.js frontend, Node.js APIs, SQL/NoSQL data models",
      "Write code that's built to be maintained, not just demoed",
      "Review teammates' PRs and keep shared conventions consistent",
      "Talk directly to clients about technical trade-offs when needed",
    ],
    requirements: [
      "3+ years shipping production web applications",
      "Strong TypeScript, React, and Node.js fundamentals",
      "Comfortable with both frontend polish and backend architecture",
      "Experience with at least one relational or document database",
    ],
  },
  {
    slug: "react-native-engineer",
    title: "React Native Engineer",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    summary:
      "Build cross-platform mobile apps for clients across mobility, healthcare, and retail — from first screen to app-store release.",
    responsibilities: [
      "Build and maintain React Native apps across iOS and Android",
      "Integrate native modules, maps, push notifications, and payments as needed",
      "Own performance on lower-end devices, not just the latest phones",
      "Work closely with design to get motion and interaction detail right",
    ],
    requirements: [
      "3+ years building and shipping React Native apps to production",
      "At least one app you've taken through app-store release and updates",
      "Comfortable reading native iOS/Android code when a bridge module needs it",
    ],
  },
  {
    slug: "ai-automation-engineer",
    title: "AI & Automation Engineer",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    summary:
      "Design and ship AI agent workflows that take real action for clients — ticket triage, document processing, and operational automation.",
    responsibilities: [
      "Design agent workflows and evaluate them against real task success, not demo quality",
      "Build the guardrails and human-review layer around every autonomous action",
      "Integrate agents with client systems (CRMs, ticketing tools, internal APIs)",
      "Instrument and monitor agent behavior in production",
    ],
    requirements: [
      "Experience building production LLM-backed features, not just prototypes",
      "Solid Python or Node.js backend fundamentals",
      "A healthy skepticism of your own agent's outputs",
    ],
  },
];

export type Perk = {
  icon: string;
  title: string;
  description: string;
};

export const perks: Perk[] = [
  {
    icon: "Laptop",
    title: "Remote-friendly",
    description: "Work from our Kolkata studio, home, or a mix of both — output matters more than the seat.",
  },
  {
    icon: "HeartPulse",
    title: "Health coverage",
    description: "Health insurance for you, so a bad week doesn't become a bad year.",
  },
  {
    icon: "GraduationCap",
    title: "Learning budget",
    description: "An annual budget for courses, books, and conferences — spend it on what actually grows you.",
  },
  {
    icon: "CalendarClock",
    title: "Flexible time off",
    description: "Take the time you need to rest and come back sharp, without a rigid day-count policy.",
  },
  {
    icon: "Users2",
    title: "Senior, hands-on team",
    description: "Work directly with senior designers and engineers — no thick layer of process between you and the work.",
  },
  {
    icon: "Trophy",
    title: "Real ownership",
    description: "You'll own outcomes on real client engagements, not tickets pulled from someone else's plan.",
  },
];

export type Value = {
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    title: "Senior-level ownership",
    description: "Everyone here owns outcomes, not tickets — you're trusted to make the call and stand behind it.",
  },
  {
    title: "Design and code, unified",
    description: "The same team carries a project from research to production — no handoff gaps, no lost context.",
  },
  {
    title: "Work that ships",
    description: "What you build goes to real users on real client products — not a backlog that never clears.",
  },
  {
    title: "Small team, real trust",
    description: "We stay small enough that your work is visible, and your judgment is trusted from day one.",
  },
];
