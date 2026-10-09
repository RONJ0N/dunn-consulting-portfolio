import { SITE } from "@/lib/site";

export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="flex size-8 items-center justify-center rounded-lg bg-accent font-display text-lg font-bold text-background"
      >
        D
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        {SITE.name}
      </span>
    </span>
  );
}
