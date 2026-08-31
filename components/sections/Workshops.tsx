import Image from "next/image";

import { Reveal } from "@/components/animations/Reveal";
import { GalleryCarousel } from "@/components/ui/GalleryCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workshopPhotos, workshops } from "@/lib/content";

export function Workshops() {
  return (
    <section id="workshops" className="shell scroll-mt-28 py-section-sm sm:py-section">
      <SectionHeading
        eyebrow="Workshops delivered"
        title={
          <>
            Built for people who are <span className="text-white/45">new to AI.</span>
          </>
        }
        description="Every session starts from the work your team already does. These are examples of teams we have already helped."
      />

      <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-2">
        {workshops.map((workshop, i) => (
          <Reveal
            key={workshop.title}
            as="article"
            delay={i * 0.1}
            className="group flex h-full flex-col rounded-[1.75rem] border border-white/12 p-[clamp(1.75rem,4vw,3rem)] shadow-[0_24px_60px_rgba(0,0,0,0.35)] transition duration-[350ms] [background:linear-gradient(145deg,#171717_0%,#0a0a0a_48%,#080808_100%)] hover:-translate-y-1.5 hover:border-white/20 motion-reduce:hover:translate-y-0"
          >
            <header className="flex items-center gap-[1.125rem] max-[380px]:flex-col max-[380px]:items-start sm:gap-6">
              <div
                className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/12 transition duration-[350ms] group-hover:scale-[1.02] motion-reduce:group-hover:scale-100 sm:size-[72px]"
                style={{
                  padding: workshop.logoBox?.padding ?? "12px",
                  background: workshop.logoBox?.background ?? "rgba(255,255,255,0.96)",
                }}
              >
                <Image
                  src={workshop.logo}
                  alt={workshop.logoAlt}
                  width={workshop.logo.includes("einc") ? 256 : 1024}
                  height={workshop.logo.includes("einc") ? 256 : 502}
                  quality={100}
                  unoptimized
                  className="h-auto w-auto max-h-full max-w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.18em] text-faint uppercase">
                  {workshop.audience}
                </p>
                <h3 className="mt-1.5 text-2xl font-semibold tracking-[-0.03em] text-balance sm:text-3xl">
                  {workshop.title}
                </h3>
              </div>
            </header>

            <p className="mt-6 flex-1 text-base leading-relaxed text-muted">
              {workshop.description}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {workshop.topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs tracking-[0.02em] text-white/50 transition-colors duration-[350ms] group-hover:border-white/20"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">From the room</p>
        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
          Real workshops, real teams
        </h3>
        <Reveal>
          <GalleryCarousel photos={workshopPhotos} />
        </Reveal>
      </div>
    </section>
  );
}
