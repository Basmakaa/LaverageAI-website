import { Reveal } from "@/components/animations/Reveal";
import { ProcessTrack } from "@/components/sections/ProcessTrack";
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

      <ProcessTrack>
        {processSteps.map((step, i) => (
          <Reveal
            key={step.step}
            as="li"
            delay={i * 0.06}
            className="group relative pb-14 last:pb-0"
          >
            <div className="grid grid-cols-[2.3rem_1fr] items-start gap-5 sm:grid-cols-[3.3rem_1fr] sm:gap-8">
              <span className="relative z-10 grid size-9 place-items-center bg-ink text-sm font-semibold text-faint transition-colors duration-300 group-hover:text-fg sm:size-11 sm:text-base">
                {step.step}
              </span>
              <div className="pt-1">
                <h3 className="text-3xl font-semibold tracking-[-0.03em] transition-colors duration-300 group-hover:text-white sm:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted transition-colors duration-300 group-hover:text-white/80">
                  {step.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ProcessTrack>
    </section>
  );
}
