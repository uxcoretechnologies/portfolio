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

  const isSide = act.captionPosition === "side";

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl">
      {/* Fixed total height regardless of act, so the hero never grows or
          shrinks as the caption moves between "beside" and "above" the
          window — that's what was breaking the 100vh hero height. */}
      <div className="relative flex h-[440px] flex-col overflow-hidden rounded-[28px] bg-[#0A1024] p-4 shadow-2xl shadow-black/30 sm:h-[500px] sm:p-6">
        {/* Ambient glow, brand blue/violet, contained to this card only */}
        <div
          className="pointer-events-none absolute -inset-24 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 25% 15%, rgba(16,77,252,0.28), transparent 55%), radial-gradient(circle at 85% 85%, rgba(95,43,201,0.22), transparent 55%)",
          }}
          aria-hidden="true"
        />

        <div
          className={cn(
            "relative flex min-h-0 flex-1 gap-6",
            isSide ? "flex-col sm:flex-row sm:items-stretch" : "flex-col"
          )}
        >
          {/* Caption — "top" position gets a reserved, fixed height (rather
              than sizing to its own content) so it can never compete with
              the window for vertical space in this flex-col layout. Without
              this, any variance in the caption's rendered height (a font
              swap, sub-pixel text wrapping) would grow or shrink the window
              right after paint, reading as a jarring "settling" jump. */}
          <div
            className={cn(
              "flex shrink-0 flex-col justify-center",
              isSide ? "sm:w-[38%]" : "h-[108px] text-center"
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-[11px] font-semibold tracking-[0.15em] text-primary/80">
                  {act.label}
                </p>
                <h3
                  className={cn(
                    "text-balance font-display font-bold text-white",
                    isSide ? "mt-2 text-xl sm:text-2xl" : "mt-1.5 text-lg sm:text-xl"
                  )}
                >
                  {act.heading}
                </h3>
                <p
                  className={cn(
                    "text-sm text-white/55",
                    isSide ? "mt-2 max-w-xs sm:max-w-sm" : "mx-auto mt-1.5 max-w-sm"
                  )}
                >
                  {act.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* App window */}
          <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="flex shrink-0 items-center justify-between border-b border-neutral-200 px-4 py-2.5">
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full" style={{ background: "var(--brand-blue)" }} />
                <span className="size-2 rounded-full" style={{ background: "var(--brand-violet)" }} />
                <span className="size-2 rounded-full bg-black" />
                <Logo variant="icon" height={16} className="ml-2" />
              </div>
              <span className="hidden items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary sm:inline-flex">
                <span className="size-1.5 rounded-full bg-primary" /> Live
              </span>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                {act.id === "canvas" && <CanvasAct key="canvas" />}
                {act.id === "prompt" && <PromptAct key="prompt" />}
                {act.id === "plan" && <PlanAct key="plan" />}
                {act.id === "execute" && <ExecuteAct key="execute" />}
                {act.id === "docs" && <DocsAct key="docs" />}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dot pagination */}
        <div className="relative mt-5 flex shrink-0 items-center justify-center gap-1.5">
          {ACTS.map((a, i) => (
            <span
              key={a.id}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                i === actIndex ? "w-6 bg-primary" : "w-1.5 bg-white/20"
              )}
            />
          ))}
        </div>
      </div>

      <PixelTrail className="absolute -right-3 -top-3 w-9 opacity-90" />
      <PixelTrail className="absolute -bottom-3 -left-3 w-7 opacity-50" flip />
    </div>
  );
}

function ActShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center p-5 sm:p-7"
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
          className="mt-4 font-display text-sm font-semibold text-neutral-900"
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
        <div className="mt-5 grid grid-cols-2 gap-2">
          {nodeTypes.map((n, i) => (
            <motion.div
              key={n.label}
              custom={i + 3}
              variants={fade}
              initial="hidden"
              animate="show"
              className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-2 text-xs text-neutral-700"
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
      <div className="mx-auto flex w-full max-w-[300px] flex-col items-center text-center">
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
          className="mt-4 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-left"
        >
          <motion.span
            className="text-sm text-neutral-800"
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
          className="mt-4 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white"
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
      <div className="mx-auto flex w-full max-w-[320px] flex-col gap-3">
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-xs text-white"
        >
          Automate customer refund approvals
        </motion.div>
        {questions.map((item, i) => (
          <motion.div key={item.q} custom={i + 1} variants={fade} initial="hidden" animate="show">
            <p className="text-xs text-neutral-500">{item.q}</p>
            <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
              <Check className="size-3" /> {item.a}
            </span>
          </motion.div>
        ))}
        <motion.div
          custom={questions.length + 1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-1 w-fit rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white"
        >
          Submit answers
        </motion.div>
      </div>
    </ActShell>
  );
}

function ExecuteAct() {
  const steps = [
    { label: "Refund Request Received", icon: Inbox },
    { label: "Validate Order", icon: CheckCircle2 },
    { label: "Check Refund Policy", icon: FileText },
    { label: "Amount ≤ Threshold?", icon: GitBranch },
  ];
  return (
    <ActShell>
      <div className="mx-auto flex w-full max-w-[420px] flex-col items-center gap-2.5">
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fade}
              initial="hidden"
              animate="show"
              className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-[11px] font-medium text-neutral-700"
            >
              <s.icon className="size-3.5 text-primary" />
              {s.label}
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={steps.length}
          variants={fade}
          initial="hidden"
          animate="show"
          className="h-4 w-px bg-neutral-300"
        />

        <div className="flex items-center gap-2">
          <motion.div
            custom={steps.length + 1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[11px] font-medium text-emerald-700"
          >
            <CheckCircle2 className="size-3.5" /> Auto-approved
          </motion.div>
          <motion.div
            custom={steps.length + 2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1.5 text-[11px] font-medium text-amber-700"
          >
            <AlertTriangle className="size-3.5" /> Escalated to manager
          </motion.div>
        </div>

        <motion.div
          custom={steps.length + 3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="h-4 w-px bg-neutral-300"
        />

        <motion.div
          custom={steps.length + 4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-[11px] font-semibold text-white"
        >
          <Database className="size-3.5" /> Log to Finance System
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
      <div className="mx-auto grid w-full max-w-[440px] grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          {pipeline.map((name, i) => (
            <motion.div
              key={name}
              custom={i}
              variants={fade}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-2 text-[11px] font-medium text-neutral-700"
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
                  : "mt-2 text-[10px] text-neutral-500"
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
