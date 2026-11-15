import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

export function Feedback() {
  return (
    <section id="feedback" className="scroll-mt-28 py-section-sm sm:py-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Customer feedback"
          title={
            <>
              Trusted by the teams <span className="text-white/45">we already train.</span>
            </>
          }
          description="Workshops and implementation, in their words. These are people who have sat in the room with us."
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} as="blockquote" delay={i * 0.05} className="group relative">
              <span
                aria-hidden="true"
                className="absolute -top-8 left-0 text-7xl leading-none font-semibold text-white/10 transition-colors duration-500 group-hover:text-white/25 select-none"
              >
                “
              </span>
              <p className="relative text-lg leading-relaxed text-muted">{item.quote}</p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="block font-medium text-fg">{item.name}</span>
                  <span className="mt-1 block text-sm text-faint">{item.title}</span>
                </cite>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
