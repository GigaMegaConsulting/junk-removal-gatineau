import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site.config";

// Twilio Programmable Voice webhook. The Twilio number is configured to POST
// here when a call comes in; we respond with TwiML that forwards the call to
// TWILIO_FORWARD_TO. This indirection means we can swap the destination phone
// (e.g. when onboarding a paying client) by changing one env var — Twilio's
// own number config never changes.

function twiml(forwardTo: string | undefined, displayNumber: string): string {
  if (!forwardTo) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice" language="en-US">This number is not currently configured. Please try again later.</Say>
</Response>`;
  }
  // callerId = the Twilio number the visitor dialed, so the answering phone
  // sees the site's tracking number and knows which lead-gen site generated
  // the call (vs e.g. a personal contact ringing through).
  // Note: Twilio requires callerId to be a Twilio-owned number on the account
  // OR a verified caller ID. The site's own published number always satisfies that.
  const e164 = displayNumber.replace(/[^+\d]/g, "");
  return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Dial timeout="25" callerId="${e164}">${forwardTo}</Dial>
</Response>`;
}

// Twilio webhooks are POST; allow GET for manual testing in the browser.
const xmlHeaders = { "Content-Type": "text/xml; charset=utf-8" };

export async function POST() {
  return new NextResponse(twiml(process.env.TWILIO_FORWARD_TO, siteConfig.phone), { headers: xmlHeaders });
}

export async function GET() {
  return new NextResponse(twiml(process.env.TWILIO_FORWARD_TO, siteConfig.phone), { headers: xmlHeaders });
}
