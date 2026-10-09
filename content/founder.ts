/**
 * Founder bio shown in the About section.
 * TODO: confirm name/location and drop a real photo at /public/founder.jpg
 * (the section falls back to a monogram tile until one exists).
 */
export const FOUNDER = {
  name: "Redt Dunn",
  role: "Founder, Dunn Consulting",
  location: "United States",
  photo: null as string | null, // e.g. "/founder.jpg"
  intro:
    "I build the systems myself — every chatbot, every text-back flow, every voice receptionist that ships under the Dunn Consulting name.",
  bio: [
    "I started Dunn Consulting after watching local businesses lose the customers they'd already earned — calls ringing out at 5:30pm, web leads sitting unanswered overnight, no-shows nobody followed up on. Not a marketing problem. A plumbing problem.",
    "So that's what I fix. I connect your phone, website, calendar, and CRM into one system that answers instantly, follows up automatically, and books work while you're on a job. You'll work with me directly — no account managers, no offshore support desk.",
  ],
  commitments: [
    "You talk to the person who built your system",
    "Plain-English reporting — recovered leads and dollars, not vanity metrics",
    "Month-to-month. If it stops earning its keep, fire me.",
  ],
} as const;
