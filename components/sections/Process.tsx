import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { PROCESS_STEPS } from "@/content/process";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-edge">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="How it works"
          title="Prove it first. Then build."
          description="No big upfront commitment, no leap of faith. You see recovered revenue in writing before you spend a dollar on the full system."
        />

        <ol className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 100} className="h-full">
              <li className="h-full">
                <SpotlightCard className="flex h-full flex-col gap-4 rounded-2xl border border-edge bg-surface p-7">
                  <span className="font-mono text-sm font-medium text-accent">
                    {step.step}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                </SpotlightCard>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
