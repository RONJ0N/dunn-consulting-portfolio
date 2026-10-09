import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LEGAL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "SMS Terms",
  description: `SMS program terms and TCPA disclosures for messaging operated by ${LEGAL.entityName}.`,
};

export default function SmsTermsPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <section className="border-b border-edge pt-16">
          <div className="mx-auto w-full max-w-3xl px-6 py-16 md:px-8 md:py-20">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Legal
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              SMS Terms
            </h1>
            <p className="mt-4 text-sm text-muted">Effective date: June 2026</p>
          </div>
        </section>

        <section>
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 md:px-8 md:py-20">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Program description
              </h2>
              <p className="leading-relaxed text-muted">
                {LEGAL.entityDescription} operates text messaging programs on
                behalf of
                the local businesses we serve. Messages may include appointment
                reminders and confirmations, missed-call text-back (a reply when
                your call to a business goes unanswered), and follow-up to
                inquiries you submitted to a business. Messages are sent on behalf
                of the business you contacted or did business with.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Message frequency and rates
              </h2>
              <p className="leading-relaxed text-muted">
                Message frequency varies based on your interactions with the
                business. Message and data rates may apply depending on your mobile
                carrier and plan.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Opting out and getting help
              </h2>
              <p className="leading-relaxed text-muted">
                Reply <strong className="text-foreground">STOP</strong> at any time
                to opt out of receiving messages. After you send STOP, you will
                receive one final message confirming you have been unsubscribed.
                Reply <strong className="text-foreground">HELP</strong> for help, or
                email us at{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-foreground underline decoration-edge-strong underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent"
                >
                  {SITE.email}
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Consent
              </h2>
              <p className="leading-relaxed text-muted">
                Consent to receive text messages is not a condition of purchasing
                any goods or services from {LEGAL.tradeName} or the businesses we
                serve.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Carrier liability
              </h2>
              <p className="leading-relaxed text-muted">
                Mobile carriers are not liable for delayed or undelivered messages.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Privacy
              </h2>
              <p className="leading-relaxed text-muted">
                For details on how we collect, use, and protect your information —
                including data we process on behalf of business clients — see our{" "}
                <a
                  href="/privacy"
                  className="text-foreground underline decoration-edge-strong underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent"
                >
                  Privacy Policy
                </a>
                . Mobile information is never shared with third parties or
                affiliates for marketing or promotional purposes.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
