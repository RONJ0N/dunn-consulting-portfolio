export type PricingTier = {
  name: string;
  summary: string;
  features: string[];
  idealFor: string;
  highlighted?: boolean;
  badge?: string;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    summary: "The essentials — capture every lead your website and phone already generate.",
    features: [
      "AI website chatbot",
      "Missed call text-back",
      "Review request automation",
      "Monthly performance report",
    ],
    idealFor: "First-time clients, restaurants, retail",
  },
  {
    name: "Growth",
    summary: "The full front office — your phone, chat, and calendar handled around the clock.",
    features: [
      "Everything in Starter",
      "AI voice receptionist (24/7)",
      "Appointment booking + follow-up",
      "CRM automation",
      "Priority support",
    ],
    idealFor: "HVAC, dental, med spas",
    highlighted: true,
    badge: "Most popular",
  },
  {
    name: "Scale",
    summary: "End-to-end operations — every repetitive workflow in your business, automated.",
    features: [
      "Everything in Growth",
      "Lead qualification + routing",
      "Client onboarding system",
      "Invoice + payment follow-up",
      "Custom automation flows",
    ],
    idealFor: "Law firms, finance, 20+ employee teams",
  },
];
