import Wordmark from "@/components/Wordmark";
import { LEGAL, SITE } from "@/lib/site";

const FOOTER_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/#calculator", label: "Calculator" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/solutions", label: "Custom AI Solutions" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-surface/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-3">
            <Wordmark />
            <p className="max-w-xs text-sm text-muted">{SITE.tagline}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-edge pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>
              &copy; {new Date().getFullYear()} {LEGAL.entityName}. All rights
              reserved.
            </p>
            <a href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a
              href="/sms-terms"
              className="transition-colors hover:text-foreground"
            >
              SMS Terms
            </a>
          </div>
          <a
            href={`mailto:${SITE.email}`}
            className="transition-colors hover:text-foreground"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
