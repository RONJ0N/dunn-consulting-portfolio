import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import { BOOKING_URL, SITE } from "@/lib/site";

export default function FinalCta() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-edge">
      <div aria-hidden className="glow-accent absolute inset-0" />
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="aurora-blob aurora-a -left-32 bottom-0 h-[24rem] w-[24rem] opacity-20" />
        <div className="aurora-blob aurora-b -right-32 top-0 h-[26rem] w-[26rem] opacity-20" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center md:px-8 md:py-32">
        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.1]">
            Find out what missed calls cost you{" "}
            <span className="text-shimmer">last month.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Book a free 20-minute audit call. We&apos;ll walk through your website and
            phone setup, show you exactly where leads are leaking, and tell you what
            we&apos;d build first — whether you hire us or not.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CtaButton href={BOOKING_URL} external trackLocation="final-cta">
              Book your free audit
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
  );
}
