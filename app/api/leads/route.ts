import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BOOKING_URL, SITE } from "@/lib/site";

type LeadPayload = {
  email: string;
  source: string;
  data?: Record<string, string | number>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates a form submission. Delivery to a separately configured webhook
 * or email provider is enabled
 * only when explicitly enabled for a separately configured deployment.
 */
export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const lead = {
    email,
    source: typeof payload.source === "string" ? payload.source.slice(0, 100) : "unknown",
    data: payload.data ?? {},
    capturedAt: new Date().toISOString(),
  };

  // The portfolio copy validates the form without storing or sending contact data.
  if (process.env.ENABLE_LEAD_DELIVERY !== "true") {
    return NextResponse.json({ ok: true, demo: true });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch {
      // Do not log the lead payload or webhook URL.
      console.error("[lead] webhook forward failed");
    }
  }

  if (process.env.RESEND_API_KEY && lead.source === "missed-call-calculator") {
    try {
      await sendCalculatorEmail(lead);
    } catch {
      // Do not log contact data or provider response details.
      console.error("[lead] email delivery failed");
    }
  }

  return NextResponse.json({ ok: true });
}

async function sendCalculatorEmail(lead: {
  email: string;
  data: Record<string, string | number>;
}) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.RESEND_FROM ?? `Redt Dunn <${SITE.email}>`;

  const { missedCallsPerWeek, averageJobValue, closeRatePercent, estimatedMonthlyLoss } =
    lead.data;

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a; line-height: 1.6;">
      <p>Hey — thanks for running the numbers. Here's your breakdown:</p>
      <table style="border-collapse: collapse; margin: 16px 0;">
        <tr><td style="padding: 4px 16px 4px 0; color: #555;">Missed calls per week</td><td style="padding: 4px 0; font-weight: 600;">${missedCallsPerWeek}</td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #555;">Average job value</td><td style="padding: 4px 0; font-weight: 600;">$${averageJobValue}</td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #555;">Close rate</td><td style="padding: 4px 0; font-weight: 600;">${closeRatePercent}%</td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #555;">Estimated monthly loss</td><td style="padding: 4px 0; font-weight: 700; color: #c0392b;">$${estimatedMonthlyLoss}</td></tr>
      </table>
      <p>The first fix we'd make is <strong>missed-call text-back</strong>: when a call rings out, the caller instantly gets a text from your business number so the lead never goes cold. It's live in days, not weeks — and it usually recovers a meaningful chunk of that monthly number on its own.</p>
      <p>
        <a href="${BOOKING_URL}" style="display: inline-block; background: #1a1a1a; color: #ffffff; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: 600;">Book a free audit call</a>
      </p>
      <p>Prefer email? Just reply, or write to <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
      <p style="color: #555;">— Redt Dunn<br/>Dunn Consulting</p>
    </div>
  `;

  await resend.emails.send({
    from,
    to: lead.email,
    bcc: SITE.email,
    subject: "Your missed-call cost breakdown",
    html,
  });
}
