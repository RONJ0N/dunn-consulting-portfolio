import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { ClipboardIcon, ClockIcon, PhoneMissedIcon } from "@/components/icons";

const PROBLEMS = [
  {
    icon: PhoneMissedIcon,
    title: "Missed calls",
    stat: "30–40%",
    statLabel: "of inbound calls go unanswered",
    description:
      "Home-service businesses miss a third of their calls. At a few hundred dollars per job, that's thousands in revenue going to voicemail — and then to a competitor — every single week.",
  },
  {
    icon: ClockIcon,
    title: "The after-hours gap",
    stat: "5pm",
    statLabel: "is when your website goes quiet — your customers don't",
    description:
      "Emergencies, new-patient inquiries, and hot leads don't keep business hours. If nothing answers at 9pm, the customer you spent money acquiring books with whoever does.",
  },
  {
    icon: ClipboardIcon,
    title: "Manual follow-up",
    stat: "60%",
    statLabel: "of front-desk time spent on repetitive calls & scheduling",
    description:
      "No-show reminders, review requests, lead follow-up — work that's critical but never urgent, so it slips. Every slip is money: a no-show, a lost review, a cold lead.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="scroll-mt-24 border-t border-edge bg-surface/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="The problem"
          title="Every missed call is revenue walking out the door."
          description="You're not losing leads because your marketing is bad. You're losing the leads you already paid for — at the phone, after hours, and in the follow-up."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROBLEMS.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 100} className="h-full">
              <SpotlightCard className="h-full rounded-2xl border border-edge bg-surface">
                <article className="flex h-full flex-col gap-5 p-7">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-edge bg-raised text-accent">
                    <problem.icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-display text-3xl font-semibold tracking-tight text-foreground">
                      {problem.stat}
                    </p>
                    <p className="mt-1 text-sm text-accent">{problem.statLabel}</p>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{problem.description}</p>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
