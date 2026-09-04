import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Band } from "@/components/ui/band";

export const metadata: Metadata = {
  title: "AFS Desk — Case Study | UX Core Technologies",
  description:
    "A multi-tenant CRM platform that brings lead management, follow-ups, and team activity into one mobile-first workspace.",
};

const gallery = [
  { src: "/images/work/afs-desk/afs-screen-2.png", alt: "AFS Desk user activity timeline" },
  { src: "/images/work/afs-desk/afs-screen-3.png", alt: "AFS Desk leads list with quick-actions menu" },
  { src: "/images/work/afs-desk/afs-screen-1.png", alt: "AFS Desk dashboard with lead stats" },
  { src: "/images/work/afs-desk/afs-screen-4.jpeg", alt: "AFS Desk login screen" },
  { src: "/images/work/afs-desk/afs-screen-5.png", alt: "AFS Desk profile and settings" },
];

const services = [
  "Mobile App Development",
  "Backend API Development",
  "Database Design",
  "Product & UX/UI Design",
];

const techStack = [
  { name: "React Native", icon: "Smartphone" },
  { name: "Node.js & Express", icon: "Server" },
  { name: "MongoDB", icon: "Database" },
  { name: "Role-Based Access", icon: "ShieldCheck" },
];

const results = [
  { label: "User roles", value: "3-tier" },
  { label: "Data isolation", value: "Per-org" },
  { label: "Lead import", value: "Bulk CSV" },
];

/** Real AFS Desk logo — cropped from the app splash screen */
function AFSLogo({ className = "h-16" }: { className?: string }) {
  return (
    // overflow-hidden + object-top clips the green tagline below the logo
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: "380/230" }}>
      <img
        src="/images/work/afs-desk/afs-logo.png"
        alt="AFS Desk logo"
        className="h-full w-full object-contain object-top"
      />
    </div>
  );
}

export default function AFSDeskPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO — sky-blue gradient, real logo left,
          3-phone spread fills the right column
      ══════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 70% 40%, #b8ddf5 0%, #cce6f8 35%, #dff0fb 60%, #f0f8fd 80%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid min-h-[440px] grid-cols-1 items-end lg:grid-cols-[38%_62%]">
            {/* Left — logo + headline + CTA, padded */}
            <Reveal className="px-6 pb-16 pt-24 sm:px-10 sm:pt-28 lg:px-14 lg:pb-20 lg:pt-32">
              {/* Real AFS logo — taller crop shows icon + AFS DESK text */}
              <AFSLogo className="h-20 sm:h-24" />

              <h1 className="mt-5 font-display text-[1.9rem] font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                Your Business
                <br />
                in Your Hands
              </h1>

              <div className="mt-7">
                <Link
                  href="/contact"
                  id="afs-desk-hero-cta"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(90deg, #104dfc 0%, #00c6a7 100%)" }}
                >
                  Get Started
                  <span className="flex size-5 items-center justify-center rounded-full bg-white/25">
                    <ArrowUpRight className="size-3" />
                  </span>
                </Link>
              </div>
            </Reveal>

            {/* Right — hero mockup, flush to section bottom, no padding */}
            <Reveal
              delay={0.15}
              className="flex min-w-0 items-end justify-center overflow-hidden"
            >
              <Image
                src="/images/work/afs-desk/afs-desk-hero-mockup.png"
                alt="AFS Desk — three phone mockups showing dashboard, activity, and leads screens"
                width={1400}
                height={960}
                quality={95}
                sizes="(max-width: 768px) 100vw, 62vw"
                className="w-full object-contain object-bottom"
                priority
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SHOWCASE — white bg, showcase-left phones in
          rounded card left, real logo + headline right
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[50%_50%] lg:gap-14">
            {/* Left — phones on blue-circle bg in a soft rounded card */}
            <Reveal className="min-w-0">
              <div
                className="overflow-hidden rounded-[28px]"
                style={{ background: "linear-gradient(145deg, #e8f4ff 0%, #f0f8ff 100%)" }}
              >
                <Image
                  src="/images/work/afs-desk/afs-desk-showcase-left.png"
                  alt="AFS Desk — three phones on blue gradient background"
                  width={1200}
                  height={900}
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full object-contain"
                />
              </div>
            </Reveal>

            {/* Right — real logo + big headline + description */}
            <Reveal delay={0.1} className="flex flex-col gap-5">
              <AFSLogo className="h-14 sm:h-16" />

              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
                One platform. Every
                <br />
                lead. Every follow-up.
              </h2>

              <p className="max-w-sm text-[15px] leading-relaxed text-muted">
                A multi-tenant CRM platform that brings lead management,
                follow-ups, and team activity into one mobile&#8209;first workspace.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROJECT OVERVIEW — 3-col card
      ══════════════════════════════════════════════════ */}
      <section className="bg-white pb-10 sm:pb-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="grid grid-cols-1 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-[#f9fafb] md:grid-cols-[28%_22%_50%] md:divide-x md:divide-y-0">
              {/* Meta */}
              <div className="p-7 sm:p-8">
                <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Project Overview
                </p>
                <h3 className="mt-5 font-display text-lg font-semibold">AFS Desk</h3>
                <dl className="mt-5 flex flex-col gap-4">
                  <div>
                    <dt className="text-xs text-muted">Client</dt>
                    <dd className="mt-0.5 font-semibold">Confidential</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Industry</dt>
                    <dd className="mt-0.5 font-semibold">Sales &amp; CRM Software</dd>
                  </div>
                </dl>
              </div>

              {/* Services */}
              <div className="p-7 sm:p-8">
                <p className="text-xs font-medium text-muted">Services</p>
                <div className="mt-4 flex flex-col gap-2">
                  {services.map((s) => (
                    <span key={s} className="text-sm text-foreground/80">{s}</span>
                  ))}
                </div>
              </div>

              {/* Description + Tech */}
              <div className="p-7 sm:p-8">
                <p className="text-sm leading-relaxed text-foreground/90">
                  AFS Desk centralizes the entire lead lifecycle behind a
                  single, organisation-aware mobile app. Leads can be imported
                  in bulk from CSV, assigned automatically or by hand, and
                  tracked through a shared status pipeline, while every call,
                  message, and status change lands in one activity timeline the
                  whole team can see.
                </p>
                <div className="my-5 h-px w-full bg-border" />
                <p className="text-xs font-medium text-muted">Technologies</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {techStack.map((t) => (
                    <div
                      key={t.name}
                      className="flex size-12 items-center justify-center rounded-xl border border-border bg-white"
                      title={t.name}
                    >
                      <Icon name={t.icon} className="size-5 text-primary" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════ */}
      <section className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-[#f9fafb] sm:grid-cols-3 sm:divide-x sm:divide-border">
              {results.map((r, i) => (
                <div key={r.label} className={`p-8 text-center ${i > 0 ? "border-t border-border sm:border-t-0" : ""}`}>
                  <p className="text-xs text-muted">{r.label}</p>
                  <p
                    className="mt-2 font-display text-3xl font-extrabold"
                    style={{
                      background: "linear-gradient(100deg, #142a4b 10%, #104dfc 55%, #882bd8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {r.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          REQUIREMENTS & APPROACH
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#f5f7fc] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_0.9fr]">
              {/* Requirements card */}
              <div className="rounded-3xl bg-white p-8 sm:p-10">
                <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Requirements
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold">Defining Project Requirements</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  The platform needed to support multiple organizations securely from day one — each with its own users,
                  leads, and data — without the complexity or cost of running a separate deployment per client.
                </p>

                <div className="mt-6">
                  <p className="text-sm text-foreground/80">Key requirements included:</p>
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {[
                      "Multi-organization architecture with strict data isolation between companies",
                      "Role-based access for Admins, Sub-admins/Managers, and Executives",
                      "Bulk lead import via CSV for teams migrating off spreadsheets",
                      "Automatic and manual lead assignment with full ownership history",
                      "A follow-up system that surfaces overdue and upcoming tasks by date",
                      "A complete activity timeline for every lead — who did what, and when",
                    ].map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-muted">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="my-6 h-px w-full bg-border" />
                <h4 className="font-display text-lg font-semibold">Agile Approach</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  The data model was designed multi-tenant from the first schema — organizations, users, leads, and
                  activities all scoped to a company from day one — so the same codebase could serve one team or
                  hundreds without a later rebuild. Delivery went module by module (dashboard, then leads, then
                  follow-ups, then activity and notifications), letting the core workflow ship and get used early,
                  with each later module building on real usage instead of assumptions.
                </p>
              </div>

              {/* Side image */}
              <div className="min-h-[260px] overflow-hidden rounded-3xl lg:min-h-full">
                <div
                  className="h-full w-full"
                  style={{ background: "#f0f8ff" }}
                >
                  <img
                    src="/images/work/afs-desk/afs-desk-showcase-right.png"
                    alt="AFS Desk phone mockups on warm background"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          GALLERY — dark navy band, 5 phone screens
      ══════════════════════════════════════════════════ */}
      <Band tone="dark">
        <section className="py-24 sm:py-32">
          <ProjectGallery images={gallery} color="from-blue-600/25 to-teal-400/15" />
        </section>
      </Band>

      {/* ══════════════════════════════════════════════════
          MORE WORK + CTA
      ══════════════════════════════════════════════════ */}
      <Band tone="light">
        <section className="py-24 sm:py-32">
          <Container>
            <h2 className="font-display text-2xl font-semibold">More work</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                { slug: "retailos", name: "RetailOS", summary: "Unified operations platform for multi-location retail chains." },
                { slug: "flowmind-ai", name: "FlowMind AI", summary: "AI agent platform that automates ticket resolution end-to-end." },
              ].map((p) => (
                <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/20 via-surface-2 to-accent/10">
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
                      <p className="font-display text-lg font-semibold text-foreground">{p.name}</p>
                      <p className="text-sm text-muted">{p.summary}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                    <ArrowUpRight className="size-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-80"
              >
                Start a similar project
              </Link>
            </div>
          </Container>
        </section>
      </Band>

      <Band tone="dark">
        <ContactCTA />
      </Band>
    </>
  );
}
