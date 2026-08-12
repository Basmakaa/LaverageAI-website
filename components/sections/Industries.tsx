import { industries } from "@/lib/content";

export function Industries() {
  // Duplicated so the marquee loops seamlessly at -50%.
  const track = [...industries, ...industries];

  return (
    <section
      aria-label="Teams we support"
      className="overflow-hidden border-y border-line bg-surface"
    >
      <div className="animate-marquee flex w-max items-center">
        {track.map((industry, i) => (
          <span
            key={`${industry}-${i}`}
            className="flex items-center px-8 py-6 text-xs font-semibold tracking-[0.18em] text-faint uppercase"
          >
            {industry}
            <span aria-hidden="true" className="ml-16 text-white/15">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
