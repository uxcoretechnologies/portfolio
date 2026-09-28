"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  Sparkles,
  Workflow,
  Zap,
  GitBranch,
  Inbox,
  CheckCircle2,
  FileText,
  Database,
  Send,
  AlertTriangle,
  Check,
  Loader2,
} from "lucide-react";
import { PixelTrail } from "@/components/ui/pixel-trail";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

/**
 * A coded, on-brand re-imagining of the "product story" hero video pattern
 * (researched from yavar.ai) — a floating app window on a dark backdrop
 * that runs through a real AI-agent workflow, start to finish. Built live
 * in React/Framer Motion rather than generated, so every screen stays
 * pixel-sharp and legible — the thing AI video tools struggle with most.
 */

type Act = {
  id: string;
  label: string;
  heading: string;
  description: string;
  captionPosition: "side" | "top";
  duration: number;
};

const ACTS: Act[] = [
  {
    id: "canvas",
    label: "THE CANVAS",
    heading: "Start with a blank idea.",
    description: "Triggers, actions, and decisions — orchestrated on a single canvas.",
    captionPosition: "side",
    duration: 4200,
  },
  {
    id: "prompt",
    label: "01 · PROMPT",
    heading: "One prompt.",
    description: "Describe the workflow in plain language. No drag-and-drop, no config.",
    captionPosition: "side",
    duration: 4200,
  },
  {
    id: "plan",
    label: "02 · PLAN",
    heading: "It asks what it needs to know.",
    description: "The agent gathers edge cases and approvals before it builds anything.",
    captionPosition: "side",
    duration: 5200,
  },
  {
    id: "execute",
    label: "EXECUTE MODE",
    heading: "A full workflow, in seconds.",
    description: "Nodes, branches, and approvals — wired together automatically.",
    captionPosition: "top",
    duration: 6200,
  },
  {
    id: "docs",
    label: "DOCUMENTATION",
    heading: "A runbook writes itself.",
    description: "A specialist agent pipeline documents exactly what shipped.",
    captionPosition: "top",
    duration: 5400,
  },
];

const fade: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.4, ease: "easeOut" },
  }),
};

export function HeroProductDemo() {
  const [actIndex, setActIndex] = useState(0);
  const act = ACTS[actIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActIndex((i) => (i + 1) % ACTS.length);
    }, act.duration);
    return () => clearTimeout(timer);
  }, [actIndex, act.duration]);

  return (
    <div className="relative mx-auto flex w-full justify-center overflow-visible">
      {/* 
        Scalable design canvas: base coordinate space is 600px wide by 485px tall.
        Scales down smoothly across viewports so the entire Figma layout (decorations,
        top text, and app window) stays 100% consistent, never overflows, and fits cleanly.
      */}
      <div
        className="relative origin-top shrink-0 transition-transform duration-300
          w-[600px] h-[275px] scale-[0.56]
          min-[400px]:h-[305px] min-[400px]:scale-[0.62]
          sm:h-[372px] sm:scale-[0.76]
          md:h-[412px] md:scale-[0.84]
          lg:h-[421px] lg:scale-[0.86]
          xl:h-[465px] xl:scale-[0.95]
          2xl:h-[485px] 2xl:scale-100"
      >
        {/* 1. Ambient Blob in background */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -z-10 left-[8px] top-[14px] h-[465px] w-[584px] opacity-75"
          viewBox="0 0 843 601"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M48.6335 48.0727C205 -110.01 366.778 174.073 505.607 154.61C624.479 137.927 761.866 53.6335 824.339 169.486C879.003 270.51 809.588 414.168 668.157 514.264C552.494 671.739 315.879 576.362 177.918 518.898C41.6921 462.362 -17.3101 336.314 4.38185 215.827C11.0139 178.99 13.6004 83.4902 48.6335 48.0727Z"
            fill="url(#heroDecorBlobGrad)"
          />
          <defs>
            <linearGradient
              id="heroDecorBlobGrad"
              x1="0"
              y1="0"
              x2="843"
              y2="601"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D9E6FF" stopOpacity="0.85" />
              <stop offset="1" stopColor="#E8E2F5" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>

        {/* 2. Top Caption ("EXECUTE MODE", "A full workflow, in seconds.", etc.) */}
        <div className="absolute top-0 left-0 w-full h-[76px] flex flex-col items-center justify-center text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={act.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28 }}
            >
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1557FF] uppercase">
                {act.label}
              </p>
              <h3 className="mt-0.5 font-display text-[22px] font-bold tracking-tight text-[#0F172A]">
                {act.heading}
              </h3>
              <p className="mt-0.5 text-xs text-[#565F78] max-w-[420px] mx-auto">
                {act.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. Top-left Sparkle Idea Decor Badge */}
        <img
          src="/images/home/hero-idea-decor.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[30px] top-[48px] z-10 w-[74px]"
        />

        {/* 4. Left "From idea to impact" — curved dashed arrow + handwritten text */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-[4px] top-[180px] z-10 w-[84px] h-[130px] overflow-visible"
          viewBox="0 0 84 130"
          fill="none"
        >
          <path
            d="M 6 85 C 16 45 42 20 72 6"
            stroke="#1557FF"
            strokeWidth="2"
            strokeDasharray="6 5"
          />
          <path
            d="M 60 4 L 73 5 L 68 16"
            stroke="#1557FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g transform="rotate(-5 28 100)">
            <text
              x="2"
              y="90"
              fontFamily="var(--font-handwritten)"
              fontSize="21"
              fontWeight="700"
              fill="#5937e8"
            >
              From idea
            </text>
            <text
              x="2"
              y="110"
              fontFamily="var(--font-handwritten)"
              fontSize="21"
              fontWeight="700"
              fill="#5937e8"
            >
              to impact
            </text>
          </g>
        </svg>

        {/* 5. Right Analytics Icon Badge */}
        <img
          src="/images/home/hero-analytics-icon.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[509px] top-[234px] z-10 w-[56px]"
        />

        {/* 6. Right "Smarter together" — curved dashed arrow + handwritten text */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-[512px] top-[268px] z-10 w-[86px] h-[130px] overflow-visible"
          viewBox="0 0 86 130"
          fill="none"
        >
          <path
            d="M 62 82 C 45 60 30 38 25 8"
            stroke="#1557FF"
            strokeWidth="2"
            strokeDasharray="6 5"
          />
          <path
            d="M 18 16 L 25 6 L 33 15"
            stroke="#1557FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g transform="rotate(-5 50 96)">
            <text
              x="74"
              y="86"
              textAnchor="end"
              fontFamily="var(--font-handwritten)"
              fontSize="21"
              fontWeight="700"
              fill="#5937e8"
            >
              Smarter
            </text>
            <text
              x="74"
              y="106"
              textAnchor="end"
              fontFamily="var(--font-handwritten)"
              fontSize="21"
              fontWeight="700"
              fill="#5937e8"
            >
              together
            </text>
          </g>
        </svg>

        {/* 7. App Window — crisp white frame directly matching Figma */}
        <div className="absolute left-[65px] top-[86px] w-[470px] h-[352px] flex flex-col overflow-hidden rounded-[22px] border border-neutral-200/90 bg-white shadow-xl shadow-indigo-950/6">
          {/* Top Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-neutral-100 px-4 py-2.5 bg-white">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-[#FF5F56]" />
              <span className="size-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="size-2.5 rounded-full bg-[#27C93F]" />
              <Logo variant="icon" height={15} className="ml-2" />
            </div>
            <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              <span>Live</span>
            </div>
          </div>

          {/* Body / Interactive Acts */}
          <div className="relative min-h-0 flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              {act.id === "canvas" && <CanvasAct key="canvas" />}
              {act.id === "prompt" && <PromptAct key="prompt" />}
              {act.id === "plan" && <PlanAct key="plan" />}
              {act.id === "execute" && <ExecuteAct key="execute" />}
              {act.id === "docs" && <DocsAct key="docs" />}
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="relative mb-3 flex shrink-0 items-center justify-center gap-1.5">
            {ACTS.map((a, i) => (
              <span
                key={a.id}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === actIndex ? "w-6 bg-[#1557FF]" : "w-1.5 bg-neutral-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ActShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center p-5 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}

function CanvasAct() {
  const nodeTypes = [
    { label: "Triggers", icon: Zap },
    { label: "Actions", icon: Workflow },
    { label: "Conditions", icon: GitBranch },
    { label: "Integrations", icon: Database },
  ];
  return (
    <ActShell>
      <div className="mx-auto flex max-w-[280px] flex-col items-center text-center">
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 text-primary"
        >
          <Sparkles className="size-5" />
        </motion.div>
        <motion.h4
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-3 font-display text-sm font-semibold text-neutral-900"
        >
          Enterprise Agent Orchestrator
        </motion.h4>
        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-1 text-xs text-neutral-500"
        >
          Design, compose, and deploy multi-agent workflows.
        </motion.p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {nodeTypes.map((n, i) => (
            <motion.div
              key={n.label}
              custom={i + 3}
              variants={fade}
              initial="hidden"
              animate="show"
              className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-xs text-neutral-700"
            >
              <n.icon className="size-3.5 text-primary" />
              {n.label}
            </motion.div>
          ))}
        </div>
      </div>
    </ActShell>
  );
}

function PromptAct() {
  return (
    <ActShell>
      <div className="mx-auto flex w-full max-w-[320px] flex-col items-center text-center">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-xs font-medium text-neutral-500"
        >
          Describe the workflow in plain language
        </motion.p>
        <motion.div
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-3 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-left"
        >
          <motion.span
            className="text-xs sm:text-sm text-neutral-800"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.6, delay: 0.4, ease: "linear" }}
          >
            I need to automate customer refund approvals.
          </motion.span>
        </motion.div>
        <motion.div
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ delay: 2.2 }}
          className="mt-3.5 flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white"
        >
          <Send className="size-3.5" /> Build workflow
        </motion.div>
      </div>
    </ActShell>
  );
}

function PlanAct() {
  const questions = [
    { q: "What refund threshold needs manual approval?", a: "Above $250" },
    { q: "Where should approved refunds be logged?", a: "Finance system" },
  ];
  return (
    <ActShell>
      <div className="mx-auto flex w-full max-w-[320px] flex-col gap-2.5">
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-xs text-white"
        >
          Automate customer refund approvals
        </motion.div>
        {questions.map((item, i) => (
          <motion.div key={item.q} custom={i + 1} variants={fade} initial="hidden" animate="show">
            <p className="text-xs text-neutral-500">{item.q}</p>
            <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Check className="size-3" /> {item.a}
            </span>
          </motion.div>
        ))}
        <motion.div
          custom={questions.length + 1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-0.5 w-fit rounded-full bg-primary px-3.5 py-1 text-xs font-semibold text-white"
        >
          Submit answers
        </motion.div>
      </div>
    </ActShell>
  );
}

function ExecuteAct() {
  return (
    <ActShell>
      <div className="mx-auto flex w-full max-w-[400px] flex-col items-center">
        {/* Row 1 */}
        <div className="grid w-full grid-cols-2 gap-2.5">
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 rounded-xl border border-neutral-200/90 bg-white px-3 py-2 text-[11px] font-medium text-neutral-800 shadow-sm"
          >
            <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Inbox className="size-3" />
            </div>
            <span className="truncate">Refund Request Received</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 rounded-xl border border-neutral-200/90 bg-white px-3 py-2 text-[11px] font-medium text-neutral-800 shadow-sm"
          >
            <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="size-3" />
            </div>
            <span className="truncate">Validate Order</span>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="mt-2 grid w-full grid-cols-2 gap-2.5">
          <motion.div
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 rounded-xl border border-neutral-200/90 bg-white px-3 py-2 text-[11px] font-medium text-neutral-800 shadow-sm"
          >
            <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FileText className="size-3" />
            </div>
            <span className="truncate">Check Refund Policy</span>
          </motion.div>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 rounded-xl border border-neutral-200/90 bg-white px-3 py-2 text-[11px] font-medium text-neutral-800 shadow-sm"
          >
            <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <GitBranch className="size-3" />
            </div>
            <span className="truncate">Amount ≤ Threshold?</span>
          </motion.div>
        </div>

        {/* Connecting branch lines matching Figma tree */}
        <div className="relative h-5 w-full flex items-center justify-center">
          <svg className="w-[280px] h-5 overflow-visible" viewBox="0 0 280 20" fill="none">
            <path
              d="M 140 0 L 140 10 M 70 10 L 210 10 M 70 10 L 70 20 M 210 10 L 210 20"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Row 3 */}
        <div className="grid w-full grid-cols-2 gap-2.5">
          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 rounded-xl border border-[#BCE8CE] bg-[#EDF8F1] px-3 py-2 text-[11px] font-semibold text-[#167D49]"
          >
            <CheckCircle2 className="size-3.5 shrink-0" />
            <span className="truncate">Auto-approved</span>
          </motion.div>

          <motion.div
            custom={5}
            variants={fade}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 rounded-xl border border-[#FCDDB3] bg-[#FFF7EC] px-3 py-2 text-[11px] font-semibold text-[#B56A11]"
          >
            <AlertTriangle className="size-3.5 shrink-0" />
            <span className="truncate">Escalated to manager</span>
          </motion.div>
        </div>

        {/* Vertical connector down to Log to Finance */}
        <div className="h-3 w-px bg-neutral-300" />

        {/* Row 4 */}
        <motion.div
          custom={6}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex items-center gap-2 rounded-xl bg-[#1557FF] px-4 py-1.5 text-[11px] font-semibold text-white shadow-md shadow-blue-500/20"
        >
          <Database className="size-3.5" />
          <span>Log to Finance System</span>
        </motion.div>
      </div>
    </ActShell>
  );
}

function DocsAct() {
  const pipeline = ["Workflow Interpreter", "Policy Reviewer", "Documentation Agent", "Validator"];
  const docLines = [
    { text: "Refund Approval Runbook", size: "h" },
    { text: "Overview", size: "sub" },
    { text: "Approval thresholds", size: "sub" },
    { text: "Escalation path", size: "sub" },
  ];
  return (
    <ActShell>
      <div className="mx-auto grid w-full max-w-[400px] grid-cols-2 gap-3.5">
        <div className="flex flex-col gap-2">
          {pipeline.map((name, i) => (
            <motion.div
              key={name}
              custom={i}
              variants={fade}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-[11px] font-medium text-neutral-700"
            >
              {i === pipeline.length - 1 ? (
                <Loader2 className="size-3.5 shrink-0 animate-spin text-primary" />
              ) : (
                <CheckCircle2 className="size-3.5 shrink-0 text-emerald-500" />
              )}
              {name}
            </motion.div>
          ))}
        </div>
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
          {docLines.map((line, i) => (
            <motion.p
              key={line.text}
              custom={i + 1}
              variants={fade}
              initial="hidden"
              animate="show"
              className={cn(
                line.size === "h"
                  ? "font-display text-xs font-bold text-neutral-900"
                  : "mt-1.5 text-[10px] text-neutral-500"
              )}
            >
              {line.size === "sub" && "— "}
              {line.text}
            </motion.p>
          ))}
        </div>
      </div>
    </ActShell>
  );
}
