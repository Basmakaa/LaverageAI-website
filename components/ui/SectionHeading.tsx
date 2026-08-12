import type { ReactNode } from "react";

import { Reveal } from "@/components/animations/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Center the block instead of the default two-column split. */
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  if (centered) {
    return (
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title>{title}</Title>
        {description && <p className="mt-6 text-lg leading-relaxed text-muted">{description}</p>}
      </Reveal>
    );
  }

  return (
    <Reveal className="grid items-end gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title>{title}</Title>
      </div>
      {description && (
        <p className="max-w-lg text-base leading-relaxed text-muted md:justify-self-end">
          {description}
        </p>
      )}
    </Reveal>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">{children}</p>
  );
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-5 text-4xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
      {children}
    </h2>
  );
}
