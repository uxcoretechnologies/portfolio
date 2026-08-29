export const site = {
  name: "UX Core Technologies",
  shortName: "UX Core",
  tagline: "Design-Led Software for Ambitious Companies",
  description:
    "UX Core Technologies designs and builds digital products, AI agents, and enterprise platforms — engineered with research-backed UX at the core, not bolted on at the end.",
  email: "hello@uxcoretech.com",
  phone: "+1 (555) 010-2938",
  address: "Placeholder Address Line, Placeholder City, Country",
  social: {
    linkedin: "https://linkedin.com/company/ux-core-technologies",
    x: "https://x.com/uxcoretech",
    dribbble: "https://dribbble.com/uxcoretech",
    github: "https://github.com/uxcoretech",
  },
  responseTime: "Under 24 hours",
} as const;

// Plain top-level links shown in the nav alongside the "Services" dropdown.
export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Case Studies", href: "/work" },
];

// Full link set, used by the footer and anywhere a flat list is needed.
export const allNavLinks = [
  { label: "Services", href: "/services" },
  ...navLinks,
  { label: "Contact", href: "/contact" },
];
