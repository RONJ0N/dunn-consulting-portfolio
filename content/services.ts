export type Service = {
  name: string;
  description: string;
  bestFor: string;
  icon: "globe" | "chat" | "phone" | "mic" | "calendar" | "star" | "funnel";
  tag?: string;
};

export const SERVICES: Service[] = [
  {
    name: "AI-Powered Websites",
    description:
      "Fast, modern websites engineered to convert visitors into booked appointments — with an AI layer built in from day one, not bolted on later.",
    bestFor: "Every local business",
    icon: "globe",
  },
  {
    name: "Missed Call Text-Back",
    description:
      "When a call goes unanswered, the caller gets a text within 60 seconds and can book on the spot — before they dial your competitor.",
    bestFor: "HVAC, dental, law firms",
    icon: "phone",
    tag: "Highest ROI",
  },
  {
    name: "AI Voice Receptionist",
    description:
      "A natural-sounding AI answers your phone 24/7, handles common questions, qualifies callers, and books appointments straight into your calendar.",
    bestFor: "HVAC, dental, med spas",
    icon: "mic",
    tag: "New for 2026",
  },
  {
    name: "AI Website Chatbot",
    description:
      "Answers the same questions your staff fields all day — hours, insurance, pricing, availability — instantly, at any hour, and captures the lead.",
    bestFor: "Every local business",
    icon: "chat",
  },
  {
    name: "Appointment Booking + Follow-Up",
    description:
      "Automated scheduling, reminders, and no-show recovery sequences that keep your calendar full without anyone lifting a finger.",
    bestFor: "Dental, HVAC, med spas",
    icon: "calendar",
  },
  {
    name: "Review Request Automation",
    description:
      "Turns happy customers into a steady stream of 5-star Google reviews on autopilot — the single biggest driver of local search ranking.",
    bestFor: "Every local business",
    icon: "star",
  },
  {
    name: "Lead Qualification + CRM Automation",
    description:
      "Every inquiry scored, routed, and followed up automatically. Your pipeline stays organized and nothing falls through the cracks.",
    bestFor: "Law, real estate, finance",
    icon: "funnel",
  },
];
