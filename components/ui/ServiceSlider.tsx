"use client";

import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import type { Service } from "@/types";

function wrap(index: number, length: number) {
  return ((index % length) + length) % length;
}

export function ServiceSlider({ services }: { services: Service[] }) {
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const x = useMotionValue(0);
  const indexRef = useRef(0);
  indexRef.current = index;

  const panelWidth = viewportWidth ? Math.min(viewportWidth * 0.86, 560) : 0;
  const gap = 24;
  const step = panelWidth + gap;

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => setViewportWidth(viewport.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    x.set(-indexRef.current * step);
  }, [step, x]);

  const goTo = useCallback(
    (next: number) => {
      const target = wrap(next, services.length);
      setIndex(target);
      if (!step) return;
      const destination = -target * step;
      if (reduceMotion) {
        x.set(destination);
        return;
      }
      void animate(x, destination, {
        type: "tween",
        duration: 0.45,
        ease: [0.22, 0.75, 0.2, 1],
      });
    },
    [reduceMotion, services.length, step, x],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goTo(indexRef.current + 1);
      if (event.key === "ArrowLeft") goTo(indexRef.current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  return (
    <div className="mt-16">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm text-faint" aria-live="polite">
          {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous service"
            className="border border-line px-4 py-2 text-sm text-muted transition duration-300 hover:border-fg hover:text-fg"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next service"
            className="border border-line px-4 py-2 text-sm text-muted transition duration-300 hover:border-fg hover:text-fg"
          >
            Next
          </button>
        </div>
      </div>

      <div ref={viewportRef} className="service-slider overflow-hidden">
        <motion.div
          className="flex cursor-grab touch-pan-y active:cursor-grabbing"
          style={{ x, gap }}
          drag="x"
          dragConstraints={{
            left: -Math.max(0, (services.length - 1) * step),
            right: 0,
          }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            const threshold = Math.min(80, step * 0.18);
            if (info.offset.x < -threshold || info.velocity.x < -400) {
              goTo(index + 1);
              return;
            }
            if (info.offset.x > threshold || info.velocity.x > 400) {
              goTo(index - 1);
              return;
            }
            goTo(index);
          }}
        >
          {services.map((service, i) => (
            <article
              key={service.title}
              className="relative shrink-0 overflow-hidden border border-line px-7 py-10 transition-[border-color] duration-300 hover:border-white/35 sm:px-10 sm:py-12"
              style={{ width: panelWidth || "min(86vw, 560px)", minHeight: 280 }}
              aria-current={i === index ? "true" : undefined}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 right-4 text-[7rem] leading-none font-semibold tracking-[-0.08em] text-white/[0.06] select-none"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="relative text-xs font-semibold tracking-[0.16em] text-faint uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="relative mt-8 max-w-sm text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                {service.title}
              </h3>
              <p className="relative mt-4 max-w-md text-base leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3" role="tablist" aria-label="Services">
        {services.map((service, i) => (
          <button
            key={service.title}
            type="button"
            role="tab"
            aria-selected={i === index}
            onClick={() => goTo(i)}
            className={`text-left text-sm transition-colors duration-300 ${i === index ? "text-fg" : "text-faint hover:text-fg"}`}
          >
            {service.title}
          </button>
        ))}
      </div>
    </div>
  );
}
