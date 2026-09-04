export const site = {
  name: "UX Core Technologies",
  shortName: "UX Core",
  tagline: "Design-Led Software for Ambitious Companies",
  description:
    "UX Core Technologies designs and builds digital products, AI agents, and enterprise platforms — engineered with research-backed UX at the core, not bolted on at the end.",
  email: "info@uxcoretechnologies.com",
  // Call and WhatsApp are two different numbers — kept as separate pairs
  // (a display string + a digits-only one for the tel:/wa.me href, country
  // code first, no "+" or spaces).
  phone: "+91 90515 50532",
  callNumber: "919051550532",
  whatsappPhone: "+91 96471 90348",
  whatsappNumber: "919647190348",
  address: "Salt Lake Sector V, Kolkata - 700091",
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
  { label: "Careers", href: "/careers" },
];

// Full link set, used by the footer and anywhere a flat list is needed.
export const allNavLinks = [
  { label: "Services", href: "/services" },
  ...navLinks,
  { label: "Contact", href: "/contact" },
];
