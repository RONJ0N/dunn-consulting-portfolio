/**
 * Outbound "evidence audit" email per the GTM playbook: we call a local
 * business after hours, document what happened, and email the owner the
 * receipt. Pure template — no sending here.
 */

import { SITE } from "@/lib/site";

type EvidenceAuditParams = {
  businessName: string;
  /** e.g. "Tuesday at 5:40pm" */
  calledAtLabel: string;
  /** e.g. "rang out, no text-back" */
  outcome: string;
  /** e.g. "$450" */
  estimatedJobValue: string;
};

export function evidenceAuditEmail({
  businessName,
  calledAtLabel,
  outcome,
  estimatedJobValue,
}: EvidenceAuditParams): { subject: string; html: string; text: string } {
  const subject = `I called ${businessName} ${calledAtLabel} — here's what happened`;

  const paragraphs = [
    `I called ${businessName} ${calledAtLabel} — ${outcome}. If I'd been a real customer, that was a ${estimatedJobValue} job walking straight to whoever picked up next.`,
    `This isn't a one-off. Most local businesses miss 20–30% of their calls, and almost none of those callers leave a voicemail — they just call the next listing.`,
    `The fix is simple: missed-call text-back. The moment a call rings out, the caller gets an instant text from your number, so the conversation starts even when you can't pick up. We set it up in days, not weeks.`,
    `I'd like to prove it instead of pitching it: a free 2-week pilot on your real phone line. If it doesn't recover real leads, you turn it off and owe nothing. Reply to this email or grab a time and I'll have it live this week.`,
  ];

  const signatureText = `Redt Dunn\nDunn Consulting\n${SITE.email}`;

  const text = `${paragraphs.join("\n\n")}\n\n${signatureText}`;

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a; line-height: 1.6;">
      ${paragraphs.map((p) => `<p>${p}</p>`).join("\n      ")}
      <p style="color: #555;">
        Redt Dunn<br/>
        Dunn Consulting<br/>
        <a href="mailto:${SITE.email}">${SITE.email}</a>
      </p>
    </div>
  `;

  return { subject, html, text };
}
