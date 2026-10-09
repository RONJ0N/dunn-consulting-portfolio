export type Niche = {
  name: string;
  pain: string;
  roi: string;
};

export const NICHES: Niche[] = [
  {
    name: "Dental & Healthcare",
    pain: "Front desks spend 60% of their time answering the same calls and juggling the schedule.",
    roi: "One recovered no-show sequence typically pays for 2–3 months of service.",
  },
  {
    name: "HVAC & Home Services",
    pain: "30–40% of inbound calls go unanswered — most of them during peak season.",
    roi: "A single recovered after-hours emergency call covers 1–2 months of service.",
  },
  {
    name: "Law Firms",
    pain: "40–50% of staff time is admin overhead, and slow intake loses clients to faster firms.",
    roi: "One reclaimed admin hour per day is worth $3K–7.5K/month in billable time.",
  },
  {
    name: "Real Estate",
    pain: "Leads that don't hear back within minutes move on — especially after hours.",
    roi: "One recovered lead easily covers 3–6 months of service.",
  },
  {
    name: "Financial Services",
    pain: "Client onboarding, document collection, and compliance paperwork eat entire days.",
    roi: "Onboarding automated end to end — the highest-leverage niche we serve.",
  },
];
