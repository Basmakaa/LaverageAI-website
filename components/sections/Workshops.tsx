import Image from "next/image";

import { Reveal } from "@/components/animations/Reveal";
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

      <div className="mt-16 grid gap-5 lg:grid-cols-2">
        {workshops.map((workshop, i) => (
          <Reveal
            key={workshop.title}
            as="article"
            delay={i * 0.1}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition duration-300 hover:-translate-y-1 hover:border-line-strong"
          >
            <div className="flex items-center justify-between gap-4 border-b border-line bg-gradient-to-br from-white/[0.05] to-transparent px-6 py-6 sm:px-8">
              <div className="flex h-20 items-center rounded-xl border border-white/12 bg-black/50 px-5 py-3">
                <Image
                  src={workshop.logo}
                  alt={workshop.logoAlt}
                  width={220}
                  height={80}
                  className="h-14 w-auto max-w-[13rem] object-contain object-left"
                />
              </div>
              <span className="text-xs font-semibold tracking-[0.16em] text-white/25">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">
                {workshop.audience}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-balance sm:text-3xl">
                {workshop.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">{workshop.description}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {workshop.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-line px-3.5 py-1.5 text-xs text-muted transition-colors group-hover:border-line-strong"
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
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {workshopPhotos.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={(i % 4) * 0.05}
              className="overflow-hidden rounded-2xl border border-line bg-card"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={682}
                height={1024}
                className="aspect-[3/4] h-full w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
