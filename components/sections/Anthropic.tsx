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
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="relative h-[7.5rem] w-[12.5rem] overflow-hidden rounded-2xl sm:h-[8.75rem] sm:w-[14.5rem]">
            <Image
              src="/logos/anthropic.png"
              alt="Anthropic"
              fill
              quality={100}
              unoptimized
              className="object-cover"
              sizes="(min-width: 640px) 232px, 200px"
            />
          </div>

          <p className="mt-10 text-xs font-semibold tracking-[0.18em] text-faint uppercase">
            Trusted expertise
          </p>
          <h2 className="mt-4 text-3xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
            Selected by <span className="text-white/40">Anthropic</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            LaverageAI was selected for Anthropic’s 2026 Claude SMB Trainer Program in New York
            City, receiving direct training to help businesses adopt Claude, improve workflows,
            increase productivity, and implement AI responsibly.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
