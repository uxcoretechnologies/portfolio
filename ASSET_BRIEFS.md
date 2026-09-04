# Asset Generation Briefs

This document is a generation brief for every placeholder asset currently on
the UX Core Technologies website — one prompt per asset, written to be
pasted directly into a generation tool (Antigravity or otherwise).

Each entry gives you: where the file goes, the exact size to generate at,
and a full prompt. Generate at the listed size (or larger, same aspect
ratio) so the asset stays sharp on retina displays — the site will scale it
down, never up.

---

## Before you start: shared style language

Paste this block before each individual prompt, or keep it as a system/style
prompt if your tool supports one. Every asset should feel like it comes from
the same photoshoot and the same design system — that consistency matters
more than any single asset looking good in isolation.

```
Brand: UX Core Technologies — a UX-led software design and engineering studio.
Mood: premium, precise, confident, modern SaaS/tech — never cluttered,
never "startup-generic," never overly futuristic/sci-fi.
Color palette to favor or accent (use as environment lighting, props,
screen UI, or wardrobe accents — not as a heavy-handed color grade):
  - Ink navy:   #142A4B
  - Brand blue: #104DFC
  - Violet:     #5F2BC9
  - Magenta:    #882BD8
  - Off-white:  #F4F4F4
Lighting: soft, natural, diffused — avoid hard flash or neon cyberpunk
lighting. Avoid stock-photo/stock-footage clichés (fist bumps, exaggerated
laughing at laptops, green screen backgrounds, floating holographic UI in
mid-air, glowing brains, humanoid robots).
Quality: sharp focus, realistic depth of field, no visible AI artifacts
(extra fingers, warped text, melted objects, inconsistent shadows). If any
UI/screen content appears, it must be legible, grid-aligned, and internally
consistent — no gibberish text.
```

---

## 1. Hero section video (right side) — status: build in code, not generated

**Placement:** the right side of the hero, where a coded abstract graphic
(`HeroArt`) currently sits.

**Decision:** the target reference for this — [yavar.ai](https://yavar.ai)'s
hero — turned out to be a genuine screen-recording of their own product, not
an AI-generated video. Pulling frames from it (downloaded the source `.mov`
and sampled it with `ffmpeg` across its 27-second runtime) showed why it
reads so well: it's dense, legible, multi-panel software UI — a floating
white app window on a black backdrop that runs through a real 5-act product
story, with synced captions that reposition partway through:

1. **The Canvas** — "Start with a blank idea." A blank workflow canvas with
   a palette of node types.
2. **01 · Prompt** — "One prompt." The user types one plain-language request
   into a chat input.
3. **02 · Plan** — "It asks what it needs to know." The agent asks 2–3
   clarifying questions with quick-select answers; the user submits.
4. **Execute Mode** (layout shifts: caption moves to top-center, the window
   goes full-width) — "A full workflow, in seconds." A branching workflow
   diagram builds itself node by node, live — including an approval/
   rejection split — with connecting lines drawing in.
5. **Documentation** — "A BRD writes itself." A second panel appears
   showing a named multi-agent pipeline (each step marked Done/Running/
   Pending) next to a requirements document generating in real time.

Small dot-pagination at the bottom tracks progress through the acts. This
level of legible, continuous, multi-panel UI storytelling is exactly what
current text-to-video models (whichever one Antigravity ends up routing to)
are worst at — dense on-screen text and diagrams over 20+ seconds would
very likely come back garbled, not "exactly like it." **Decided approach:**
build this for real, in code, using the project's own React + Framer Motion
stack — pixel-perfect, on-brand, zero AI-video-artifact risk — either running
live in the hero or screen-recorded to a video file afterward. **This is
deferred to a future session, not built today.**

### The plan for that future session

Reskin the same 5-act structure to UX Core Technologies, tied to a service
we actually offer (AI Agent Automation) with a concrete, relatable process
rather than an abstract one — e.g. an **automated refund-approval workflow**:

1. Blank canvas in a fictional "UX Core — Agent Studio" UI.
2. User prompt: "I need to automate customer refund approvals."
3. Agent asks: "What refund threshold needs manual approval?" / "Where
   should approved refunds be logged?" — quick-select answers, submit.
4. A branching workflow builds live: Refund Request Received → Validate
   Order → Check Refund Policy → Amount ≤ Threshold? → splits to
   Auto-Approve & Refund (green) or Route to Manager (escalation) → Log to
   Finance System.
5. A short pipeline (Workflow Interpreter → Policy Reviewer →
   Documentation Agent → Validator) generates a one-page runbook live.

Same visual language as the reference — floating light app window, dark
backdrop, brand blue (#104DFC) as the primary UI accent, caption panel that
relocates from right-side to top-center between acts 3 and 4, bottom
dot-pagination. Realistically ~24–28 seconds given the depth, muted,
looping. **Aspect ratio note:** the reference runs wide (~8:5 native,
letterboxed even wider on the page) — the current hero art slot is a
square, so this will need the hero's right column widened to do the UI
justice; flag that as part of the implementation work, not something to
route around.

**Implementation note:** whenever this gets built, it replaces `<HeroArt />`
with either a live animated component or a `<video autoPlay muted loop
playsInline poster="...">` element in the same hero slot, matching the
approach already documented for other assets in this file.

---

## 2. Case study covers and full detail-page sets

`/work` currently carries four case studies. **AFS Desk** is real client
work with real screenshots already placed (see `projects.ts` — no
generation brief needed, nothing below applies to it). The other three —
**RetailOS**, **FlowMind AI**, **PayLedger** — are concept case studies
(fictional client, credited as "Confidential" on the page) that follow the
fuller detail-page structure researched from
[martiancorporation.com/case-studies/ev-india](https://martiancorporation.com/case-studies/ev-india)
(overview, a showcase break, requirements, a screen gallery, and a
testimonial), so each needs the full 8-image set below, not just a cover.

**Generate at:** 2400 × 1650 px, JPG, quality 90+
**Style:** a realistic device mockup (laptop and/or phone, angled 3/4 or
straight-on) displaying a clean product UI screenshot, set in a softly lit
environment or on a subtle gradient studio backdrop. Not a flat screenshot
floating on white — give it physical context (a desk, a hand holding a
phone, a studio surface) so it reads as a real product photo, not a UI kit
export.

### 2g. RetailOS — multi-location retail operations platform
**Status:** concept case study — fictional client, real generated mockups.
Client is credited as "Confidential" on the page; nothing here should imply
a real, checkable company. Same 8-image set as VoltPath above (cover, hero,
showcase, fanned requirements, 5 gallery). Lead accent: brand blue with
magenta accents (retail energy, not the cooler blue/violet used elsewhere).

**File:** `/public/images/work/retailos-cover.jpg` — **Generate at:** 2400 × 1650 px, JPG
> A tablet mounted at a retail checkout counter, screen showing a modern POS
> UI: a product grid, a running cart total, and a "Charge" button in brand
> blue (#104DFC) with a magenta (#882BD8) accent on the active category tab.
> Background: a bright, clean store interior, shelves softly out of focus,
> warm daylight through a storefront window. The screen is the sharp focal
> point. Convey: fast, modern, in-store retail technology.

**File:** `/public/images/work/retailos-hero.jpg` — **Generate at:** 1600 × 1600 px, JPG
> A tablet centered and upright, facing the camera straight-on, screen
> showing RetailOS's multi-location dashboard: a row of small store cards
> each with a stock-health indicator dot (green/amber/red), and one large
> KPI number in brand blue. Clean, soft studio background in pale gray or
> off-white (#F4F4F4) — calm enough to sit beside text. Even margin on all
> sides so it crops well to a perfect square.

**File:** `/public/images/work/retailos-showcase.jpg` — **Generate at:** 1200 × 2100 px, JPG (≈4:7)
> A single tablet, dead-center, facing the camera straight-on, larger and
> more dramatic than the hero shot — a poster/key-art product moment.
> Screen shows a live inventory-sync animation: stock counts across three
> store icons updating simultaneously, connected by thin animated lines, in
> brand blue and magenta. Background: a soft dark gradient from ink navy
> (#142A4B) at the edges to a lighter navy glow directly behind the device —
> this sits on a dark section of the page, so keep the screen bright enough
> to read clearly against it.

**File:** `/public/images/work/retailos-requirements-fan.jpg` — **Generate at:** 1400 × 1200 px, JPG
> Three to four device mockups (mix of tablet and phone) fanned out and
> overlapping like a hand of cards, each showing a different RetailOS screen
> (POS checkout, inventory dashboard, low-stock alert, store comparison) —
> the front-most device facing the camera straight-on, others fanned behind
> at increasing angles. Soft studio lighting on a warm, light cream
> background. Subtle drop shadows under each device for depth.

**Gallery (5 images), 1080 × 1920 px each, JPG (9:16), plain studio
background, no hand, no scene — consistent device-mockup style across all
five:**

| File | Screen to depict |
|---|---|
| `/public/images/work/retailos-gallery-1.jpg` | POS checkout screen — product grid, running cart total, brand-blue "Charge" button. |
| `/public/images/work/retailos-gallery-2.jpg` | Multi-location inventory dashboard — a table/card list of stores each with a live stock count and a small trend arrow. |
| `/public/images/work/retailos-gallery-3.jpg` | Low-stock alert & restock flow — a red-flagged product card with a suggested reorder quantity and a brand-blue "Reorder" button. |
| `/public/images/work/retailos-gallery-4.jpg` | Store performance comparison view — a horizontal bar chart ranking stores by sales, brand blue and magenta bars. |
| `/public/images/work/retailos-gallery-5.jpg` | Order fulfillment tracking — a vertical status timeline (Placed → Picked → Packed → Shipped) with the current step highlighted in brand blue. |

---

### 2h. FlowMind AI — AI agent automation platform
**Status:** concept case study — fictional client, real generated mockups.
Client credited as "Confidential." Lead accent: violet with brand-blue
accents (ties to the AI/agent visual language already used elsewhere on the
site, without reusing literal robot imagery).

**File:** `/public/images/work/flowmind-ai-cover.jpg` — **Generate at:** 2400 × 1650 px, JPG
> A widescreen monitor on a desk showing FlowMind AI's ticket-triage UI: an
> incoming-ticket list on the left, and on the right an open ticket with a
> drafted response and a confidence badge in violet (#5F2BC9), plus a
> brand-blue "Approve & Send" button. Modern office setting, soft daylight
> from an out-of-focus window. Convey: calm, capable automation — not a
> sci-fi AI control room.

**File:** `/public/images/work/flowmind-ai-hero.jpg` — **Generate at:** 1600 × 1600 px, JPG
> A laptop centered, screen facing the camera straight-on, showing FlowMind
> AI's main dashboard: a donut chart of "auto-resolved vs. routed to human"
> tickets, in violet and brand blue, with one large percentage KPI above it.
> Clean, soft pale-gray studio background, even margin on all sides for a
> clean square crop.

**File:** `/public/images/work/flowmind-ai-showcase.jpg` — **Generate at:** 1200 × 2100 px, JPG (≈4:7)
> A single laptop, dead-center, facing the camera straight-on, poster/key-art
> style. Screen shows an animated reasoning trail: a ticket icon at top with
> a branching flowchart below it (Classify → Check Policy → Resolve /
> Route), each node lighting up in violet as if mid-execution. Background: a
> soft dark gradient from ink navy (#142A4B) at the edges to a violet-tinted
> glow directly behind the laptop, bright enough to read against the dark
> page section it sits on.

**File:** `/public/images/work/flowmind-ai-requirements-fan.jpg` — **Generate at:** 1400 × 1200 px, JPG
> Three to four laptop/tablet mockups fanned and overlapping like a hand of
> cards, each showing a different FlowMind AI screen (ticket triage, agent
> resolution with reasoning, human review queue, automation dashboard) — the
> front-most device facing the camera straight-on, others fanned behind at
> increasing angles. Soft studio lighting, light cool-gray background.
> Subtle drop shadows for depth.

**Gallery (5 images), 1080 × 1920 px each, JPG (9:16), plain studio
background, consistent device-mockup style:**

| File | Screen to depict |
|---|---|
| `/public/images/work/flowmind-ai-gallery-1.jpg` | Ticket triage & classification view — an incoming ticket with an auto-assigned category tag and confidence percentage in violet. |
| `/public/images/work/flowmind-ai-gallery-2.jpg` | Agent resolution with reasoning trail — a drafted reply plus a collapsed "Why the agent did this" panel with 2-3 bullet reasons. |
| `/public/images/work/flowmind-ai-gallery-3.jpg` | Human review & override queue — a list of pending agent actions with brand-blue "Approve" and outlined "Edit" buttons. |
| `/public/images/work/flowmind-ai-gallery-4.jpg` | Automation performance dashboard — a line chart of tickets auto-resolved over time, trending upward in violet. |
| `/public/images/work/flowmind-ai-gallery-5.jpg` | Policy & guardrail configuration — a settings-style list of toggleable rules ("Auto-resolve refunds under $50", etc.) with on/off switches. |

---

### 2i. PayLedger — SMB cash-flow & expense platform
**Status:** concept case study — fictional client, real generated mockups.
Client credited as "Confidential." Lead accent: ink navy with brand-blue
accents — a deliberately calmer, more trustworthy palette than the other two
concepts, appropriate for a finance product.

**File:** `/public/images/work/payledger-cover.jpg` — **Generate at:** 2400 × 1650 px, JPG
> A phone held at a slight angle in a small-business owner's hand (apron or
> smart-casual wardrobe, standing in a shop or small office — not a bank),
> screen showing PayLedger's cash-flow dashboard: a line graph of cash
> position over the next 30 days, in brand blue (#104DFC), with one large
> "Cash on hand" number above it in ink navy (#142A4B) text. Soft natural
> light, shallow depth of field blurring the background into a calm bokeh.
> Convey: clarity, control, quiet confidence about money.

**File:** `/public/images/work/payledger-hero.jpg` — **Generate at:** 1600 × 1600 px, JPG
> A phone centered and upright, facing the camera straight-on, screen
> showing the same cash-flow dashboard as the cover. Clean, soft pale
> blue-gray studio background (#EAEEF8), even margin on all sides for a
> clean square crop — calm enough to sit beside text.

**File:** `/public/images/work/payledger-showcase.jpg` — **Generate at:** 1200 × 2100 px, JPG (≈4:7)
> A single phone, dead-center, facing the camera straight-on, poster/key-art
> style, larger and more dramatic than the hero shot. Screen shows a
> forecast alert moment: a calendar strip with one date highlighted in a
> warm amber warning tone, and a brand-blue "Review Forecast" button below
> it. Background: a soft dark gradient from ink navy (#142A4B) at the edges
> to a lighter navy glow directly behind the phone, bright enough to read
> against the dark page section it sits on.

**File:** `/public/images/work/payledger-requirements-fan.jpg` — **Generate at:** 1400 × 1200 px, JPG
> Three to four phone mockups fanned and overlapping like a hand of cards,
> each showing a different PayLedger screen (cash-flow dashboard, receipt
> capture, forecast alert, multi-account overview) — the front-most phone
> facing the camera straight-on, others fanned behind at increasing angles.
> Soft studio lighting on a warm, light cream background. Subtle drop
> shadows for depth.

**Gallery (5 images), 1080 × 1920 px each, JPG (9:16), plain studio
background, consistent device-mockup style:**

| File | Screen to depict |
|---|---|
| `/public/images/work/payledger-gallery-1.jpg` | Live cash-flow dashboard — a 30-day line graph, "Cash on hand" figure, brand-blue accents. |
| `/public/images/work/payledger-gallery-2.jpg` | Receipt capture & auto-categorization — a photographed receipt thumbnail with an auto-filled category tag ("Supplies") and amount. |
| `/public/images/work/payledger-gallery-3.jpg` | Upcoming shortfall forecast alert — a calendar strip with one date flagged in amber, a short warning message, and a "Review Forecast" button. |
| `/public/images/work/payledger-gallery-4.jpg` | Multi-account overview — a stacked list of linked bank/card accounts, each with its own balance. |
| `/public/images/work/payledger-gallery-5.jpg` | Expense breakdown by category — a simple donut chart with a legend (Supplies, Payroll, Rent, Utilities) in brand-blue and navy tones. |

---

## 3. Team & company photography (6 images)

> **Important honesty note:** the four "leadership" headshots below are
> currently placeholder *names* (Founder & CEO, Head of Design, etc.) —
> nobody real has been assigned yet. Generating AI faces for them is fine
> as a temporary visual stand-in, but **these should be swapped for real
> photos of real people before launch.** Presenting an AI-generated face as
> a specific named leader to site visitors is misleading once the company
> is live — flag this to whoever owns final content sign-off.

### 3a. Homepage "Why UX Core" photo
**File:** `/public/images/home/why-us-team.jpg`
**Used on:** homepage, "Why UX Core" section (dark navy background band)
**Generate at:** 1600 × 1600 px, JPG

> A small team of 2–3 designers/engineers (mixed gender and ethnicity,
> late-20s to 40s, smart-casual dress) gathered around a laptop and a
> printed wireframe on a desk, mid-discussion, genuine focused expressions
> — not posed smiling at camera. Modern studio/office setting with soft
> daylight. Because this image sits on a dark navy card, make sure the
> photo itself has enough brightness and contrast to hold its own — avoid
> a low-key/moody grade. Convey: collaborative, senior, hands-on.

### 3b. About page team/office banner
**File:** `/public/images/about/office-banner.jpg`
**Used on:** `/about`, wide banner below the intro
**Generate at:** 2520 × 1080 px, JPG (21:9)

> A wide shot of a modern, light-filled studio/office space — an open-plan
> desk area with 3–5 people working, large windows, plants, a wall accent
> in ink navy or brand blue, minimal decor. Documentary/editorial style,
> not staged. Convey: a real, established, well-run studio.

### 3c–3f. Leadership headshots (4 images)
**Files:**
`/public/images/about/team/founder-ceo.jpg`
`/public/images/about/team/head-of-design.jpg`
`/public/images/about/team/head-of-engineering.jpg`
`/public/images/about/team/ai-data-lead.jpg`
**Used on:** `/about`, "Meet the team" grid
**Generate at:** 800 × 800 px each, JPG

> A professional corporate headshot: single person, centered, shoulders-up,
> looking directly at camera with a natural, confident, closed-mouth or
> soft smile. Plain, softly-lit studio background in a light neutral gray
> or very pale blue-gray (something close to #EAEEF8) so it sits cleanly
> in a rounded card on the site. Even, flattering light with no harsh
> shadows. Business-casual attire. Generate four **distinct** individuals,
> varied in gender, ethnicity, and age (30s–50s), so the leadership team
> doesn't look homogenous.

---

## 4. Blog / insights cover images (5 images)

**Generate at:** 1920 × 1080 px, JPG (16:9), one per article
**Style:** abstract editorial illustration/render, not a literal photo of
"people at a computer" — think the kind of cover art you'd see on a
well-designed engineering blog: a single clear visual metaphor rendered in
the brand palette, clean negative space, no text or typography baked into
the image (the site overlays its own title text elsewhere).

### 4a. "AI in Digital Transformation: Opportunities for Businesses"
**File:** `/public/images/blog/ai-in-digital-transformation.jpg`

> Abstract render: a network of glowing nodes and connecting lines in brand
> blue and violet, forming a loose gear/cog silhouette to suggest
> "automation," set against a soft off-white to pale-blue gradient
> background. Clean, minimal, 3D-rendered look with soft shadows — no
> literal robots or humanoid AI imagery.

### 4b. "UX Research That Actually Ships: A Practical Framework"
**File:** `/public/images/blog/ux-research-that-ships.jpg`

> Abstract render: an overhead flat-lay of a UX research kit — sticky notes
> in brand-blue and violet tones arranged in a loose affinity-map grid, a
> pen, and a blurred wireframe sketch on paper — shot from directly above
> on a light neutral surface. Editorial, tidy, warm natural light.

### 4c. "AI Agents Explained: The Next Evolution of Automation"
**File:** `/public/images/blog/ai-agents-explained.jpg`

> Abstract render: a single glowing orb/node at the center with several
> thinner branching paths extending outward and looping back to it (a
> visual metaphor for an agent "planning and acting in a loop"), rendered
> in brand blue and magenta gradients on a dark ink-navy (#142A4B)
> background with soft glow. Clean, minimal, no literal robot imagery.

### 4d. "Why Every Product Team Needs a Performance Budget"
**File:** `/public/images/blog/performance-budgets.jpg`

> Abstract render: a minimalist speedometer/gauge illustration with the
> needle in the "good" green-to-blue zone, rendered in a flat, modern
> geometric style using brand blue as the primary color, on a clean
> off-white background. Convey: measured, disciplined, technical.

### 4e. "Modernizing Data Stacks Without Breaking the Business"
**File:** `/public/images/blog/modernizing-data-stacks.jpg`

> Abstract render: stacked, layered geometric blocks/panels (suggesting a
> data pipeline or warehouse) in ink navy and brand blue, with one layer
> mid-transition/glowing violet to suggest migration-in-progress, on a
> soft light-gray background. Clean isometric or flat-design style.

---

## Once assets are generated

1. Drop each file at the exact path listed above (create the folders if
   they don't exist: `public/videos/`, `public/images/work/`,
   `public/images/about/team/`, `public/images/home/`,
   `public/images/blog/`).
2. For images: `PlaceholderMedia` already accepts `src`/`alt` props (see
   `src/components/ui/placeholder-media.tsx`) — pass them from the matching
   field on the project/data object (e.g. `coverImage`, `heroImage`,
   `showcaseImage`, `requirementsImage`, or a `gallery` entry shaped as
   `{ src, alt }`) and it renders the real image instead of the gradient
   placeholder automatically. Write real `alt` text per image (a couple of
   words describing what's shown, not the prompt itself).
3. For the hero video: swap `<HeroArt />` for a muted, looping `<video>`
   element pointing at the two exported files and the poster image.
