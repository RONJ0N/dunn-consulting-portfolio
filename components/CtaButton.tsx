"use client";

import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { trackBookingClick } from "@/lib/track";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  /** When set, fires a `book_call_click` analytics event with this location label. */
  trackLocation?: string;
  className?: string;
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  external = false,
  trackLocation,
  className = "",
}: CtaButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variantClasses =
    variant === "primary"
      ? "btn-shine bg-accent text-background hover:bg-accent-bright hover:shadow-[0_0_28px_-6px] hover:shadow-accent/60"
      : "border border-edge-strong text-foreground hover:border-accent/60 hover:text-accent-bright hover:shadow-[0_0_22px_-8px] hover:shadow-accent/40";

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={trackLocation ? () => trackBookingClick(trackLocation) : undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}
