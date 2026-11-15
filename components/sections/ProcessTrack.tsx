"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function ProcessTrack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.55"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = useSpring(raw, { stiffness: 90, damping: 24, restDelta: 0.001 });

  return (
    <ol ref={ref} className="relative mt-20 max-w-3xl pl-2 sm:pl-0">
      <span
        aria-hidden="true"
        className="absolute top-3 bottom-3 left-[1.15rem] w-px bg-line sm:left-[1.65rem]"
      />
      {reduceMotion ? null : (
        <motion.span
          aria-hidden="true"
          className="absolute top-3 bottom-3 left-[1.15rem] w-px origin-top bg-fg sm:left-[1.65rem]"
          style={{ scaleY }}
        />
      )}
      {children}
    </ol>
  );
}
