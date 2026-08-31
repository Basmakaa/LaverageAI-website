import Image from "next/image";

import { Reveal } from "@/components/animations/Reveal";

export function Anthropic() {
  return (
    <section
      aria-label="Selected by Anthropic"
      className="relative overflow-hidden border-y border-line py-16 sm:py-20"
    >
      <p
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] leading-none font-semibold tracking-[-0.07em] text-white/[0.028] select-none"
      >
        ANTHROPIC
      </p>

      <Reveal className="shell relative">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex shrink-0 items-center gap-6">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/10 bg-black sm:h-[4.5rem] sm:w-[4.5rem]">
              <Image
                src="/logos/anthropic.png"
                alt="Anthropic"
                fill
                className="object-cover object-[18%_center] grayscale contrast-125 brightness-90 opacity-70"
                sizes="72px"
              />
            </div>
            <span aria-hidden="true" className="hidden h-16 w-px bg-white/12 lg:block" />
          </div>

          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-faint uppercase">
              Trusted expertise
            </p>
            <h2 className="mt-4 text-3xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
              Selected by <span className="text-white/40">Anthropic</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              LaverageAI was selected for Anthropic’s 2026 Claude SMB Trainer Program in New York
              City, receiving direct training to help businesses adopt Claude, improve workflows,
              increase productivity, and implement AI responsibly.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
