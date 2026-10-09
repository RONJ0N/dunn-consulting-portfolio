export type SolutionExample = {
  title: string;
  description: string;
  bestFor: string;
};

export const SOLUTION_EXAMPLES: SolutionExample[] = [
  {
    title: "Instant quote & estimate bots",
    description:
      "Customers answer a few questions and get a ballpark quote in chat — qualified, priced, and pushed to your pipeline before a competitor calls them back.",
    bestFor: "HVAC, plumbing, contractors",
  },
  {
    title: "Dispatch & scheduling automation",
    description:
      "Jobs routed to the right tech by zone, skill, and availability — with automatic customer updates so your dispatcher stops playing phone tag.",
    bestFor: "Home services, field teams",
  },
  {
    title: "Document intake & processing",
    description:
      "Client documents collected, validated, extracted, and filed automatically. Intake packets that took an hour of staff time take zero.",
    bestFor: "Law firms, financial services",
  },
  {
    title: "Internal knowledge assistant",
    description:
      "A private AI trained on your SOPs, pricing sheets, and policies. New hires and front-desk staff get instant answers instead of interrupting you.",
    bestFor: "Any team of 5+",
  },
  {
    title: "Invoice & payment follow-up",
    description:
      "Overdue invoices chased politely and persistently — reminders, payment links, and escalation — without anyone touching a spreadsheet.",
    bestFor: "Agencies, trades, professional services",
  },
  {
    title: "Custom integrations & workflows",
    description:
      "The weird, specific workflow no off-the-shelf tool handles — connected across your existing software. If it's repetitive, it's automatable.",
    bestFor: "Anyone who says “we do this by hand”",
  },
];

export const SOLUTION_STEPS = [
  {
    step: "01",
    title: "AI Opportunity Audit",
    price: "$1,500 — credited toward your build",
    description:
      "We map your workflows, find the highest-ROI automations, and hand you a ranked roadmap with effort and payback estimates. It's yours to keep whether you build with us or not.",
  },
  {
    step: "02",
    title: "Fixed-scope build",
    price: "Typically $5K–$25K",
    description:
      "A locked scope, a fixed price, and a working system in weeks — built on your existing phone, calendar, CRM, and software. No new tools for your staff to learn.",
  },
  {
    step: "03",
    title: "Care plan",
    price: "From $500/mo",
    description:
      "Hosting, monitoring, and continuous improvement. We watch the system so you don't have to, and tune it as your business changes. Month-to-month, like everything we do.",
  },
];
