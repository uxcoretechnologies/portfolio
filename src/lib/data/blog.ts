export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type Author = { name: string; role: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: Author;
  content: ContentBlock[];
};

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h = (text: string): ContentBlock => ({ type: "heading", text });
const l = (items: string[]): ContentBlock => ({ type: "list", items });

export const posts: Post[] = [
  {
    slug: "ai-in-digital-transformation",
    title: "AI in Digital Transformation: Opportunities for Businesses",
    excerpt:
      "Enterprise AI adoption has moved from experiment to expectation — but most initiatives still stall before they reach production. Here's what separates the companies actually seeing returns.",
    category: "AI & Automation",
    date: "2026-07-14",
    readTime: "6 min read",
    image: "/images/blog/ai-in-digital-transformation.jpg",
    author: { name: "Arnab Sengupta", role: "Founder & CEO" },
    content: [
      p(
        "AI stopped being a differentiator a while ago. It's now closer to a baseline expectation — the question boards ask isn't \"should we use AI,\" it's \"why haven't we shipped more with it yet.\" That pressure is producing a strange gap: adoption is accelerating fast, but the share of companies who've actually reached full-scale, production AI use is still comparatively small. Most organizations are somewhere in the middle — a few live pilots, a lot of enthusiasm, and not much of it tied to a number anyone can point to."
      ),
      h("Where the Adoption Numbers Actually Stand"),
      p(
        "The gap between \"experimenting with AI\" and \"running AI in production\" is wide, and it's the most useful way to read the current landscape. A large majority of companies report some kind of active AI initiative. A much smaller fraction — call it a quarter, generously — report full-scale deployment. The companies further along tend to share one trait: they treat AI as an operating change, not a tool rollout. The ones stuck at the pilot stage tend to treat it as a procurement decision."
      ),
      p(
        "Agentic AI specifically is the fastest-moving part of this. A large share of companies say they intend to deploy autonomous agents — systems that don't just answer questions but take multi-step actions — within the next two years, up sharply from a small minority actively doing so today. That's a narrow window to get the underlying practices right before the volume of deployed agents outpaces most teams' ability to govern them."
      ),
      h("Why So Many AI Initiatives Stall"),
      p(
        "The barriers aren't really about model quality anymore. When companies are asked what's actually blocking progress, the same handful of issues show up every time:"
      ),
      l([
        "Data quality and availability — the model is only as useful as what it can see, and most internal data was never organized with this in mind.",
        "A shortage of people who can bridge ML capability and the actual business process it's meant to change.",
        "Integration debt — connecting a new capability to decade-old systems is usually harder than building the capability itself.",
        "No clear owner. AI initiatives that report to \"innovation\" rather than a specific P&L rarely survive contact with a budget cycle.",
      ]),
      p(
        "Underneath all of that sits a less comfortable finding: a majority of executives privately admit their company's AI strategy exists mostly to look current to the board, rather than to guide actual decisions. That's not a technology problem. It's a sequencing problem — teams are being asked to scale before they've validated anything worth scaling."
      ),
      h("A Phased Approach That Actually Works"),
      p(
        "The organizations getting real return tend to follow a boring, deliberately unglamorous sequence: pilot one workflow with a measurable baseline, prove the delta, then scale only what proved itself. That's it. No enterprise-wide rollout on day one, no committee-designed \"AI strategy\" slide before a single workflow has been touched. A tightly scoped pilot — one team, one process, a defined success metric — takes weeks. Scaling something that already has evidence behind it is a very different, much lower-risk conversation with a budget owner than scaling a hypothesis."
      ),
      h("What Governance Actually Requires"),
      p(
        "As agents move from answering questions to taking real actions — updating records, issuing refunds, changing pricing — the discipline that matters shifts from model selection to governance. Right now, only a small minority of organizations report having a mature framework for managing what their AI agents are allowed to do, reviewed by whom, and rolled back how. That's the part of the AI conversation that gets the least attention and will matter the most in the next two years, as the number of live agents in production systems grows faster than most companies' ability to supervise them."
      ),
      p(
        "None of this argues against moving fast. It argues for moving fast on something narrow enough to actually measure. The companies that win this cycle won't be the ones who adopted AI first — they'll be the ones who built the discipline to adopt it well, one validated workflow at a time."
      ),
    ],
  },
  {
    slug: "ux-research-that-ships",
    title: "UX Research That Actually Ships: A Practical Framework",
    excerpt:
      "Research gets cut under deadline pressure not because it isn't valuable, but because most research methods assume a timeline teams no longer have. Here's a loop that fits inside a sprint instead of replacing one.",
    category: "Design",
    date: "2026-06-30",
    readTime: "5 min read",
    image: "/images/blog/ux-research-that-ships.jpg",
    author: { name: "Leah Fernandes", role: "Head of Design" },
    content: [
      p(
        "Every product team says research matters. Almost every product team cuts it first when a deadline tightens. That's not because research is undervalued — it's because most teams have only ever seen research done one way: weeks of recruiting, a formal discussion guide, a polished readout deck. When a sprint is two weeks long, that process doesn't get \"trimmed.\" It gets skipped entirely."
      ),
      h("Why \"Lean\" Doesn't Mean \"Skipped\""),
      p(
        "The idea that useful research has to be slow and expensive is largely inherited, not inherent. The discount usability testing tradition — running quick, informal tests with a handful of participants — has been showing for years that a small, fast study catches the large majority of usability problems a much bigger one would find. Lean UX applies the same logic to the whole research cycle: small studies, rapid synthesis, and a tight, direct line back to the next design decision, rather than a comprehensive report nobody has time to act on."
      ),
      p(
        "This isn't a lower-quality version of research. It's research sized correctly to the size of the decision. A pricing-page redesign and a one-button copy change don't warrant the same research investment, and treating them as if they do is exactly why research gets deprioritized in the first place."
      ),
      h("A Research Loop That Fits Inside a Sprint"),
      p("The loop that actually survives contact with a real sprint looks like this:"),
      l([
        "Frame one assumption — not \"let's learn about our users,\" but \"we believe first-time visitors don't understand what this button does.\" One testable claim, not a research agenda.",
        "Recruit a small number of participants. The classic finding that five users surface the large majority of usability issues in a given flow still holds — beyond that, you're mostly hearing the same problems restated.",
        "Run the session against whatever exists — a prototype, a paper sketch, a competitor's live product used as a stand-in. Moderated if you can, unmoderated if you can't.",
        "Synthesize the same day. Waiting a week to write up findings means the team has already moved on and the research arrives too late to change anything.",
      ]),
      h("Paper Prototypes and Other Shortcuts"),
      p(
        "One of the most underused tools in this loop is the deliberately unfinished prototype. A paper sketch, or a Figma frame with only one path wired up, is far faster to produce than a polished flow — and because it's obviously unfinished, participants give more honest, less polite feedback. Teams that wait for something presentable before testing it usually end up testing a decision that's already effectively locked in."
      ),
      h("A Pre-Release Checklist"),
      p("Before shipping anything that touches a core flow, run through a short list rather than skipping straight to launch:"),
      l([
        "Has anyone outside the team actually attempted the flow, even once, unscripted?",
        "Does the change hold up against the original assumption it was meant to test — not a different one that emerged along the way?",
        "Is there one open question the team is knowingly shipping without an answer to? Name it explicitly rather than letting it go unspoken.",
      ]),
      p(
        "None of this replaces deeper, longer-cycle research when a decision genuinely warrants it — a new product line or a fundamental repositioning still deserves real discovery time. But most day-to-day product decisions don't need six weeks of research to avoid being a guess. They need one good afternoon."
      ),
    ],
  },
  {
    slug: "ai-agents-explained",
    title: "AI Agents Explained: The Next Evolution of Automation",
    excerpt:
      "\"Agent\" has become one of the most overused words in software. Here's what actually separates a true autonomous agent from a well-dressed chatbot — and why the distinction matters for what you can safely automate.",
    category: "AI & Automation",
    date: "2026-06-10",
    readTime: "7 min read",
    image: "/images/blog/ai-agents-explained.jpg",
    author: { name: "Rohan Iyer", role: "AI & Data Lead" },
    content: [
      p(
        "\"Agent\" gets applied to almost anything with a chat interface these days, which has made the word close to meaningless in a lot of vendor conversations. It's worth being precise about it, because the distinction isn't marketing — it determines what you can safely let a system do without a human checking every step."
      ),
      h("The Actual Difference Between a Chatbot and an Agent"),
      p(
        "A chatbot responds to one message at a time, inside one conversation, and doesn't take real-world actions on its own. Its \"memory\" is usually a small set of filled-in slots — an order number, a stated intent — that resets when the conversation ends."
      ),
      p(
        "An AI agent is a different kind of system entirely. It's built on top of a language model but adds a planning layer, tool access, and persistent memory, so it can reason through a multi-step task and actually execute it — not just describe what someone else should do. A useful way to think about it: the language model is the engine, and the agent is the architecture built around that engine to make it capable of autonomous work."
      ),
      h("The Four Pieces Every Working Agent Needs"),
      p("Strip away the branding and a production agent is really four components working together:"),
      l([
        "A reasoning engine — the underlying language model doing the actual thinking.",
        "A memory layer — context that persists across steps of a task, and sometimes across sessions entirely.",
        "Tool access — the specific systems and actions it's actually permitted to touch, scoped deliberately.",
        "A planning layer — the logic that sequences what happens next based on what just happened.",
      ]),
      p(
        "Most failed \"agent\" projects are missing one of these four pieces entirely, usually the planning layer — they've wired a capable model up to some tools and skipped the part that decides, step by step, what to actually do with them."
      ),
      h("Why Memory Is Harder Than It Sounds"),
      p(
        "Chatbot memory is simple because chatbot tasks are simple — a handful of slots cover most conversations. Agents operate over open-ended, multi-step workflows, so relevant information can surface at any point, not just at the start. That pushes teams toward a layered memory model: short-term memory that holds context for the current task (what's been tried, what came back from a tool call), separate from longer-term memory the agent can draw on across sessions. Getting this layering wrong is one of the most common reasons agents feel forgetful or repeat work they've already done."
      ),
      h("Where This Is Actually Headed"),
      p(
        "The enterprise software adoption curve for task-specific agents is unusually steep — projections put a large share of enterprise applications integrated with some form of task-specific agent within the next year or two, up from a small fraction just recently. That's one of the fastest shifts in enterprise software in some time, and it's arriving faster than most organizations' governance practices are maturing to match it."
      ),
      p(
        "The practical takeaway is simple: before asking whether a workflow should have an \"agent,\" ask which of the four pieces above it actually needs. A task that just needs tool access and no real planning is automation with extra steps, not an agent — and it's usually safer and cheaper to build it that way."
      ),
    ],
  },
  {
    slug: "performance-budgets-for-product-teams",
    title: "Why Every Product Team Needs a Performance Budget",
    excerpt:
      "Page speed stopped being a technical nice-to-have once it became a measurable line on the revenue statement. Here's how to enforce it before it regresses, instead of discovering the damage in a quarterly review.",
    category: "Engineering",
    date: "2026-05-22",
    readTime: "4 min read",
    image: "/images/blog/performance-budgets.jpg",
    author: { name: "Kabir Malhotra", role: "Head of Engineering" },
    content: [
      p(
        "Conversion rate tends to fall off sharply as load time climbs from around one second to around five — and most of that drop happens well before five seconds arrives. Speed isn't a UX nicety anymore. It's a number on the same page as revenue, and it's usually one of the cheapest levers a team has to move that number."
      ),
      h("The Cost of Slow, in Real Numbers"),
      p(
        "The relationship between speed and money is unusually well documented for something so often deprioritized:"
      ),
      l([
        "Every additional 100 milliseconds of load time has been associated with roughly a 1% drop in conversion.",
        "A large share of mobile visits are abandoned once load time crosses about three seconds.",
        "A one-second delay has been linked to around a 7% drop in conversions and a meaningful rise in bounce rate.",
        "Real companies that invested in Core Web Vitals work have reported double-digit gains in both conversion and revenue per visitor after the fact.",
      ]),
      p(
        "Mobile is where this bites hardest. Fewer than half of mobile sites currently pass all three Core Web Vitals thresholds, while desktop pass rates are meaningfully higher — and mobile now accounts for the majority of e-commerce traffic. The gap between mobile and desktop performance is, in a lot of businesses, a gap in revenue nobody has actually sized."
      ),
      h("Why Most Teams Still Don't Track This"),
      p(
        "Performance rarely breaks all at once. It erodes — one added dependency, one unoptimized image, one extra script from a marketing tag manager at a time. No single pull request looks like the one that caused the regression, which is exactly why it survives code review. Catching this requires the same instinct as catching an accessibility regression: nobody notices decline from a manual read-through, because no single change looks big enough to flag."
      ),
      h("What a Performance Budget Actually Looks Like"),
      p("A performance budget is deliberately narrow. It isn't a performance strategy document — it's a small set of numbers a build either meets or doesn't:"),
      l([
        "Pick two or three metrics that map to what users actually feel — typically Largest Contentful Paint, interaction responsiveness, and total JavaScript shipped to the browser.",
        "Set a hard numeric ceiling for each, based on your current baseline and where you actually need to be, not an arbitrary industry benchmark.",
        "Check every pull request against that ceiling automatically, before merge — not in a quarterly performance audit.",
      ]),
      h("Making It Stick"),
      p(
        "Budgets fail the moment they become aspirational rather than enforced. If exceeding the budget produces a Slack message someone can dismiss, it will get dismissed, repeatedly, until the budget is meaningless. If it fails the build the same way a broken test does, engineers treat it the way they treat a broken test — as something to fix before merging, not something to circle back to later."
      ),
      p(
        "None of this requires a performance team or a quarter-long initiative. It requires picking two numbers that matter, wiring a check into CI, and refusing to let it become optional. That's a smaller project than most teams assume, and it's one of the few engineering investments with a conversion-rate number attached to it on day one."
      ),
    ],
  },
  {
    slug: "modernizing-data-stacks",
    title: "Modernizing Data Stacks Without Breaking the Business",
    excerpt:
      "Most failed data migrations don't fail on technology — they fail on trust. A parallel-run approach keeps the numbers believable while the foundation underneath them changes.",
    category: "Data",
    date: "2026-05-02",
    readTime: "6 min read",
    image: "/images/blog/modernizing-data-stacks.jpg",
    author: { name: "Rohan Iyer", role: "AI & Data Lead" },
    content: [
      p(
        "The riskiest part of modernizing a data stack usually isn't the migration itself — it's the week after cutover, when finance pulls a report, the number looks different from last month, and nobody can say with confidence whether that's real or an artifact of the new pipeline. Once that happens once, trust in the new system takes months to rebuild, regardless of how much better the underlying architecture actually is."
      ),
      h("Why a Parallel-Run Beats a Cutover"),
      p(
        "A clean cutover — flip a switch, decommission the old system, move on — is the fastest way to trigger exactly that scenario. A parallel run is slower but far safer: the new pipeline runs alongside the legacy one, producing the same reports independently, and the two are reconciled line by line before the old system is ever switched off. It costs extra weeks of running two systems at once. It's a small price for never having to tell a VP the quarterly numbers were wrong."
      ),
      h("The Stack Most Teams Are Converging On"),
      p(
        "There's a reasonably standard pattern most modern data stacks are settling into: a cloud warehouse handling storage and heavy compute, a transformation layer that turns raw tables into modeled, trustworthy datasets, and an orchestrator that schedules and sequences the whole pipeline. The specific products vary, but the shape doesn't — separate the compute from the modeling logic from the scheduling, rather than bundling all three into one monolithic script nobody wants to touch."
      ),
      p(
        "Two details make a meaningful difference in practice. First, transformation steps that don't depend on each other should run in parallel rather than sequentially — this alone can turn a multi-hour pipeline into one that finishes in minutes. Second, a good orchestrator only re-runs the parts of the pipeline that actually changed, rather than the whole thing on every schedule — which keeps both runtime and cloud spend from growing in lockstep with the size of the warehouse."
      ),
      h("Practical Migration Steps"),
      l([
        "Map every existing pipeline and report to an actual owner — \"nobody knows who built this\" is the most common reason old systems become unkillable.",
        "Rebuild the highest-value reports first in the new stack, not the easiest ones — that's where trust gets won or lost.",
        "Run old and new in parallel and reconcile the output before touching production access for the old system.",
        "Migrate credentials properly — service accounts and encrypted keys, not shared passwords copy-pasted between tools.",
        "Set a defined validation window before decommissioning anything. \"We'll turn it off eventually\" without a date usually means never.",
      ]),
      h("The Part Most Teams Skip: Documentation and Training"),
      p(
        "A migrated stack that only the engineer who built it can operate isn't modernized — it's just moved, with the same single point of failure it had before. The unglamorous final step of any migration is writing down how the new system works and walking the team that depends on it through the change, before the person who did the migration moves on to the next project. Skipping this is the single most common reason a company modernizes its data stack twice within three years."
      ),
    ],
  },
];
