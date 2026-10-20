// Automatic customer replies — deterministic templates, no LLM.
//
// The site is a lead-generation property: nobody on our side runs a truck.
// So every automatic reply is honest about what happens next:
//
//   • Referral mode (default): the customer gets two reliable local haulers
//     to call, and is asked to mention us. This serves the customer the same
//     day and builds the lead-volume proof we pitch to a future client.
//   • Partner mode (PARTNER_NAME + PARTNER_PHONE and/or PARTNER_EMAIL set):
//     the lead is forwarded to the partner and the customer is told the
//     partner will call to confirm price and time.
//
// Stages:
//   handoff  — first contact (form, voicemail, or first text)
//   followup — any later message from the same person

import { siteConfig } from "@/lib/site.config";

export type Lang = "fr" | "en";
export type Stage = "handoff" | "followup";

export const REFERRALS = [
  { name: "Junk Ninja", phone: "613-825-0707", url: "junkninja.ca/book-appointment" },
  { name: "1-800-GOT-JUNK", phone: "819-272-5181", url: "1800gotjunk.com" },
];

export function partner(): { name: string; phone?: string; email?: string } | null {
  const name = process.env.PARTNER_NAME;
  const phone = process.env.PARTNER_PHONE;
  const email = process.env.PARTNER_EMAIL;
  if (!name || (!phone && !email)) return null;
  return { name, phone, email };
}

// Crude but good enough for SMS: French unless the text looks English.
export function detectLang(text: string, fallback: Lang = "fr"): Lang {
  const t = ` ${text.toLowerCase()} `;
  const en = (t.match(/ (the|and|please|thanks|thank you|hi|hello|i need|pickup|pick up|couch|chairs|fridge|when|address) /g) || []).length;
  const fr = (t.match(/ (le|la|les|et|merci|bonjour|svp|s'il|ramasser|débarras|debarras|frigo|matelas|adresse|semaine|quand) /g) || []).length;
  if (en > fr) return "en";
  if (fr > en) return "fr";
  return fallback;
}

const brand = (lang: Lang) => siteConfig[lang]?.brandName || siteConfig.city;

export function smsReply(lang: Lang, stage: Stage): string {
  const p = partner();
  const b = brand(lang);
  const [a, c] = REFERRALS;
  if (lang === "fr") {
    if (stage === "handoff") {
      if (p) return `${b} : merci, c'est noté! Notre partenaire ${p.name} vous contacte sous peu pour confirmer le prix et l'heure. Pour toute question : info@${siteConfig.domain}. – Jérôme`;
      return `${b} : merci, c'est noté! Pour un ramassage rapide, voici 2 entreprises fiables à Gatineau : ${a.name} ${a.phone} (${a.url}) ou ${c.name} ${c.phone}. Dites que vous venez de ${b}. Petits encombrants : collecte municipale, 311. – Jérôme`;
    }
    if (p) return `${b} : merci! ${p.name} a bien vos coordonnées et vous contacte sous peu. Pour toute autre question : info@${siteConfig.domain}. – Jérôme`;
    return `${b} : merci! Nos partenaires recommandés : ${a.name} ${a.phone} · ${c.name} ${c.phone}. Pour toute autre question : info@${siteConfig.domain}. – Jérôme`;
  }
  if (stage === "handoff") {
    if (p) return `${b}: thanks, got it! Our partner ${p.name} will contact you shortly to confirm price and time. Questions: info@${siteConfig.domain}. – Jérôme`;
    return `${b}: thanks, got it! For a fast pickup, here are 2 reliable Gatineau haulers: ${a.name} ${a.phone} (${a.url}) or ${c.name} ${c.phone}. Mention ${b}. Small items: city bulk pickup, 311. – Jérôme`;
  }
  if (p) return `${b}: thanks! ${p.name} has your details and will be in touch shortly. Other questions: info@${siteConfig.domain}. – Jérôme`;
  return `${b}: thanks! Our recommended partners: ${a.name} ${a.phone} · ${c.name} ${c.phone}. Other questions: info@${siteConfig.domain}. – Jérôme`;
}

// Email version of the handoff (form leads). Returns plain text; the caller
// wraps it in HTML.
export function emailHandoff(lang: Lang, firstName: string, comment: string): { subject: string; text: string } {
  const p = partner();
  const b = brand(lang);
  const [a, c] = REFERRALS;
  const quoted = comment ? (lang === "fr" ? `\n« ${comment} »\n` : `\n"${comment}"\n`) : "";
  if (lang === "fr") {
    const next = p
      ? `Notre partenaire ${p.name} a reçu votre demande et vous contactera sous peu pour confirmer le prix et l'heure du ramassage.`
      : `Pour un ramassage rapide, voici deux entreprises fiables à Gatineau que nous recommandons :

• ${a.name} — ${a.phone} — ${a.url}
• ${c.name} — ${c.phone}

Dites-leur que vous venez de ${b}. Pour quelques petits encombrants, la collecte municipale de Gatineau (311) est gratuite.`;
    return {
      subject: `Votre demande de débarras — ${b}`,
      text: `Bonjour ${firstName},

Merci d'avoir communiqué avec nous via ${siteConfig.domain}. Nous avons bien reçu votre demande :${quoted}
${next}

Si vous avez une question, répondez à ce courriel ou écrivez-nous par texto au ${siteConfig.phoneDisplay}.

Merci,
Jérôme
${b}
${siteConfig.phoneDisplay} · ${siteConfig.domain}`,
    };
  }
  const next = p
    ? `Our partner ${p.name} has your request and will contact you shortly to confirm the price and pickup time.`
    : `For a fast pickup, here are two reliable Gatineau haulers we recommend:

• ${a.name} — ${a.phone} — ${a.url}
• ${c.name} — ${c.phone}

Tell them you came from ${b}. For a few small items, the City of Gatineau bulk pickup (311) is free.`;
  return {
    subject: `Your junk removal request — ${b}`,
    text: `Hi ${firstName},

Thanks for reaching out through ${siteConfig.domain}. We've received your request:${quoted}
${next}

Any question, reply to this email or text us at ${siteConfig.phoneDisplay}.

Thanks,
Jérôme
${b}
${siteConfig.phoneDisplay} · ${siteConfig.domain}`,
  };
}

export function textToHtml(text: string): string {
  const esc = (v: string) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return text.split("\n").map((l) => (l.trim() === "" ? "<br/>" : `<p style="margin:0 0 10px">${esc(l)}</p>`)).join("");
}
