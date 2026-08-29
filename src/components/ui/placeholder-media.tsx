import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Stand-in for real graphics/photography until the design team delivers final assets.
 * Swap usages of this component for <Image /> once real files land in /public.
 */
export function PlaceholderMedia({
  label,
  ratio = "aspect-[4/3]",
  className,
  gradient = "from-primary/20 via-surface-2 to-accent/10",
}: {
  label?: string;
  ratio?: string;
  className?: string;
  gradient?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br",
        gradient,
        ratio,
        className
      )}
    >
      <div
        className="absolute inset-0 bg-[length:16px_16px]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, transparent 48%, color-mix(in srgb, var(--foreground) 6%, transparent) 49%, color-mix(in srgb, var(--foreground) 6%, transparent) 51%, transparent 52%)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-muted-2">
        <ImageIcon className="size-6" strokeWidth={1.5} />
        {label && <span className="px-4 text-center text-xs font-medium">{label}</span>}
      </div>
    </div>
  );
}
