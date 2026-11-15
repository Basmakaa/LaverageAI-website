import Image from "next/image";

import { Reveal } from "@/components/animations/Reveal";
import { GalleryCarousel } from "@/components/ui/GalleryCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workshopPhotos, workshops } from "@/lib/content";

export function Workshops() {
  return (
    <section id="workshops" className="shell scroll-mt-28 py-section-sm sm:py-section">
      <SectionHeading
        eyebrow="Example of Workshops delivered"
        title={
          <>
            Built for people who are <span className="text-white/45">new to AI.</span>
          </>
        }
        description="Every session starts from the work your team already does. These are examples of teams we have already helped."
      />

      <div className="mt-16">
        {workshops.map((workshop, i) => (
          <Reveal
            key={workshop.title}
            as="article"
            delay={i * 0.06}
            className="group grid gap-8 border-t border-line py-12 transition-colors duration-300 hover:border-white/25 md:grid-cols-[auto_minmax(0,1fr)] md:items-start md:gap-12"
          >
            <div
              className="flex size-[4.5rem] shrink-0 items-center justify-center overflow-hidden border border-line transition duration-500 group-hover:border-white/30 sm:size-24"
              style={{
                padding: workshop.logoBox?.padding ?? "12px",
                background: workshop.logoBox?.background ?? "rgba(255,255,255,0.96)",
              }}
            >
              <Image
                src={workshop.logo}
                alt={workshop.logoAlt}
                width={workshop.logo.includes("einc") ? 256 : 844}
                height={workshop.logo.includes("einc") ? 256 : 770}
                quality={100}
                unoptimized
                className={
                  workshop.logoBox?.fit === "cover"
                    ? "h-full w-full object-cover"
                    : "h-auto w-auto max-h-full max-w-full object-contain"
                }
              />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-faint uppercase">
                {workshop.audience}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-balance sm:text-3xl">
                {workshop.title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                {workshop.description}
              </p>
              <p className="mt-6 text-sm text-faint">{workshop.topics.join(" / ")}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 border-t border-line pt-16">
        <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">From the room</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
          Real workshops, real teams
        </h3>
        <Reveal>
          <GalleryCarousel photos={workshopPhotos} />
        </Reveal>
      </div>
    </section>
  );
}
