# UX Core Technologies — Website

Next.js (App Router, TypeScript) + Tailwind CSS v4 + Framer Motion. Dark, motion-forward
agency site inspired by the quality bar of martiancorporation.com — original design,
layout, and code throughout.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build && npm run lint` before shipping any change.

## Stack

- **Next.js 16 (App Router)** — file-based routing, static generation for every page except `/api/contact`.
- **Tailwind CSS v4** — design tokens (colors, fonts, animations) defined in [src/app/globals.css](src/app/globals.css).
- **Framer Motion** — scroll reveals ([src/components/ui/reveal.tsx](src/components/ui/reveal.tsx)), animated counters, mobile menu.
- **Radix UI** — accessible accordion (FAQ) and building blocks for future menus/dialogs.
- **React Hook Form + Zod** — contact form validation ([src/lib/schemas/contact.ts](src/lib/schemas/contact.ts)).
- **Embla Carousel** — testimonials slider.
- **lucide-react** — icon set (brand logos like LinkedIn/GitHub are hand-drawn SVGs in [src/components/ui/social-icons.tsx](src/components/ui/social-icons.tsx) since lucide dropped brand icons).

## Where everything lives

```
src/
  app/                    routes: /, /services, /work, /work/[slug], /about, /blog, /blog/[slug], /contact
  app/api/contact/        form submission handler (currently logs only — see below)
  components/layout/      Navbar, Footer
  components/sections/    homepage sections (Hero, Services, Stats, FAQ, ...)
  components/ui/          design-system primitives (Button, Container, PlaceholderMedia, ...)
  components/forms/       ContactForm
  lib/data/               ALL COPY LIVES HERE — services, projects, blog posts, FAQ, stats, testimonials
  lib/schemas/            Zod validation schemas
```

## Swapping in real content (no code changes needed for most of it)

Everything text-based is centralized in `src/lib/data/*.ts`:

- [site.ts](src/lib/data/site.ts) — company name, email, phone, address, social links
- [services.ts](src/lib/data/services.ts) — the 8 service offerings
- [projects.ts](src/lib/data/projects.ts) — case studies (challenge/solution/results)
- [blog.ts](src/lib/data/blog.ts) — articles
- [misc.ts](src/lib/data/misc.ts) — stats, industries, process steps, FAQ, testimonials

Edit the values directly — the site rebuilds automatically in dev.

## Swapping in real graphics/assets

Every image is currently a labeled `<PlaceholderMedia>` block
([src/components/ui/placeholder-media.tsx](src/components/ui/placeholder-media.tsx)) so it's
obvious what's a stand-in. Once the design team delivers assets:

1. Drop files into `public/images/...`
2. Replace the `<PlaceholderMedia label="..." />` usage with Next's `<Image src="/images/..." fill alt="..." />`
3. Recommended sizes: hero/case-study covers 1600×1100, team headshots 400×400 (square), logos as SVG where possible.

## Contact form

The form fully validates and submits today (`POST /api/contact`), but the handler
([src/app/api/contact/route.ts](src/app/api/contact/route.ts)) only logs the submission —
it does **not** send an email yet. Before launch, wire it to a real provider (Resend,
SendGrid, or a CRM webhook) using that provider's API key as an environment variable.

## Deployment

Deploys cleanly to Vercel (zero-config) or any Node host that supports Next.js.
Set `metadataBase` in [src/app/layout.tsx](src/app/layout.tsx) and the sitemap/robots
base URLs in [src/app/sitemap.ts](src/app/sitemap.ts) / [src/app/robots.ts](src/app/robots.ts)
to the real production domain before launch.
