"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ArrowButton } from "@/components/ui/ArrowButton";
import type { Service } from "@/types";

function wrap(index: number, length: number) {
  return ((index % length) + length) % length;
}

export function ServiceSlider({ services }: { services: Service[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  indexRef.current = index;

  const goTo = useCallback(
    (next: number) => {
      const target = wrap(next, services.length);
      cardRefs.current[target]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    },
    [services.length],
  );

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const lead = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!lead) return;
        const next = cards.indexOf(lead.target as HTMLElement);
        if (next >= 0) setIndex(next);
      },
      { root: scroller, threshold: [0.45, 0.65, 0.85] },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [services.length]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onKey = (event: KeyboardEvent) => {
      const bounds = scroller.getBoundingClientRect();
      const inView = bounds.top < window.innerHeight && bounds.bottom > 0;
      if (!inView) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(indexRef.current + 1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(indexRef.current - 1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  return (
    <div className="mt-14">
      <div
        ref={scrollerRef}
        className="service-track"
        tabIndex={0}
        aria-label="Services carousel"
      >
        {services.map((service, i) => {
          const active = i === index;
          return (
            <article
              key={service.title}
              ref={(node) => {
                cardRefs.current[i] = node;
              }}
              className={`service-card ${active ? "is-active" : ""}`}
              aria-current={active ? "true" : undefined}
              onClick={() => goTo(i)}
            >
              <div className="service-card-inner">
                <p className="text-xs font-semibold tracking-[0.18em] text-faint uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 max-w-sm text-2xl font-semibold tracking-[-0.03em] sm:text-[2rem]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="shell mt-8 flex items-center justify-between gap-4">
        <p className="text-sm tabular-nums text-faint" aria-live="polite">
          {String(index + 1).padStart(2, "0")}
          <span className="mx-2 text-white/20">/</span>
          {String(services.length).padStart(2, "0")}
        </p>
        <div className="flex items-center">
          <ArrowButton direction="prev" label="Previous service" onClick={() => goTo(index - 1)} />
          <span aria-hidden="true" className="h-3 w-px bg-white/20" />
          <ArrowButton direction="next" label="Next service" onClick={() => goTo(index + 1)} />
        </div>
      </div>

      <div className="shell mt-6 h-px overflow-hidden bg-white/10" aria-hidden="true">
        <span
          className="block h-full bg-fg transition-[width] duration-500 ease-out"
          style={{ width: `${((index + 1) / services.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
