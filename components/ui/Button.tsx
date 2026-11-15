import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm text-sm font-medium transition duration-300 ease-out hover:scale-[1.03] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-ink px-6 py-3.5 hover:bg-white",
  secondary: "border border-line-strong px-6 py-3.5 text-fg hover:border-fg hover:bg-white/[0.06]",
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
