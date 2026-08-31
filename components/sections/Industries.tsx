import { industries } from "@/lib/content";

export function Industries() {
  // Duplicated so the marquee loops seamlessly at -50%.
  const track = [...industries, ...industries];

  return (
    <section aria-label="Departments we have helped" className="overflow-hidden border-y border-line bg-surface">
      <p className="shell pt-8 text-center text-xs font-semibold tracking-[0.16em] text-faint uppercase">
        We help
      </p>
      <div className="animate-marquee flex w-max items-center">
        {track.map((industry, i) => (
          <span
            key={`${industry}-${i}`}
            className="flex items-center px-8 py-5 text-xs font-semibold tracking-[0.18em] text-faint uppercase"
          >
            {industry}
            <span aria-hidden="true" className="ml-16 h-px w-8 bg-white/18" />
          </span>
        ))}
      </div>
    </section>
  );
}
