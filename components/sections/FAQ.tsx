"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="shell scroll-mt-28 py-section-sm sm:py-section">
      <SectionHeading
        eyebrow="Questions, answered"
        title={
          <>
            AI adoption can feel unclear. <span className="text-white/45">We make it simpler.</span>
          </>
        }
        description="Start small, focus on real work, and build capability one useful workflow at a time."
      />

      <div className="mt-16 border-t border-line">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          const panelId = `${baseId}-panel-${i}`;
          const buttonId = `${baseId}-button-${i}`;

          return (
            <div key={faq.question} className="border-b border-line">
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-8 py-6 text-left text-lg font-medium tracking-[-0.02em] transition-colors hover:text-white/80 sm:text-xl"
                >
                  {faq.question}
                  <span className="shrink-0 text-faint" aria-hidden="true">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="panel"
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 0.75, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-3xl pb-7 text-base leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
