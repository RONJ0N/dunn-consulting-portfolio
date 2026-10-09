const INDUSTRIES = [
  "Dental Practices",
  "HVAC & Home Services",
  "Law Firms",
  "Real Estate",
  "Financial Services",
  "Med Spas",
  "Plumbing & Electrical",
  "Chiropractors",
  "Accounting Firms",
  "Veterinary Clinics",
];

function MarqueeRow() {
  return (
    <div className="flex shrink-0 items-center">
      {INDUSTRIES.map((name) => (
        <span key={name} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-sm font-medium uppercase tracking-[0.18em] text-muted/80">
            {name}
          </span>
          <span aria-hidden className="size-1.5 rounded-full bg-accent/50" />
        </span>
      ))}
    </div>
  );
}

export default function IndustryMarquee() {
  return (
    <div className="border-t border-edge bg-surface/30 py-6">
      <p className="sr-only">Industries we serve: {INDUSTRIES.join(", ")}</p>
      <div aria-hidden className="marquee overflow-hidden">
        <div className="marquee-track">
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
    </div>
  );
}
