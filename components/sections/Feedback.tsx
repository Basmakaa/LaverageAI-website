import { Star } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Feedback() {
  return (
    <section id="feedback" className="relative scroll-mt-28 overflow-hidden py-section-sm sm:py-section">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="shell relative">
        <SectionHeading
          eyebrow="Customer feedback"
          title={
            <>
              Trusted by the teams <span className="text-white/45">we already train.</span>
            </>
          }
          description="Workshops and implementation, in their words. These are people who have sat in the room with us."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              as="article"
              delay={i * 0.1}
              className="flex h-full flex-col rounded-2xl border border-line bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-line-strong sm:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-xs font-semibold tracking-[0.08em]">
                    {initials(item.name)}
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-[-0.015em]">{item.name}</p>
                    <p className="mt-0.5 text-sm text-faint">{item.title}</p>
                  </div>
                </div>
                <p className="flex shrink-0 gap-0.5 text-fg" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }, (_, star) => (
                    <Star key={star} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </p>
              </div>

              <p className="mt-7 text-base leading-relaxed text-muted">“{item.quote}”</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
