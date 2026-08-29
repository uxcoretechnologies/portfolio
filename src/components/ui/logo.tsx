import Image from "next/image";

const sources = {
  color: { src: "/logo/logo-color.svg", ratio: 1113 / 193 },
  light: { src: "/logo/logo-light.svg", ratio: 1102 / 182 },
  dark: { src: "/logo/logo-dark.svg", ratio: 1102 / 182 },
} as const;

export function Logo({
  variant = "color",
  height = 28,
  className,
}: {
  variant?: keyof typeof sources;
  height?: number;
  className?: string;
}) {
  const { src, ratio } = sources[variant];
  return (
    <Image
      src={src}
      alt="UX Core Technologies"
      width={Math.round(height * ratio)}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
      priority
    />
  );
}
