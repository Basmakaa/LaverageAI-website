import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceSlider } from "@/components/ui/ServiceSlider";
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

      <Reveal>
        <ServiceSlider services={services} />
      </Reveal>
    </section>
  );
}
