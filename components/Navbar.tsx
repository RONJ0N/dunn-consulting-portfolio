"use client";

import { useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import Wordmark from "@/components/Wordmark";
import { ArrowRightIcon } from "@/components/icons";
import { BOOKING_URL } from "@/lib/site";
import { trackBookingClick } from "@/lib/track";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/#results", label: "Results" },
  { href: "/#calculator", label: "Calculator" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/solutions", label: "Custom AI" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge bg-background/80 backdrop-blur-md">
      <ScrollProgress />
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8"
      >
        <a
          href="#top"
          className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Dunn Consulting — back to top"
        >
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookingClick("navbar")}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Book a call
            <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-10 items-center justify-center rounded-md text-foreground focus-visible:outline-2 focus-visible:outline-accent lg:hidden"
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
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-edge bg-background lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base text-muted transition-colors hover:bg-raised hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackBookingClick("navbar-mobile");
                  setOpen(false);
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-background"
              >
                Book a call
                <ArrowRightIcon className="size-4" />
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
