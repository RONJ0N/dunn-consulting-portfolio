import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { SOLUTION_EXAMPLES, SOLUTION_STEPS } from "@/content/solutions";
import { BOOKING_URL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom AI Solutions",
  description:
    "Bespoke AI automations built for your business — quote bots, dispatch automation, document intake, internal AI assistants, and the workflows no off-the-shelf tool handles.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-edge pt-16">
          <div aria-hidden className="glow-accent absolute inset-0" />
          <div aria-hidden className="bg-grid absolute inset-0" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-20 text-center md:px-8 md:py-28">
            <Reveal>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Custom AI solutions
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl sm:leading-[1.05]">
                If your team does it by hand,{" "}
                <span className="text-shimmer">we can automate it.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Our packages cover the front office. This is everything else — the
                bespoke automations, AI assistants, and integrations built around the
                way <em>your</em> business actually runs.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <CtaButton href={BOOKING_URL} external trackLocation="solutions-hero">
                  Book an audit call
                </CtaButton>
                <CtaButton href="#examples" variant="secondary">
                  See what we build
                </CtaButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="scroll-mt-24">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <SectionHeading
              eyebrow="What we build"
              title="Built around your workflow, not a template."
              description="A sample of what custom engagements look like. If your bottleneck isn't here, that's normal — the audit exists to find it."
            />
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SOLUTION_EXAMPLES.map((example, i) => (
                <Reveal key={example.title} delay={i * 80} className="h-full">
                  <SpotlightCard className="flex h-full flex-col gap-4 rounded-2xl border border-edge bg-surface p-7">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {example.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted">
                      {example.description}
                    </p>
                    <p className="text-xs text-muted">
                      Best for <span className="text-accent">{example.bestFor}</span>
                    </p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement model */}
        <section className="border-t border-edge bg-surface/40">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <SectionHeading
              eyebrow="How it works"
              title="Paid audit. Fixed scope. No surprises."
              description="Custom work starts with a paid AI Opportunity Audit — so you get a real roadmap, not a sales pitch, and we never quote blind."
            />
            <ol className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {SOLUTION_STEPS.map((step, i) => (
                <Reveal key={step.step} delay={i * 100} className="h-full">
                  <li className="h-full">
                    <SpotlightCard className="flex h-full flex-col gap-4 rounded-2xl border border-edge bg-surface p-7">
                      <span className="font-mono text-sm font-medium text-accent">
                        {step.step}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="font-mono text-sm text-accent-bright">{step.price}</p>
                      <p className="text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </SpotlightCard>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200}>
              <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted">
                Already a Dunn Consulting client? Your audit fee is waived — we already
                know your systems. Just mention it on the call.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-edge">
          <div aria-hidden className="glow-accent absolute inset-0" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center md:px-8 md:py-32">
            <Reveal>
              <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.1]">
                Tell us the task your team dreads.{" "}
                <span className="text-shimmer">We&apos;ll automate it.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Book a call and walk us through the workflow. We&apos;ll tell you on the
                spot whether it&apos;s automatable, what it would roughly cost, and what
                the payback looks like.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex flex-col items-center gap-4">
                <CtaButton href={BOOKING_URL} external trackLocation="solutions-final-cta">
                  Book an audit call
                </CtaButton>
                <p className="text-sm text-muted">
                  Prefer email?{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-foreground underline decoration-edge-strong underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent"
                  >
                    {SITE.email}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
