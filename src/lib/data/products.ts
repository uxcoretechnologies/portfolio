export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  status: "Live" | "Beta" | "Coming Soon";
};

export const products: Product[] = [
  {
    slug: "core-flow",
    name: "CoreFlow",
    tagline: "Workflow automation for product teams",
    description:
      "Placeholder: a lightweight workspace that turns repetitive handoffs between design, engineering, and QA into automated flows.",
    icon: "Workflow",
    status: "Beta",
  },
  {
    slug: "core-insights",
    name: "CoreInsights",
    tagline: "Usability analytics without the setup",
    description:
      "Placeholder: session replay and heatmaps built for small teams who don't have a dedicated analytics engineer.",
    icon: "BarChart3",
    status: "Live",
  },
  {
    slug: "core-agent",
    name: "CoreAgent",
    tagline: "A deployable support agent for SaaS products",
    description:
      "Placeholder: an AI support agent that plugs into your docs and ticketing system in an afternoon.",
    icon: "Bot",
    status: "Coming Soon",
  },
];
