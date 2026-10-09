import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import {
  CalendarIcon,
  ChatIcon,
  FunnelIcon,
  GlobeIcon,
  MicIcon,
  PhoneIcon,
  StarIcon,
} from "@/components/icons";
import { SERVICES, type Service } from "@/content/services";

const ICONS: Record<Service["icon"], typeof GlobeIcon> = {
  globe: GlobeIcon,
  chat: ChatIcon,
  phone: PhoneIcon,
  mic: MicIcon,
  calendar: CalendarIcon,
  star: StarIcon,
  funnel: FunnelIcon,
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-edge">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="What we build"
          title="One connected system, not a pile of tools."
          description="Each service works on its own. Together, they connect your phone, website, calendar, and CRM into a machine that never sleeps and never forgets to follow up."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.name} delay={(i % 3) * 100} className="h-full">
                <SpotlightCard className="group h-full rounded-2xl border border-edge bg-surface">
                  <article className="flex h-full flex-col gap-4 p-7">
                    <div className="flex items-start justify-between">
                      <div className="flex size-11 items-center justify-center rounded-xl border border-edge bg-raised text-accent transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-5" />
                      </div>
                      {service.tag ? (
                        <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-wider text-accent-bright">
                          {service.tag}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {service.name}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <p className="border-t border-edge pt-4 text-xs text-muted">
                      Best for <span className="text-foreground">{service.bestFor}</span>
                    </p>
                  </article>
                </SpotlightCard>
              </Reveal>
            );
          })}

          <Reveal delay={100}>
            <a
              href="#pricing"
              className="flex h-full flex-col justify-center gap-3 rounded-2xl border border-dashed border-edge-strong p-7 text-left transition-colors duration-300 hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                Not sure where to start?
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Most clients begin with missed-call text-back — live in days, ROI in week
                one — then expand from there.
              </p>
              <span className="text-sm font-semibold text-accent">
                See packages &rarr;
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
