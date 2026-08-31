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

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {workshops.map((workshop, i) => (
          <Reveal
            key={workshop.title}
            as="article"
            delay={i * 0.1}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#161412] to-[#0c0c0c] transition duration-500 hover:-translate-y-1 hover:border-white/[0.16]"
          >
            <div className="flex min-h-[11rem] items-center justify-center bg-[#f4efe6] px-10 py-12">
              <Image
                src={workshop.logo}
                alt={workshop.logoAlt}
                width={workshop.logo.includes("einc") ? 256 : 1024}
                height={workshop.logo.includes("einc") ? 256 : 502}
                quality={100}
                unoptimized
                className={
                  workshop.logo.includes("einc")
                    ? "h-20 w-20 rounded-md object-cover object-left"
                    : "h-[4.75rem] w-auto max-w-[16rem] object-contain"
                }
              />
            </div>

            <div className="flex flex-1 flex-col px-8 py-9 sm:px-10 sm:py-10">
              <p className="text-xs font-semibold tracking-[0.18em] text-faint uppercase">
                {workshop.audience}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-balance sm:text-3xl">
                {workshop.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted">{workshop.description}</p>
              <ul className="mt-9 flex flex-wrap gap-2">
                {workshop.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-white/[0.1] px-3.5 py-1.5 text-xs tracking-[0.02em] text-white/50 transition-colors group-hover:border-white/[0.18]"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
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
