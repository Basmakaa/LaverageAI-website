import { Parallax } from "@/components/animations/Parallax";
import { Reveal } from "@/components/animations/Reveal";

export function Statement() {
  return (
    <section className="relative overflow-hidden py-section-sm sm:py-section">
      <Parallax
        distance={90}
        className="pointer-events-none absolute inset-0 grid place-items-center"
      >
        <div
          aria-hidden="true"
          className="h-[34rem] w-[34rem] rounded-full border border-line"
        >
          <div className="m-14 h-[calc(100%-7rem)] rounded-full border border-line">
            <div className="m-14 h-[calc(100%-7rem)] rounded-full border border-line" />
          </div>
        </div>
      </Parallax>

      <Reveal className="shell relative text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-faint uppercase">
          The LaverageAI principle
        </p>
        <p className="mx-auto mt-8 max-w-4xl text-3xl leading-[1.08] font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
          AI should feel less like another technology project and more like{" "}
          <span className="text-white/45">a better way to work.</span>
        </p>
      </Reveal>
    </section>
  );
}
