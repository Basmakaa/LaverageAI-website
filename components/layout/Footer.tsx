import { Logo } from "@/components/ui/Logo";
import { legalLinks, navLinks } from "@/lib/content";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell py-16">
        <div className="flex flex-col gap-10 border-b border-line pb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Practical AI implementation, training and workshops for teams without a technical
              background.
            </p>
            <p className="mt-4 text-sm text-faint">
              {site.legalName} is an incorporated company.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="link-underline pb-0.5 text-sm text-muted hover:text-fg">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} className="link-underline pb-0.5 hover:text-fg">
                {link.label}
              </a>
            ))}
            <a href={`mailto:${site.email}`} className="link-underline pb-0.5 hover:text-fg">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
