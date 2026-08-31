import Image from "next/image";
import { cn } from "@/lib/utils";

const sources = {
  color: { src: "/logo/logo-color.svg", ratio: 1113 / 193 },
  light: { src: "/logo/logo-light.svg", ratio: 1102 / 182 },
  dark: { src: "/logo/logo-dark.svg", ratio: 1102 / 182 },
  icon: { src: "/logo/icon-color.svg", ratio: 340 / 182 },
} as const;

export function Logo({
  variant = "color",
  height,
  className,
}: {
  variant?: keyof typeof sources;
  /** Fixed pixel height (same size at every breakpoint). Omit this and size
   * via `className` (e.g. "h-6 sm:h-8") when the logo needs to be smaller
   * on mobile than desktop — an inline height style would always win over
   * responsive Tailwind classes, so the two approaches are mutually exclusive. */
  height?: number;
  className?: string;
}) {
  const { src, ratio } = sources[variant];
  const refHeight = height ?? 32;
  return (
    <Image
      src={src}
      alt="UX Core Technologies"
      width={Math.round(refHeight * ratio)}
      height={refHeight}
      className={cn(!height && "h-8 w-auto", className)}
      style={height ? { height, width: "auto" } : undefined}
      priority
    />
  );
}
