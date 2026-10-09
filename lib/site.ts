/**
 * Central site configuration. Swap BOOKING_URL for your real
 * Calendly / GoHighLevel calendar link when it's ready.
 */
export const BOOKING_URL = "https://calendly.com/dunnredt/30min";

export const SITE = {
  name: "Dunn Consulting",
  tagline: "AI websites & automation for local businesses",
  description:
    "Dunn Consulting builds high-converting websites and AI systems — chatbots, missed-call text-back, 24/7 voice receptionists — that capture every lead your local business generates.",
  url: "https://dunnconsulting.org",
  email: "hello@dunnconsulting.org",
  location: "United States",
} as const;

/** Sole proprietorship — keep in sync with Twilio Trust Hub and Stripe. */
export const LEGAL = {
  structure: "sole proprietorship" as const,
  /** Must match your legal name on the EIN letter and government ID exactly. */
  ownerLegalName: "Redt Dunn",
  tradeName: SITE.name,
  /** Contracts, privacy policy, Twilio Trust Hub legal name + DBA */
  entityName: "Redt Dunn d/b/a Dunn Consulting",
  /** Short prose form for policy intros */
  entityDescription: "Redt Dunn, doing business as Dunn Consulting",
} as const;
