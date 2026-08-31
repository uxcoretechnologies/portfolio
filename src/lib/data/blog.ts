export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "ai-in-digital-transformation",
    title: "AI in Digital Transformation: Opportunities for Businesses",
    excerpt:
      "Placeholder excerpt: how enterprises are sequencing AI adoption without disrupting core operations.",
    category: "AI & Automation",
    date: "2026-07-14",
    readTime: "6 min read",
    image: "/images/blog/ai-in-digital-transformation.jpg",
    content: [
      "Placeholder paragraph introducing the shift toward AI-assisted operations across mid-market and enterprise companies.",
      "Placeholder paragraph covering common adoption pitfalls: unclear ownership, unmeasured ROI, and tooling sprawl.",
      "Placeholder paragraph outlining a phased adoption framework: pilot, measure, scale.",
    ],
  },
  {
    slug: "ux-research-that-ships",
    title: "UX Research That Actually Ships: A Practical Framework",
    excerpt:
      "Placeholder excerpt: a lightweight research process built for teams that can't afford six-week discovery phases.",
    category: "Design",
    date: "2026-06-30",
    readTime: "5 min read",
    image: "/images/blog/ux-research-that-ships.jpg",
    content: [
      "Placeholder paragraph on why research gets cut under deadline pressure, and what breaks when it does.",
      "Placeholder paragraph describing a compressed research loop: 3 interviews, 1 prototype, 1 test.",
      "Placeholder paragraph with a checklist teams can run before every major release.",
    ],
  },
  {
    slug: "ai-agents-explained",
    title: "AI Agents Explained: The Next Evolution of Automation",
    excerpt:
      "Placeholder excerpt: what separates a chatbot from a true autonomous agent, in plain terms.",
    category: "AI & Automation",
    date: "2026-06-10",
    readTime: "7 min read",
    image: "/images/blog/ai-agents-explained.jpg",
    content: [
      "Placeholder paragraph defining agentic systems versus rule-based automation.",
      "Placeholder paragraph on tool use, memory, and planning loops in modern agent architectures.",
      "Placeholder paragraph on where agents are already delivering measurable ROI today.",
    ],
  },
  {
    slug: "performance-budgets-for-product-teams",
    title: "Why Every Product Team Needs a Performance Budget",
    excerpt:
      "Placeholder excerpt: treating page speed as a product requirement, not an afterthought.",
    category: "Engineering",
    date: "2026-05-22",
    readTime: "4 min read",
    image: "/images/blog/performance-budgets.jpg",
    content: [
      "Placeholder paragraph on the business cost of slow interfaces.",
      "Placeholder paragraph introducing Core Web Vitals as a shared team metric.",
      "Placeholder paragraph on enforcing budgets in CI before code reaches production.",
    ],
  },
  {
    slug: "modernizing-data-stacks",
    title: "Modernizing Data Stacks Without Breaking the Business",
    excerpt:
      "Placeholder excerpt: a migration approach that keeps reporting alive while the foundation changes underneath it.",
    category: "Data",
    date: "2026-05-02",
    readTime: "6 min read",
    image: "/images/blog/modernizing-data-stacks.jpg",
    content: [
      "Placeholder paragraph on the risk of big-bang data migrations.",
      "Placeholder paragraph describing a parallel-run migration strategy.",
      "Placeholder paragraph on validating data trust before decommissioning legacy systems.",
    ],
  },
];
