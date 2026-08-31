import { NextResponse } from "next/server";

import { site } from "@/lib/site";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Treat as success so they get no signal.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const origin = request.headers.get("origin") || site.url;

  const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: origin,
      Referer: `${origin}/`,
    },
    body: JSON.stringify({
      name,
      email,
      company,
      message,
      _replyto: email,
      _subject: `Website enquiry from ${name}${company ? ` (${company})` : ""}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  const payload = (await response.json().catch(() => null)) as {
    success?: string | boolean;
    message?: string;
  } | null;

  const activating =
    typeof payload?.message === "string" && payload.message.toLowerCase().includes("activation");

  if (activating || payload?.success === true || payload?.success === "true") {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { error: "We could not send your message. Please email us directly." },
    { status: 502 },
  );
}
