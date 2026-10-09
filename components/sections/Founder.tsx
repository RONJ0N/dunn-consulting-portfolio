import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";
import { FOUNDER } from "@/content/founder";
import { SITE } from "@/lib/site";

export default function Founder() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-edge bg-surface/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <Reveal>
            <div className="flex flex-col gap-6">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Who you&apos;re hiring
              </p>
              {FOUNDER.photo ? (
                <Image
                  src={FOUNDER.photo}
                  alt={FOUNDER.name}
                  width={320}
                  height={320}
                  className="aspect-square w-full max-w-xs rounded-2xl border border-edge object-cover"
                />
              ) : (
                <div
                  aria-hidden
                  className="flex aspect-square w-full max-w-xs items-center justify-center rounded-2xl border border-edge bg-raised"
                >
                  <span className="font-display text-7xl font-semibold text-accent">
                    {FOUNDER.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                </div>
              )}
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                  {FOUNDER.name}
                </h2>
                <p className="mt-1 text-sm text-muted">
                  {FOUNDER.role} · {FOUNDER.location}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col gap-6">
              <p className="font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                &ldquo;{FOUNDER.intro}&rdquo;
              </p>
              {FOUNDER.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
              <ul className="mt-2 flex flex-col gap-3">
                {FOUNDER.commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-muted">
                Want to talk it through first?{" "}
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
      </div>
    </section>
  );
}
