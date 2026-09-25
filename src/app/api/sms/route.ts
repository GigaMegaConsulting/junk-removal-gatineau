import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site.config";
import { parseTwilioForm } from "@/lib/twilio";
import { brevoSend, esc, TO_EMAIL_DEFAULT } from "@/lib/brevo";

// Inbound SMS webhook for the site's Twilio number. Customers reply by text
// to our voicemail auto-reply (or text the number directly); we forward
// every message to the owner inbox with a machine-readable blob so
// mission-control can log it, and answer Twilio with an empty <Response/>
// (no auto-text back — a human takes it from here).

export const runtime = "nodejs";

const EMPTY = `<?xml version="1.0" encoding="UTF-8"?><Response></Response>`;

export async function POST(req: Request) {
  let p: Record<string, string> = {};
  try {
    p = await parseTwilioForm(req);
  } catch (err) {
    console.error("[sms] failed to parse body", err);
    return new NextResponse(EMPTY, { headers: { "Content-Type": "text/xml; charset=utf-8" } });
  }

  const from = p.From || "";
  const body = (p.Body || "").trim().slice(0, 2000);
  const brandFr = siteConfig.fr?.brandName || siteConfig.city;

  const record = JSON.stringify({
    domain: siteConfig.domain, niche: siteConfig.niche, city: siteConfig.city, state: siteConfig.state,
    channel: "sms", from, body, messageSid: p.MessageSid, createdAt: new Date().toISOString(),
  });
  const blob = `<!--SMSJSON:${Buffer.from(record).toString("base64")}:SMSJSON-->`;

  const text = [`New SMS on ${siteConfig.domain}`, `From: ${from}`, "", body].join("\n");
  const html =
    `<h2>New SMS from ${esc(from)}</h2><p><strong>Site:</strong> ${esc(siteConfig.domain)}</p>` +
    `<p style="white-space:pre-wrap">${esc(body)}</p>${blob}`;

  const n = await brevoSend({
    from: { email: process.env.LEAD_FROM_EMAIL || `noreply@${siteConfig.domain}`, name: `${siteConfig.city} Leads` },
    to: { email: process.env.LEAD_TO_EMAIL || TO_EMAIL_DEFAULT },
    subject: `Texto reçu — ${brandFr} (${from})`,
    text,
    html,
  });
  if (!n.ok) console.error("[sms] owner notification failed:", n.error);

  return new NextResponse(EMPTY, { headers: { "Content-Type": "text/xml; charset=utf-8" } });
}

export async function GET() {
  return new NextResponse("sms webhook ready", { status: 200 });
}
