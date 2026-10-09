import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { RESULTS } from "@/content/stats";

export default function Results() {
  return (
    <section id="results" className="scroll-mt-24 border-t border-edge">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Results"
          title="What these systems deliver in the real world."
          description="The numbers below come from documented industry deployments of the exact systems we build — this is the bar we hold our work to."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {RESULTS.map((result, i) => (
            <Reveal key={result.label} delay={(i % 2) * 100} className="h-full">
              <SpotlightCard className="h-full rounded-2xl border border-edge bg-surface">
                <article className="flex h-full flex-col gap-3 p-8">
                  <p className="font-display text-4xl font-semibold tracking-tight text-accent sm:text-5xl">
                    {result.value}
                  </p>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {result.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{result.detail}</p>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-xs text-muted">
            Sources: published HVAC and home-services AI case studies, 2025–2026.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
