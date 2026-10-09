import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { CheckIcon } from "@/components/icons";
import { PRICING_TIERS } from "@/content/pricing";
import { BOOKING_URL } from "@/lib/site";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-t border-edge bg-surface/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Packages"
          title="Pick a starting point. We'll scope it to your business."
          description="Every engagement is a one-time setup plus a flat monthly retainer, quoted after your free audit — no long contracts, no surprise line items. The system earns its keep month to month."
        />

        <div className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100} className="h-full">
              <SpotlightCard
                className={`relative flex h-full flex-col gap-6 rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-accent/50 bg-raised shadow-[0_0_60px_-15px] shadow-accent/20"
                    : "border-edge bg-surface"
                }`}
              >
                {tier.badge ? (
                  <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-background">
                    {tier.badge}
                  </span>
                ) : null}

                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{tier.summary}</p>
                </div>

                <ul className="flex flex-1 flex-col gap-3 border-t border-edge pt-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-4">
                  <p className="text-xs text-muted">
                    Ideal for <span className="text-foreground">{tier.idealFor}</span>
                  </p>
                  <CtaButton
                    href={BOOKING_URL}
                    external
                    variant={tier.highlighted ? "primary" : "secondary"}
                    trackLocation={`pricing-${tier.name.toLowerCase()}`}
                    className="w-full"
                  >
                    Get a custom quote
                  </CtaButton>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-muted">
            Not sure which fits? Start with the{" "}
            <span className="text-foreground">free two-week pilot</span> — we&apos;ll
            recommend a package based on what it recovers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
