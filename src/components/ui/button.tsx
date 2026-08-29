import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  // Uses the tone-stable `brand` token (not `primary`, which retints per
  // section) so the CTA stays a consistent, vivid blue on light or dark bands.
  primary:
    "bg-brand text-white hover:bg-brand/90 shadow-[0_1px_2px_rgba(15,17,23,0.04),0_10px_24px_-10px_rgba(16,77,252,0.5)]",
  secondary:
    "bg-surface-2 text-foreground border border-border-strong hover:border-primary/60 hover:bg-surface-2/80",
  ghost: "text-foreground hover:text-primary bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-7 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap cursor-pointer";

type StyleProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = StyleProps & {
  href: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">;

type ButtonAsButton = StyleProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

function isLinkProps(props: ButtonAsLink | ButtonAsButton): props is ButtonAsLink {
  return "href" in props && typeof props.href === "string";
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (isLinkProps(props)) {
    const { href, children, variant: _variant, size: _size, className: _className, ...rest } = props;
    void _variant;
    void _size;
    void _className;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _variant, size: _size, className: _className, ...rest } = props;
  void _variant;
  void _size;
  void _className;
  return (
    <button className={classes} {...rest}>
      {props.children}
    </button>
  );
}
