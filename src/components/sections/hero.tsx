"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroProductDemo } from "@/components/sections/hero-product-demo";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <Container className="grid w-full max-w-[1660px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base text-muted"
          >
            Empowering Growth. Enabling Innovation.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.75rem]"
          >
            Design-led software
            <br />
            for{" "}
            <span className="bg-[linear-gradient(128deg,#7597f8_0%,#5c29c4_63%)] bg-clip-text text-transparent">
              ambitious
              <br />
              companies
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-lg text-balance text-lg text-muted sm:text-xl"
          >
            UX Core Technologies designs and builds digital products, AI agents,
            and enterprise platforms — engineered with research-backed UX at the
            core, not bolted on at the end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact" size="lg">
              Start Your Project <ArrowUpRight className="size-4" />
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              See Our Work
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-0 mx-auto w-full max-w-xl lg:max-w-2xl"
        >
          {/* Decorative background + doodle annotations from the Figma hero —
              purely cosmetic, layered behind/around the coded product demo,
              which stays untouched. Positions are percentages of the card's
              own box (computed from the Figma frame's geometry) so they stay
              proportionally placed at any card size. Hidden below lg to avoid
              crowding the card on narrower layouts where it has no room to
              breathe. */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -z-10 hidden lg:block"
            style={{ left: "-5%", top: "-23%", width: "121%", height: "134%" }}
            viewBox="0 0 843 601"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Figma's exact colors (#EDF4FF → #EFEDF3) read as almost pure
                white and are invisible against our white page background —
                deepened slightly here, same hue family, so the shape actually
                shows up while staying a soft ambient wash. */}
            <path
              d="M48.6335 48.0727C205 -110.01 366.778 174.073 505.607 154.61C624.479 137.927 761.866 53.6335 824.339 169.486C879.003 270.51 809.588 414.168 668.157 514.264C552.494 671.739 315.879 576.362 177.918 518.898C41.6921 462.362 -17.3101 336.314 4.38185 215.827C11.0139 178.99 13.6004 83.4902 48.6335 48.0727Z"
              fill="url(#heroDecorGradient)"
            />
            <defs>
              <linearGradient
                id="heroDecorGradient"
                x1="-4.78914e-05"
                y1="12.5205"
                x2="515.776"
                y2="789.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D9E6FF" />
                <stop offset="1" stopColor="#E6E0F3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Horizontal offsets below are fixed (rem), not percentages of the
              card — a percentage-based overhang grows with the card's width
              and was pushing "Smarter together" etc. past the viewport edge
              on common laptop widths, getting clipped. A small fixed overhang
              stays safely within the section's own side padding regardless
              of card size. */}
          <img
            src="/images/home/hero-idea-decor.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute z-10 hidden w-20 lg:block"
            style={{ left: "-3.25rem", top: "-18%" }}
          />
          <img
            src="/images/home/hero-analytics-icon.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-0 z-10 hidden w-16 translate-x-1/2 -translate-y-1/2 lg:block"
            style={{ top: "33%",right:"-7.5%" }}
          />

          {/* "From idea to impact" — arc, arrowhead, and both lines of text
              combined into a single exported unit (matching the Figma
              grouping) instead of three separately-positioned pieces, so the
              arrow and caption can never drift out of alignment. */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute z-10 hidden w-28 overflow-visible lg:block"
            style={{ left: "-12rem", top: "43%" }}
            viewBox="0 0 107 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(0 -14)">
              <path
                d="M7.36652 89.5643C17.3665 48.5643 59 20 96 6"
                stroke="#1557FF"
                strokeWidth="2"
                strokeDasharray="7 6"
              />
              <path d="M89.34 2.5L102.34 3L97.34 13.5" stroke="#1557FF" strokeWidth="2" />
            </g>
            <g transform="rotate(-6 47 110)">
              <text x="0" y="94" dominantBaseline="hanging" fontFamily="var(--font-handwritten)" fontSize="26" fill="#5937e8">
                From idea
              </text>
              <text x="0" y="121" dominantBaseline="hanging" fontFamily="var(--font-handwritten)" fontSize="26" fill="#5937e8">
                to impact
              </text>
            </g>
          </svg>

          {/* "Smarter together" — same idea, exported as the single group
              Figma already had it in (arc + arrowhead + two text lines). */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute z-10 hidden w-36 lg:block"
            style={{ right: "-10.5rem", top: "61%" }}
            viewBox="0 0 148 164"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.503871 122C48.5039 94 72.5039 48 72.5039 0"
              stroke="#1557FF"
              strokeWidth="2"
              strokeDasharray="7 6"
            />
            <path d="M64.832 13.7307L72.832 1.73072L81.832 13.7307" stroke="#1557FF" strokeWidth="2" />
            <g transform="rotate(-6 105 128)" textAnchor="end">
              <text x="143" y="110" dominantBaseline="hanging" fontFamily="var(--font-handwritten)" fontSize="26" fill="#5937e8">
                Smarter
              </text>
              <text x="147" y="136" dominantBaseline="hanging" fontFamily="var(--font-handwritten)" fontSize="26" fill="#5937e8">
                together
              </text>
            </g>
          </svg>

          <HeroProductDemo />
        </motion.div>
      </Container>
    </section>
  );
}
