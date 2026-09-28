"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroProductDemo } from "@/components/sections/hero-product-demo";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-x-clip pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pb-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <Container className="grid w-full max-w-[1200px] grid-cols-1 items-center gap-20 px-6 sm:gap-24 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:px-8 xl:max-w-[1220px] 2xl:max-w-[1464px]">
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
          className="relative z-0 mx-auto mt-4 w-full flex justify-center lg:mt-0"
        >
          <HeroProductDemo />
        </motion.div>
      </Container>
    </section>
  );
}
