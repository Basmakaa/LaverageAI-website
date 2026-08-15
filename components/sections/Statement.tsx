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
          Technology is at its best when it is{" "}
          <span className="text-white/45">invisible.</span>
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          AI should integrate naturally into how your team already works, subtracting
          complexity rather than adding another layer of it.
        </p>
        <p className="mt-8 text-sm font-semibold tracking-[0.14em] text-fg uppercase">
          Less friction. Better workflows. More impact.
        </p>
      </Reveal>
    </section>
  );
}
