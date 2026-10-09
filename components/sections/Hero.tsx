import Image from "next/image";
import CountUp from "@/components/CountUp";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import { HERO_STATS } from "@/content/stats";
import { BOOKING_URL, SITE } from "@/lib/site";
import type { CSSProperties } from "react";

type Particle = {
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
  drift: string;
  opacity: number;
  blue?: boolean;
};

const PARTICLES: Particle[] = [
  { left: "8%", top: "62%", size: 4, duration: "13s", delay: "0s", drift: "26px", opacity: 0.5 },
  { left: "16%", top: "38%", size: 3, duration: "17s", delay: "2.5s", drift: "-18px", opacity: 0.4, blue: true },
  { left: "27%", top: "74%", size: 5, duration: "15s", delay: "5s", drift: "14px", opacity: 0.45 },
  { left: "41%", top: "30%", size: 3, duration: "19s", delay: "1s", drift: "-26px", opacity: 0.35 },
  { left: "55%", top: "68%", size: 4, duration: "14s", delay: "7s", drift: "20px", opacity: 0.5, blue: true },
  { left: "66%", top: "42%", size: 3, duration: "18s", delay: "3.5s", drift: "-14px", opacity: 0.4 },
  { left: "76%", top: "76%", size: 5, duration: "16s", delay: "6s", drift: "24px", opacity: 0.45 },
  { left: "86%", top: "52%", size: 3, duration: "13.5s", delay: "0.8s", drift: "-20px", opacity: 0.4, blue: true },
  { left: "93%", top: "34%", size: 4, duration: "20s", delay: "4.2s", drift: "12px", opacity: 0.35 },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" />
        <div className="bg-grid absolute inset-0" />
        <div className="aurora-blob aurora-a -left-40 top-10 h-[28rem] w-[28rem] opacity-30" />
        <div className="aurora-blob aurora-b -right-40 top-40 h-[30rem] w-[30rem] opacity-25" />
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={`particle ${p.blue ? "particle--blue" : ""}`}
            style={
              {
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                "--particle-duration": p.duration,
                "--particle-delay": p.delay,
                "--particle-x": p.drift,
                "--particle-opacity": p.opacity,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-16 pt-24 text-center sm:pt-32 md:px-8 md:pb-20">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-edge bg-surface/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-muted backdrop-blur-sm">
            <span aria-hidden className="pulse-dot size-1.5 rounded-full bg-accent" />
            {SITE.tagline}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Stop losing customers you&apos;ve{" "}
            <span className="text-shimmer">already earned.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Dunn Consulting builds high-converting websites and AI systems — chatbots,
            missed-call text-back, 24/7 voice receptionists — that capture every lead
            your business generates, around the clock.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <CtaButton href={BOOKING_URL} external trackLocation="hero">
              Book a free audit call
            </CtaButton>
            <CtaButton href="#services" variant="secondary">
              See what we build
            </CtaButton>
          </div>
        </Reveal>

        <Reveal delay={400} className="mt-20 w-full">
          <dl className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-edge bg-edge backdrop-blur-sm sm:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 bg-surface/80 px-6 py-8"
              >
                <dt className="order-2 max-w-[16rem] text-sm leading-snug text-muted">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-4xl font-semibold tracking-tight text-foreground">
                  <CountUp end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <a
          href="#problem"
          aria-label="Scroll to learn more"
          className="scroll-cue mt-12 hidden rounded-full p-2 text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent sm:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
