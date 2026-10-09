import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { PlusIcon } from "@/components/icons";
import { FAQ_ITEMS } from "@/content/faq";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-edge bg-surface/40">
      <div className="mx-auto w-full max-w-3xl px-6 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions owners actually ask."
        />

        <div className="mt-12 flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.question} delay={i * 60}>
              <details
                name="faq"
                className="faq-item group rounded-2xl border border-edge bg-surface transition-colors duration-300 open:border-accent/30 hover:border-edge-strong"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-medium text-foreground transition-colors hover:text-accent-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <PlusIcon className="size-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
