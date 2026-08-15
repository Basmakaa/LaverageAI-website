import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="shell scroll-mt-28 py-section-sm sm:py-section">
      <SectionHeading
        eyebrow="What we do"
        title={
          <>
            From AI interest to <span className="text-white/45">AI enabled.</span>
          </>
        }
        description="We combine strategy, training and implementation, so your team does not leave a workshop inspired and then return to the same way of working."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal
              key={service.title}
              as="article"
              delay={(i % 4) * 0.06}
              className="group h-full rounded-2xl border border-line bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-line-strong hover:bg-surface"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-fg transition-colors duration-300 group-hover:border-line-strong group-hover:bg-white/[0.07]">
                <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-[-0.015em]">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
