import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps a section in a light or dark "band". Because every component is
 * built on semantic tokens (bg-background, text-foreground, bg-surface,
 * border-border, text-muted, text-primary…), re-scoping those CSS variables
 * via `.tone-dark` and repainting background/foreground here is enough to
 * flip an entire section's theme — no per-section color logic needed.
 */
export function Band({
  tone = "light",
  className,
  style,
  children,
}: {
  tone?: "light" | "dark";
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div className={cn(tone === "dark" && "tone-dark", "bg-background text-foreground", className)} style={style}>
      {children}
    </div>
  );
}
