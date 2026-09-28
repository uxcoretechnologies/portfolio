export const site = {
  name: "UX Core Technologies",
  shortName: "UX Core",
  tagline: "Design-Led Software for Ambitious Companies",
  description:
    "UX Core Technologies designs and builds digital products, AI agents, and enterprise platforms — engineered with research-backed UX at the core, not bolted on at the end.",
  // Canonical domain — every absolute URL (metadataBase, sitemap, JSON-LD,
  // OG image URLs) is derived from this single value. Previously the site
  // used "uxcoretech.com" in a few places while every other reference
  // (email, sitemap host) pointed at "uxcoretechnologies.com" — that
  // mismatch would have shipped wrong canonical/OG URLs.
  url: "https://www.uxcoretechnologies.com",
  email: "info@uxcoretechnologies.com",
  // The site's one published mobile number. `phoneNumber` is the same
  // number digits-only, country code first, no "+" or spaces — the exact
  // format tel:/wa.me hrefs require.
  phone: "+91 98318 26441",
  phoneNumber: "919831826441",
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
