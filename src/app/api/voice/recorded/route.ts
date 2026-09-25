import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site.config";
import { sendSms, parseTwilioForm } from "@/lib/twilio";
import { brevoSend, esc, TO_EMAIL_DEFAULT } from "@/lib/brevo";

// <Record action="/api/voice/recorded"> — Twilio POSTs here the moment a
// voicemail finishes. Two jobs:
//   1. Text the caller right away (bilingual) so they know we got the message
//      and can reply with the details we need. Voicemail callers used to get
//      nothing until a human listened to the recording — sometimes weeks.
//   2. Email the owner a "new voicemail" notification with the recording link.
// Then return the farewell TwiML that used to follow <Record>.

export const runtime = "nodejs";

function twiml(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Chantal" language="fr-CA">Merci, nous vous rappellerons sous peu.</Say>
  <Say voice="Polly.Joanna" language="en-US">Thanks, we will get back to you shortly.</Say>
  <Hangup/>
</Response>`;
}

export async function POST(req: Request) {
  let p: Record<string, string> = {};
  try {
    p = await parseTwilioForm(req);
  } catch (err) {
    console.error("[voice/recorded] failed to parse body", err);
  }

  const from = p.From || "";
  const brandFr = siteConfig.fr?.brandName || siteConfig.city;
  const brandEn = siteConfig.en?.brandName || siteConfig.city;

  // 1. SMS auto-reply to the caller (skip anonymous / non-E.164 callers).
  if (/^\+\d{8,15}$/.test(from)) {
    const body =
      `${brandFr} : merci pour votre message, on vous rappelle sous peu. ` +
      `Pour accélérer, répondez ici avec l'adresse, ce qu'il y a à ramasser et le moment souhaité.\n` +
      `${brandEn}: thanks for your message, we'll call you back shortly. ` +
      `To speed things up, reply here with the address, what needs to go and when. — Jérôme`;
    const r = await sendSms({ from: siteConfig.phone, to: from, body });
    if (!r.ok) console.error("[voice/recorded] sms auto-reply failed:", r.error);
  }

  // 2. Owner notification.
  const recordingUrl = p.RecordingUrl ? `${p.RecordingUrl}.mp3` : "";
  const text = [
    `New voicemail on ${siteConfig.domain}`,
    `From: ${from}${p.CallerCity ? ` (${[p.CallerCity, p.CallerState].filter(Boolean).join(", ")})` : ""}`,
    `Duration: ${p.RecordingDuration || "?"}s`,
    recordingUrl ? `Recording: ${recordingUrl}` : "",
    "",
    "Transcript: open the Lead Landlord voicemails tab in Mission Control.",
  ].filter(Boolean).join("\n");
  const html = text.split("\n").map((l) => (l ? `<p style="margin:0 0 8px">${esc(l)}</p>` : "<br/>")).join("");
  const n = await brevoSend({
    from: { email: process.env.LEAD_FROM_EMAIL || `noreply@${siteConfig.domain}`, name: `${siteConfig.city} Leads` },
    to: { email: process.env.LEAD_TO_EMAIL || TO_EMAIL_DEFAULT },
    subject: `Nouveau message vocal — ${brandFr} (${from})`,
    text,
    html,
  });
  if (!n.ok) console.error("[voice/recorded] owner notification failed:", n.error);

  return new NextResponse(twiml(), { headers: { "Content-Type": "text/xml; charset=utf-8" } });
}

export async function GET() {
  return new NextResponse(twiml(), { headers: { "Content-Type": "text/xml; charset=utf-8" } });
}
