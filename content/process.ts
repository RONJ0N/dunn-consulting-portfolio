export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Free audit",
    description:
      "We record a short video walkthrough of your website and phone setup, showing exactly where leads are leaking out — and what each gap is costing you.",
  },
  {
    step: "02",
    title: "Two-week pilot",
    description:
      "We deploy missed-call text-back on your line, free. After two weeks you see the recovered leads in writing. No commitment, no risk.",
  },
  {
    step: "03",
    title: "Deploy & launch",
    description:
      "We build your full package and connect it to your phone, calendar, and CRM. Most systems are live within 2–4 weeks of kickoff.",
  },
  {
    step: "04",
    title: "Expand the system",
    description:
      "As the ROI shows up, we add capabilities one at a time — voice receptionist, review engine, onboarding flows — each proving itself before the next.",
  },
];
