import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceSlider } from "@/components/ui/ServiceSlider";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 overflow-x-clip py-section-sm sm:py-section">
      <div className="shell">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              From AI interest to <span className="text-white/45">AI enabled.</span>
            </>
          }
          description="We combine strategy, training and implementation, so your team does not leave a workshop inspired and then return to the same way of working."
        />
      </div>

      <ServiceSlider services={services} />
    </section>
  );
}
