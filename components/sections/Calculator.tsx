"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { trackCalculatorLead } from "@/lib/track";

const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const WEEKS_PER_MONTH = 4.33;

type SliderProps = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (value: number) => void;
};

function Slider({ id, label, value, min, max, step, display, onChange }: SliderProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm text-muted">
          {label}
        </label>
        <span className="font-mono text-sm font-medium text-foreground">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-raised accent-(--accent)"
      />
    </div>
  );
}

export default function Calculator() {
  const [missedPerWeek, setMissedPerWeek] = useState(10);
  const [jobValue, setJobValue] = useState(350);
  const [closeRate, setCloseRate] = useState(30);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "demo" | "error">("idle");

  const monthlyLoss = Math.round(
    missedPerWeek * WEEKS_PER_MONTH * jobValue * (closeRate / 100),
  );
  const yearlyLoss = monthlyLoss * 12;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "missed-call-calculator",
          data: {
            missedCallsPerWeek: missedPerWeek,
            averageJobValue: jobValue,
            closeRatePercent: closeRate,
            estimatedMonthlyLoss: monthlyLoss,
          },
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      const result = await res.json();
      trackCalculatorLead(monthlyLoss);
      setStatus(result.demo ? "demo" : "sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="calculator" className="scroll-mt-24 border-t border-edge bg-surface/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="The calculator"
          title="What are missed calls costing you?"
          description="Three sliders, no email required to see the number. Most owners underestimate this by half."
        />

        <Reveal delay={100}>
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-edge bg-surface md:grid-cols-2">
            <div className="flex flex-col gap-8 border-b border-edge p-8 md:border-b-0 md:border-r">
              <Slider
                id="calc-missed"
                label="Calls you miss per week"
                value={missedPerWeek}
                min={1}
                max={50}
                step={1}
                display={String(missedPerWeek)}
                onChange={setMissedPerWeek}
              />
              <Slider
                id="calc-value"
                label="Average value of a job or client"
                value={jobValue}
                min={50}
                max={5000}
                step={50}
                display={fmt.format(jobValue)}
                onChange={setJobValue}
              />
              <Slider
                id="calc-close"
                label="Of answered calls, how many become customers"
                value={closeRate}
                min={5}
                max={80}
                step={5}
                display={`${closeRate}%`}
                onChange={setCloseRate}
              />
              <p className="text-xs leading-relaxed text-muted">
                Industry average for home services: 30–40% of inbound calls go
                unanswered. If you don&apos;t know your miss rate, we&apos;ll measure it
                in the free audit.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-8 p-8">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm text-muted">Estimated revenue lost per month</p>
                  <p className="mt-1 font-display text-5xl font-semibold tracking-tight text-accent-bright">
                    {fmt.format(monthlyLoss)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted">Per year</p>
                  <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-foreground">
                    {fmt.format(yearlyLoss)}
                  </p>
                </div>
              </div>

              {status === "sent" || status === "demo" ? (
                <p className="rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm leading-relaxed text-foreground">
                  {status === "demo"
                    ? "Demo complete. Your breakdown is shown above; no email was sent and your address was not saved."
                    : "Your request was received. Thanks for trying the calculator."}
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <label htmlFor="calc-email" className="text-sm text-muted">
                    Email me this breakdown + the first fix we&apos;d make
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      id="calc-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourbusiness.com"
                      className="w-full rounded-full border border-edge-strong bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent/60 focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-shine shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-bright disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending…" : "Send it"}
                    </button>
                  </div>
                  {status === "error" ? (
                    <p className="text-xs text-red-400">
                      Something went wrong — try again or email us directly.
                    </p>
                  ) : (
                    <p className="text-xs text-muted">
                      No spam, no drip sequence. One useful email.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
