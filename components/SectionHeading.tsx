import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal>
      <div className={`flex max-w-2xl flex-col gap-4 ${alignClasses} ${align === "center" ? "mx-auto" : ""}`}>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
