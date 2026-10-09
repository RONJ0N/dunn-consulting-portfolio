import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { NICHES } from "@/content/niches";

export default function Niches() {
  return (
    <section id="industries" className="scroll-mt-24 border-t border-edge bg-surface/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Who we serve"
          title="Built for businesses where every lead has a price tag."
          description="We specialize in local service businesses with real, quantifiable pain — where one recovered call or booking visibly pays for the system."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {NICHES.map((niche, i) => (
            <Reveal
              key={niche.name}
              delay={(i % 3) * 100}
              className={`h-full ${i === NICHES.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <SpotlightCard className="h-full rounded-2xl border border-edge bg-surface">
                <article className="flex h-full flex-col gap-4 p-7">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {niche.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted">{niche.pain}</p>
                  <p className="rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm leading-snug text-accent-bright">
                    {niche.roi}
                  </p>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
