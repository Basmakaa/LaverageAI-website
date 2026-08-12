import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/animations/Reveal";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden border-t border-line py-section-sm sm:py-section"
    >
      <div
        aria-hidden="true"
        className="glow-ellipse pointer-events-none absolute top-[-14rem] right-[-14rem] h-[32rem] w-[48rem]"
      />

      <div className="shell relative grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">Start here</p>
          <h2 className="mt-5 text-4xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
            Ready to make AI <span className="text-white/45">useful inside your business?</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Tell us where your team is losing time. We will help you identify the best place to
            start.
          </p>

          <dl className="mt-12 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">
                Email
              </dt>
              <dd className="mt-2">
                <a href={`mailto:${site.email}`} className="text-lg transition-colors hover:text-white/80">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">
                LinkedIn
              </dt>
              <dd className="mt-2">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg transition-colors hover:text-white/80"
                >
                  {site.name}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
