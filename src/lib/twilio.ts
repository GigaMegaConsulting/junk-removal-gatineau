// Minimal Twilio REST helper — no SDK, just an HTTPS POST.
//
// Env vars (set on the Vercel project):
//   TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN

export async function sendSms(opts: { from: string; to: string; body: string }): Promise<{ ok: boolean; sid?: string; error?: string }> {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!sid || !token) return { ok: false, error: "TWILIO_ACCOUNT_SID/TWILIO_AUTH_TOKEN not set" };
  try {
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(`${sid}:${token}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ From: opts.from, To: opts.to, Body: opts.body }).toString(),
    });
    const json = (await res.json().catch(() => ({}))) as { sid?: string; message?: string };
    if (res.ok) return { ok: true, sid: json.sid };
    return { ok: false, error: `HTTP ${res.status} ${json.message || ""}`.trim() };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

// Twilio webhooks arrive as application/x-www-form-urlencoded.
export async function parseTwilioForm(req: Request): Promise<Record<string, string>> {
  const ct = req.headers.get("content-type") || "";
  if (ct.includes("application/json")) return (await req.json()) as Record<string, string>;
  const form = await req.formData();
  const out: Record<string, string> = {};
  for (const [k, v] of form.entries()) out[k] = String(v);
  return out;
}
