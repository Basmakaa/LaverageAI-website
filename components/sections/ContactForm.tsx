"use client";

import { ArrowUpRight } from "lucide-react";
import { useId, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const fieldClass =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-fg transition-colors placeholder:text-white/25 focus:border-line-strong focus:outline-none";

const labelClass = "text-xs font-semibold tracking-[0.12em] text-faint uppercase";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const id = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Workshop enquiry — ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-line bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor={`${id}-name`} className={labelClass}>
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={fieldClass}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor={`${id}-company`} className={labelClass}>
            Company
          </label>
          <input
            id={`${id}-company`}
            name="company"
            autoComplete="organization"
            placeholder="Acme Inc."
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor={`${id}-email`} className={labelClass}>
          Email
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@company.com"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor={`${id}-message`} className={labelClass}>
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={4}
          placeholder="Tell us where your team is losing time, or what you would like to make easier."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <Button type="submit" className="w-full sm:w-max">
        Book a Workshop
        <ArrowUpRight size={16} />
      </Button>

      <p aria-live="polite" className="text-xs text-faint">
        {sent
          ? "Your email app should now be open with the message ready to send."
          : `Prefer email? Reach us directly at ${site.email}`}
      </p>
    </form>
  );
}
