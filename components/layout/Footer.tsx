import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/content";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell py-16">
        <div className="flex flex-col gap-10 border-b border-line pb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Practical AI implementation, training and workshops for teams without a technical background.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-fg">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
