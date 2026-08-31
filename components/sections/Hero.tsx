import { HeroWave } from "@/components/animations/HeroWave";
import { Reveal } from "@/components/animations/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="hero-grid animate-drift absolute inset-0" aria-hidden="true" />
      <HeroWave />

      <div className="shell relative z-10">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl leading-[0.95] font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-8xl">
            Helping businesses leverage AI{" "}
            <span className="text-white/45">with confidence.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Practical AI implementation, training and workshops for teams without a technical background.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="#calendar" className="w-full sm:w-auto">
              Book a Free Discovery Call
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" className="w-full sm:w-auto">
              Contact Us
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
