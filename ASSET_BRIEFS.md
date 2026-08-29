# Asset Generation Briefs

This document is a generation brief for every placeholder image currently on
the UX Core Technologies website — one prompt per asset, written to be pasted
directly into an image-generation tool (Antigravity or otherwise). Hero
section artwork is intentionally excluded — that graphic is coded (CSS/SVG),
not an image, and is out of scope here.

Each entry gives you: where the file goes, the exact pixel size to generate
at, and a full prompt. Generate at the listed size (or larger, same aspect
ratio) so the image stays sharp on retina displays — the site will scale it
down, never up.

---

## Before you start: shared style language

Paste this block before each individual prompt, or keep it as a system/style
prompt if your tool supports one. Every asset should feel like it comes from
the same photoshoot and the same design system — that consistency matters
more than any single image looking good in isolation.

```
Brand: UX Core Technologies — a UX-led software design and engineering studio.
Mood: premium, precise, confident, modern SaaS/tech — never cluttered,
never "startup-generic," never overly futuristic/sci-fi.
Color palette to favor or accent within images (use as environment lighting,
props, screen UI, or wardrobe accents — not as a heavy-handed color grade):
  - Ink navy:   #142A4B
  - Brand blue: #104DFC
  - Violet:     #5F2BC9
  - Magenta:    #882BD8
  - Off-white:  #F4F4F4
Lighting: soft, natural, diffused — avoid hard flash or neon cyberpunk
lighting. Avoid stock-photo clichés (fist bumps, exaggerated laughing at
laptops, green screen backgrounds, floating holographic UI in mid-air).
Camera/render quality: sharp focus, realistic depth of field, no visible
AI artifacts (extra fingers, warped text, melted objects, inconsistent
shadows). If any UI/screen content appears in the shot, it must be
legible, grid-aligned, and internally consistent — no gibberish text.
```

---

## 1. Case study covers (6 images)

Each project needs **one** high-resolution source image. The site crops the
same file into two contexts — a 16:11 grid card and a 16:8 hero banner on the
project's detail page — so compose the subject centered with breathing room
top and bottom, nothing important tight against the left/right edges.

**Generate at:** 2400 × 1650 px, JPG, quality 90+
**Style:** a realistic device mockup (laptop and/or phone, angled 3/4 or
straight-on) displaying a clean product UI screenshot, set in a softly lit
environment or on a subtle gradient studio backdrop. Not a flat screenshot
floating on white — give it physical context (a desk, a hand holding a
phone, a studio surface) so it reads as a real product photo, not a UI kit
export.

### 1a. VoltPath — EV charging app
**File:** `/public/images/work/voltpath-cover.jpg`
**Used on:** homepage "Our latest creations", `/work`, `/work/voltpath`

> A smartphone held at a slight angle in a driver's hand, screen showing a
> clean EV-charging app UI: a map view with pin markers for charging
> stations, a bottom sheet card showing charger availability and a "Start
> Charging" button in brand blue (#104DFC). Background: a modern EV parked
> at a charging station at dusk, soft blue-violet ambient light, shallow
> depth of field blurring the car and charger into a soft bokeh. The phone
> screen is the sharp focal point. Convey: mobility, clean energy, calm
> confidence.

### 1b. Buildyard — construction site management app
**File:** `/public/images/work/buildyard-cover.jpg`
**Used on:** `/work`, `/work/buildyard`

> A rugged tablet or phone in a hi-vis-gloved hand on an active construction
> site, screen showing a site-management app UI: a task checklist, a photo
> log thumbnail grid, and a progress bar in brand blue. Background: an
> out-of-focus construction site at golden hour — scaffolding, a crane
> silhouette, warm natural light. The device and its screen are the sharp
> focal point. Convey: field-ready reliability, organization amid complexity.

### 1c. Kolkata Mart — e-commerce marketplace
**File:** `/public/images/work/kolkata-mart-cover.jpg`
**Used on:** `/work`, `/work/kolkata-mart`

> A laptop on a clean desk showing a modern e-commerce storefront UI: a
> product grid with clear pricing, a sticky "Add to Cart" button in brand
> blue, and a minimal top nav. Soft studio lighting, a blurred coffee cup
> and notebook in the foreground for depth. Neutral desk surface (light
> wood or matte white). Convey: speed, trustworthy checkout, retail polish.

### 1d. AssetFlow — enterprise asset management dashboard
**File:** `/public/images/work/assetflow-cover.jpg`
**Used on:** `/work`, `/work/assetflow`

> A widescreen monitor on a desk in a modern office, showing an enterprise
> analytics dashboard: a sidebar nav, KPI cards, and a line chart trending
> upward, rendered in ink navy (#142A4B) and brand blue with white
> backgrounds. Slightly elevated three-quarter angle so the screen fills
> most of the frame. Soft daylight from an out-of-focus window in the
> background. Convey: control, clarity, enterprise-grade trust.

### 1e. Ashsheefa Health — hospital patient app
**File:** `/public/images/work/ashsheefa-health-cover.jpg`
**Used on:** `/work`, `/work/ashsheefa-health`

> A phone screen showing a healthcare app UI: an appointment card with a
> doctor's name and time slot, a calendar strip, and a soft rounded "Book
> Appointment" button in brand blue. Held in a relaxed hand in a bright,
> calm setting — soft natural light, a hint of a plant or clean interior in
> the background, nothing clinical or cold. Convey: reassurance, simplicity,
> approachable healthcare.

### 1f. ManageOps — operations workflow platform
**File:** `/public/images/work/manageops-cover.jpg`
**Used on:** `/work`, `/work/manageops`

> A laptop screen showing an operations dashboard UI: a kanban-style board
> with task cards, status labels, and an SLA countdown badge in brand
> violet (#5F2BC9). Overhead or angled desk shot, minimal modern workspace,
> soft neutral tones with the screen's blue/violet UI as the main color
> pop. Convey: coordination, momentum, teams in sync.

---

## 2. Team & company photography (6 images)

> **Important honesty note:** the four "leadership" headshots below are
> currently placeholder *names* (Founder & CEO, Head of Design, etc.) —
> nobody real has been assigned yet. Generating AI faces for them is fine
> as a temporary visual stand-in, but **these should be swapped for real
> photos of real people before launch.** Presenting an AI-generated face as
> a specific named leader to site visitors is misleading once the company
> is live — flag this to whoever owns final content sign-off.

### 2a. Homepage "Why UX Core" photo
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

### 2b. About page team/office banner
**File:** `/public/images/about/office-banner.jpg`
**Used on:** `/about`, wide banner below the intro
**Generate at:** 2520 × 1080 px, JPG (21:9)

> A wide shot of a modern, light-filled studio/office space — an open-plan
> desk area with 3–5 people working, large windows, plants, a wall accent
> in ink navy or brand blue, minimal decor. Documentary/editorial style,
> not staged. Convey: a real, established, well-run studio.

### 2c–2f. Leadership headshots (4 images)
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

## 3. Blog / insights cover images (5 images)

**Generate at:** 1920 × 1080 px, JPG (16:9), one per article
**Style:** abstract editorial illustration/render, not a literal photo of
"people at a computer" — think the kind of cover art you'd see on a
well-designed engineering blog: a single clear visual metaphor rendered in
the brand palette, clean negative space, no text or typography baked into
the image (the site overlays its own title text elsewhere).

### 3a. "AI in Digital Transformation: Opportunities for Businesses"
**File:** `/public/images/blog/ai-in-digital-transformation.jpg`

> Abstract render: a network of glowing nodes and connecting lines in brand
> blue and violet, forming a loose gear/cog silhouette to suggest
> "automation," set against a soft off-white to pale-blue gradient
> background. Clean, minimal, 3D-rendered look with soft shadows — no
> literal robots or humanoid AI imagery.

### 3b. "UX Research That Actually Ships: A Practical Framework"
**File:** `/public/images/blog/ux-research-that-ships.jpg`

> Abstract render: an overhead flat-lay of a UX research kit — sticky notes
> in brand-blue and violet tones arranged in a loose affinity-map grid, a
> pen, and a blurred wireframe sketch on paper — shot from directly above
> on a light neutral surface. Editorial, tidy, warm natural light.

### 3c. "AI Agents Explained: The Next Evolution of Automation"
**File:** `/public/images/blog/ai-agents-explained.jpg`

> Abstract render: a single glowing orb/node at the center with several
> thinner branching paths extending outward and looping back to it (a
> visual metaphor for an agent "planning and acting in a loop"), rendered
> in brand blue and magenta gradients on a dark ink-navy (#142A4B)
> background with soft glow. Clean, minimal, no literal robot imagery.

### 3d. "Why Every Product Team Needs a Performance Budget"
**File:** `/public/images/blog/performance-budgets.jpg`

> Abstract render: a minimalist speedometer/gauge illustration with the
> needle in the "good" green-to-blue zone, rendered in a flat, modern
> geometric style using brand blue as the primary color, on a clean
> off-white background. Convey: measured, disciplined, technical.

### 3e. "Modernizing Data Stacks Without Breaking the Business"
**File:** `/public/images/blog/modernizing-data-stacks.jpg`

> Abstract render: stacked, layered geometric blocks/panels (suggesting a
> data pipeline or warehouse) in ink navy and brand blue, with one layer
> mid-transition/glowing violet to suggest migration-in-progress, on a
> soft light-gray background. Clean isometric or flat-design style.

---

## 4. Optional — product mockups (3 images, nice-to-have)

The `/products` page currently uses icon tiles only and doesn't strictly
need imagery, but a real product screenshot mockup per product would lift
that page to match the rest of the site. Lower priority than sections 1–3.

**Generate at:** 1920 × 1200 px, JPG
**Style:** same realistic device-mockup treatment as the case study covers.

### 4a. CoreFlow
**File:** `/public/images/products/core-flow.jpg`
> A laptop showing a workflow-automation dashboard UI: a horizontal pipeline
> of connected task cards with checkmarks, in brand blue and violet, on a
> clean desk with soft studio lighting.

### 4b. CoreInsights
**File:** `/public/images/products/core-insights.jpg`
> A laptop showing a web analytics dashboard UI: a heatmap overlay on a
> webpage thumbnail plus a session-replay timeline scrubber below it, in
> brand blue accents, clean desk setting.

### 4c. CoreAgent
**File:** `/public/images/products/core-agent.jpg`
> A laptop showing a chat-style support-agent interface UI: a conversation
> thread with a brand-blue "agent" message bubble and a subtle "typing"
> indicator, clean minimal desk setting, soft daylight.

---

## Once assets are generated

1. Drop each file at the exact path listed above (create the folders if
   they don't exist: `public/images/work/`, `public/images/about/team/`,
   `public/images/home/`, `public/images/blog/`, `public/images/products/`).
2. In the corresponding component, swap `<PlaceholderMedia .../>` for
   Next's `<Image src="/images/..." alt="..." fill className="..." />` —
   see [README.md](README.md#swapping-in-real-graphicsassets) for the
   exact pattern already documented there.
3. Write real `alt` text per image (a couple of words describing what's
   shown, not the prompt itself) for accessibility and SEO.
