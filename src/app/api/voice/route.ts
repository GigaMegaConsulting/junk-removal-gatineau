import { NextResponse } from "next/server";

// Twilio Programmable Voice webhook. The Twilio number is configured to POST
// here when a call comes in; we respond with TwiML that forwards the call to
// TWILIO_FORWARD_TO. This indirection means we can swap the destination phone
// (e.g. when onboarding a paying client) by changing one env var — Twilio's
// own number config never changes.

function twiml(forwardTo: string | undefined): string {
  if (!forwardTo) {
    // Fallback message if not configured. Visitor hears it; we know to fix env.
    return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice" language="en-US">This number is not currently configured. Please try again later.</Say>
</Response>`;
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Dial timeout="25" callerId="${forwardTo}">${forwardTo}</Dial>
</Response>`;
}

// Twilio webhooks are POST; allow GET for manual testing in the browser.
const xmlHeaders = { "Content-Type": "text/xml; charset=utf-8" };

export async function POST() {
  return new NextResponse(twiml(process.env.TWILIO_FORWARD_TO), { headers: xmlHeaders });
}

export async function GET() {
  return new NextResponse(twiml(process.env.TWILIO_FORWARD_TO), { headers: xmlHeaders });
}
