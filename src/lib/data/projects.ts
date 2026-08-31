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
  gallery?: string[];
  testimonial?: { quote: string; name: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "voltpath",
    name: "VoltPath",
    industry: "Automotive & EV",
    type: "Mobile Application",
    summary: "EV charging network app connecting drivers to real-time charger availability.",
    challenge:
      "Placeholder: drivers had no reliable way to find working, available chargers, leading to high support volume and churn.",
    solution:
      "Placeholder: redesigned the discovery and payment flow, added real-time charger status, and rebuilt the app on a cross-platform stack.",
    results: [
      { label: "Faster charger discovery", value: "-42%" },
      { label: "Support tickets", value: "-28%" },
      { label: "App store rating", value: "4.8★" },
    ],
    tags: ["Mobility", "EV"],
    color: "from-violet-500/30 to-cyan-400/20",
    tagline: "Real-time EV charging discovery, built for scale",
    client: "Confidential",
    servicesProvided: [
      "Mobile App Development",
      "Maps & Location Integration",
      "Backend Development",
      "UI/UX Design",
      "Performance Optimization",
    ],
    techStack: [
      { name: "React Native", icon: "Smartphone" },
      { name: "Node.js", icon: "Code2" },
      { name: "MongoDB", icon: "Database" },
      { name: "Google Maps API", icon: "MapPin" },
      { name: "Figma", icon: "PenTool" },
    ],
    showcaseHeadline: "VOLTPATH",
    showcaseTagline: "Charge anywhere, anytime",
    requirementsIntro:
      "Placeholder: the platform needed to handle real-time location data, live charger availability, and session management at national scale without compromising on speed.",
    requirements: [
      "Real-time charger discovery based on live GPS location",
      "Turn-by-turn navigation and directions to the nearest station",
      "Live availability status per charging bay",
      "Smooth, low-latency mobile experience across low-end devices",
      "A backend built to handle spikes in concurrent charging sessions",
    ],
    approach:
      "Placeholder: an iterative, two-week sprint cycle let the team validate the charger-discovery UX with real drivers early, refining the map interaction and booking flow before locking the final release.",
    gallery: [
      "Map & charger discovery screen",
      "Charger detail & availability view",
      "Live charging session screen",
      "Payment & receipt flow",
      "Account & vehicle profile screen",
    ],
    testimonial: {
      quote:
        "Placeholder: the team delivered exactly what we needed — a fast, reliable app our drivers actually enjoy using. Their attention to detail on the charging flow specifically set them apart.",
      name: "Placeholder Name",
      role: "Founder, VoltPath",
    },
  },
  {
    slug: "buildyard",
    name: "Buildyard",
    industry: "Construction & Real Estate",
    type: "Mobile Application",
    summary: "Site management platform for construction crews and project managers.",
    challenge:
      "Placeholder: paper-based site logs caused delays and inconsistent reporting across job sites.",
    solution:
      "Placeholder: built an offline-first mobile app with photo logging, task tracking, and automatic sync when back online.",
    results: [
      { label: "Reporting time", value: "-55%" },
      { label: "Active job sites", value: "120+" },
      { label: "Adoption rate", value: "94%" },
    ],
    tags: ["Construction", "Real Estate"],
    color: "from-amber-500/25 to-orange-400/15",
  },
  {
    slug: "kolkata-mart",
    name: "Kolkata Mart",
    industry: "E-commerce",
    type: "Web Application",
    summary: "Regional marketplace platform rebuilt for scale and speed.",
    challenge:
      "Placeholder: legacy storefront couldn't handle peak-season traffic and had a checkout drop-off problem.",
    solution:
      "Placeholder: migrated to a headless commerce architecture, optimized checkout to three steps, and improved page speed by 3x.",
    results: [
      { label: "Checkout completion", value: "+31%" },
      { label: "Page load time", value: "-68%" },
      { label: "Peak traffic handled", value: "10x" },
    ],
    tags: ["E-commerce", "Retail"],
    color: "from-emerald-500/25 to-cyan-400/15",
  },
  {
    slug: "assetflow",
    name: "AssetFlow",
    industry: "Enterprise",
    type: "Web Application",
    summary: "Asset management dashboard unifying data across five business units.",
    challenge:
      "Placeholder: asset data was fragmented across spreadsheets and legacy tools, with no single source of truth.",
    solution:
      "Placeholder: built a unified data pipeline and enterprise dashboard with role-based access and real-time reporting.",
    results: [
      { label: "Manual reporting", value: "-70%" },
      { label: "Business units unified", value: "5" },
      { label: "Decision turnaround", value: "-3 days" },
    ],
    tags: ["Enterprise", "Operations"],
    color: "from-blue-500/25 to-violet-400/15",
  },
  {
    slug: "ashsheefa-health",
    name: "Ashsheefa Health",
    industry: "Healthcare",
    type: "Mobile Application",
    summary: "Patient appointment and records app for a multi-branch hospital network.",
    challenge:
      "Placeholder: patients struggled to book appointments and access records across different hospital branches.",
    solution:
      "Placeholder: designed a unified patient app with appointment booking, digital records, and appointment reminders.",
    results: [
      { label: "No-show rate", value: "-24%" },
      { label: "Bookings via app", value: "76%" },
      { label: "Branches connected", value: "12" },
    ],
    tags: ["Healthcare"],
    color: "from-rose-500/25 to-pink-400/15",
  },
  {
    slug: "manageops",
    name: "ManageOps",
    industry: "Operations Management",
    type: "Web Application",
    summary: "Workflow automation suite for distributed operations teams.",
    challenge:
      "Placeholder: operations teams relied on disconnected tools for task handoffs, causing delays and lost context.",
    solution:
      "Placeholder: built a single operations workspace with automated handoffs, SLAs, and live status tracking.",
    results: [
      { label: "Handoff time", value: "-46%" },
      { label: "SLA compliance", value: "98%" },
      { label: "Teams onboarded", value: "30+" },
    ],
    tags: ["Enterprise", "Operations"],
    color: "from-cyan-500/25 to-blue-400/15",
  },
];
