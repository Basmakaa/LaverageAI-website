import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

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

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              as="article"
              delay={i * 0.1}
              className="flex h-full flex-col rounded-2xl border border-line bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-line-strong sm:p-10"
            >
              <p className="text-base font-semibold tracking-[-0.015em]">{item.name}</p>
              <p className="mt-1 text-sm text-faint">{item.title}</p>
              <p className="mt-7 text-base leading-relaxed text-muted">“{item.quote}”</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
