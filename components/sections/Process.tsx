import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="shell scroll-mt-28 py-section-sm sm:py-section">
      <SectionHeading
        eyebrow="Our process"
        title={
          <>
            Less AI theatre. <span className="text-white/45">More useful work.</span>
          </>
        }
        description="The goal is not to add more tools. It is to make your team more capable and your everyday work measurably easier."
      />

      <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <Reveal
            key={step.step}
            as="li"
            delay={i * 0.08}
            className="group relative bg-ink p-8 transition-colors duration-300 hover:bg-card lg:min-h-72"
          >
            <span className="text-xs font-semibold tracking-[0.16em] text-faint">{step.step}</span>
            <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em]">{step.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{step.description}</p>
            <span
              aria-hidden="true"
              className="absolute right-8 bottom-8 left-8 h-px origin-left scale-x-0 bg-white/50 transition-transform duration-500 group-hover:scale-x-100"
            />
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
