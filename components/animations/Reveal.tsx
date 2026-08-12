"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in seconds, for revealing a row of items in sequence. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

/**
 * Fade + slide-up on first scroll into view. Motion is skipped entirely when the
 * visitor prefers reduced motion, rather than merely shortened.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.75, 0.2, 1] }}
    >
      {children}
    </Component>
  );
}
