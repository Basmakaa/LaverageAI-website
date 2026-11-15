import type { ReactNode } from "react";

import { site } from "@/lib/site";

export function LegalDocument({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="shell scroll-mt-28 pt-32 pb-section-sm sm:pt-40 sm:pb-section">
      <p className="text-sm text-faint">Updated {site.policiesUpdated}</p>
      <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl">
        {title}
      </h1>
      <div className="legal-body mt-10 text-base leading-relaxed text-muted">{children}</div>
    </article>
  );
}
