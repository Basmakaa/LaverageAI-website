"use client";

import { useState } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useScrolled } from "@/hooks/useScrolled";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-ink ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="shell flex h-[4.25rem] items-center justify-between gap-6">
        <a href="/" aria-label="LaverageAI home" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="link-underline pb-0.5 text-sm text-muted hover:text-fg">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/#calendar" className="px-5 py-2.5">
            Book a Free Discovery Call
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center text-fg lg:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-px bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-ink lg:hidden">
          <nav aria-label="Mobile" className="shell grid gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-1 py-3 text-sm text-muted hover:text-fg"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink href="/#calendar" onClick={() => setOpen(false)} className="mt-3 w-full">
              Book a Free Discovery Call
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
