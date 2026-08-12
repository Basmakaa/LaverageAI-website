import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { ButtonLink } from "@/components/ui/Button";

const proofPoints = [
  ["Practical", "Built around your real workflows"],
  ["Human-first", "Designed for non-technical teams"],
  ["Tool-agnostic", "Claude, ChatGPT and your stack"],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* Decorative background layers. */}
      <div className="hero-grid animate-drift absolute inset-0" aria-hidden="true" />
      <div
        className="glow-ellipse animate-breathe pointer-events-none absolute top-[-12rem] left-1/2 h-[36rem] w-[min(75rem,140%)] -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="shell relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.16em] text-faint uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-fg shadow-[0_0_16px_rgba(255,255,255,0.8)]" />
            Practical AI for real businesses
          </p>

          <h1 className="mt-7 text-5xl leading-[0.95] font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-8xl">
            Helping businesses leverage AI{" "}
            <span className="text-white/45">with confidence.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Practical AI implementation, training and workshops for non-technical teams.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="#contact" className="w-full sm:w-auto">
              Book a Workshop
              <ArrowUpRight size={16} />
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary" className="w-full sm:w-auto">
              Learn More
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-24 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
        >
          {proofPoints.map(([title, detail]) => (
            <div key={title} className="bg-ink px-7 py-7">
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-2 text-sm text-faint">{detail}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
