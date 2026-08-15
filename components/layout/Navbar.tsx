"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
      className={`fixed top-4 left-1/2 z-50 w-[min(80rem,calc(100%-1.5rem))] -translate-x-1/2 rounded-2xl border px-4 transition duration-300 sm:px-5 ${
        // The open menu needs an opaque backdrop even at scroll position 0,
        // otherwise the hero shows through the panel.
        scrolled || open
          ? "border-line bg-black/85 shadow-[0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between gap-6">
        <a href="#top" aria-label="LaverageAI home" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
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

        {/* Wrapper carries the responsive display: ButtonLink's own `inline-flex`
            is emitted after `.hidden`, so `hidden` on the button itself loses. */}
        <div className="hidden lg:block">
          <ButtonLink href="#calendar" className="px-5 py-2.5">
            Book a Free Discovery Call
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg p-2 text-fg lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden lg:hidden"
          >
            <nav aria-label="Mobile" className="grid gap-1 pt-2 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-card px-4 py-3 text-sm text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              ))}
              <ButtonLink href="#calendar" onClick={() => setOpen(false)} className="mt-2 w-full">
                Book a Free Discovery Call
              </ButtonLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
