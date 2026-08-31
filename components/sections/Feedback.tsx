import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

const cardMotion = [
  "md:-rotate-2 md:translate-y-0",
  "md:rotate-2 md:translate-y-8",
  "md:rotate-1 md:translate-y-4",
  "md:-rotate-1 md:translate-y-10",
];

export function Feedback() {
  return (
    <section id="feedback" className="relative scroll-mt-28 py-section-sm sm:py-section">
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

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-4 lg:gap-x-10">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              as="article"
              delay={i * 0.08}
              className={`flex min-h-[22rem] flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition duration-300 hover:z-10 hover:rotate-0 hover:-translate-y-1 hover:border-white/[0.14] sm:p-10 ${cardMotion[i % cardMotion.length]}`}
            >
              <p className="text-lg font-semibold tracking-[-0.02em] text-fg">{item.name}</p>
              <p className="mt-1 text-sm text-white/35">{item.title}</p>
              <p className="mt-5 text-base leading-relaxed text-white/55">{item.quote}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
