"use client";

import Script from "next/script";

import { site } from "@/lib/site";

const embedUrl = `${site.calendar}?hide_gdpr_banner=1&background_color=111111&text_color=ffffff&primary_color=ffffff`;

export function CalendlyEmbed() {
  return (
    <>
      <div
        className="calendly-inline-widget min-h-[720px] overflow-hidden rounded-2xl border border-line bg-card"
        data-url={embedUrl}
        style={{ minWidth: "320px", height: "720px" }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  );
}
