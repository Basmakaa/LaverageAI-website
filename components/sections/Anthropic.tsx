import Image from "next/image";

import { Reveal } from "@/components/animations/Reveal";

export function Anthropic() {
  return (
    <section aria-label="Selected by Anthropic" className="shell pb-16 sm:pb-20">
      <Reveal className="grid overflow-hidden rounded-2xl border border-line bg-card lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-56 bg-[#d27d5f] lg:min-h-[22rem]">
          <Image
            src="/logos/anthropic.png"
            alt="Anthropic"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">
            Recognition
          </p>
          <h2 className="mt-5 text-3xl leading-[1.05] font-semibold tracking-[-0.04em] text-balance sm:text-4xl lg:text-5xl">
            Selected by Anthropic
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            LaverageAI was selected for Anthropic’s 2026 Claude SMB Trainer Program in New York
            City. We received direct training on how to help businesses adopt Claude, improve
            workflows, increase productivity, and implement AI responsibly.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
