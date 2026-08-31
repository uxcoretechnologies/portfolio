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

      <Container className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted"
          >
            Empowering Growth. Enabling Innovation.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            Design-led software for{" "}
            <span className="text-gradient">ambitious companies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-lg text-balance text-base text-muted sm:text-lg"
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
        >
          <HeroProductDemo />
        </motion.div>
      </Container>
    </section>
  );
}
