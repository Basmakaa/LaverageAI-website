import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-ink px-6 py-3.5 hover:bg-white/90",
  secondary:
    "border border-line bg-white/[0.03] px-6 py-3.5 text-fg hover:border-line-strong hover:bg-white/[0.06]",
  ghost: "px-2 py-2 text-muted hover:text-fg",
};

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className ?? ""}`} {...props}>
      {children}
    </a>
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  children: ReactNode;
};

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
}
