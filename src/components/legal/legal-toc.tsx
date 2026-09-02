"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { LegalSection } from "./legal-layout";

export function LegalToc({ sections }: { sections: LegalSection[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Table of contents" className="hidden lg:block">
      <div className="sticky top-24 flex flex-col gap-0.5">
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-2">
          Contents
        </p>
        {sections.map((s, i) => {
          const isActive = s.id === activeId;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors hover:bg-surface hover:text-foreground",
                isActive ? "bg-surface font-medium text-foreground" : "text-muted",
              )}
            >
              {i + 1}. {s.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
