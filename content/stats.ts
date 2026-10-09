export type Stat = {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

/** Hero stat strip — values animate up on scroll */
export const HERO_STATS: Stat[] = [
  { end: 73, suffix: "%", label: "of small businesses plan to adopt AI in 2026" },
  { end: 12, suffix: "%", label: "have actually done it — the gap is your edge" },
  { end: 126, prefix: "$", suffix: "K", label: "average revenue lost per year to missed calls" },
];

export type Result = {
  value: string;
  label: string;
  detail: string;
};

/** Results section — industry case-study highlights */
export const RESULTS: Result[] = [
  {
    value: "38% → 98%",
    label: "After-hours answer rate",
    detail: "HVAC company after deploying an AI receptionist — recovering $340K/year in after-hours revenue.",
  },
  {
    value: "$74K",
    label: "Incremental revenue in 90 days",
    detail: "From 1,300+ AI-answered calls at a single home-services business — while avoiding seasonal hires.",
  },
  {
    value: "90%+",
    label: "Of AI-answered calls booked",
    detail: "Callers don't hang up on a receptionist that answers instantly and books them in one step.",
  },
  {
    value: "60 sec",
    label: "Missed-call to text-back",
    detail: "Every unanswered call gets an automatic text within a minute — before the caller tries a competitor.",
  },
];
