"use client";

import { ArrowUpRight } from "lucide-react";
import { useId, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const fieldClass =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-fg transition-colors placeholder:text-white/25 focus:border-line-strong focus:outline-none";

const labelClass = "text-xs font-semibold tracking-[0.12em] text-faint uppercase";

type Enquiry = {
  name: string;
  email: string;
  company: string;
  message: string;
  website: string;
};

function formsubmitBody(enquiry: Enquiry) {
  return {
    name: enquiry.name,
    email: enquiry.email,
    company: enquiry.company,
    message: enquiry.message,
    _replyto: enquiry.email,
    _subject: `Website enquiry from ${enquiry.name}${enquiry.company ? ` (${enquiry.company})` : ""}`,
    _template: "table",
    _captcha: "false",
  };
}

function isDelivered(result: { success?: string | boolean; message?: string } | null) {
  if (!result) return false;
  if (result.success === true || result.success === "true") return true;
  return typeof result.message === "string" && result.message.toLowerCase().includes("activation");
}

async function sendEnquiry(enquiry: Enquiry) {
  if (enquiry.website) return true;

  try {
    const direct = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formsubmitBody(enquiry)),
    });
    const directPayload = (await direct.json().catch(() => null)) as {
      success?: string | boolean;
      message?: string;
    } | null;
    if (isDelivered(directPayload)) return true;
  } catch {
    // Fall through to the same-origin API if the browser blocks FormSubmit.
  }

  const fallback = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enquiry),
  });
  return fallback.ok;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const id = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setStatus("sending");
    setError("");

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
    };

    try {
      const delivered = await sendEnquiry(payload);
      if (!delivered) {
        throw new Error("We could not send your message.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "We could not send your message.");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="grid min-h-[28rem] content-center gap-4 rounded-2xl border border-line bg-card p-6 sm:p-8"
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">Message received</p>
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-balance sm:text-3xl">
          Sent. We will get back to you very soon.
        </h3>
        <p className="max-w-md text-base leading-relaxed text-muted">
          Thank you for writing in. We read every enquiry personally and typically reply within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-line bg-card p-6 sm:p-8"
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>

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

      <Button type="submit" disabled={status === "sending"} className="w-full sm:w-max">
        {status === "sending" ? "Sending…" : "Send Message"}
        {status !== "sending" && <ArrowUpRight size={16} />}
      </Button>

      <p aria-live="polite" className="text-xs text-faint">
        {error || `Prefer email? Reach us directly at ${site.email}`}
      </p>
    </form>
  );
}
