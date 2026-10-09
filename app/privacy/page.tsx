import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LEGAL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${LEGAL.entityName} collects, uses, and protects your information.`,
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-muted">Effective date: June 2026</p>
          </div>
        </section>

        <section>
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 md:px-8 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="leading-relaxed text-muted">
                {LEGAL.entityDescription} (&quot;Dunn Consulting,&quot;
                &quot;we,&quot; &quot;us&quot;) builds websites and AI automation
                systems for local
                businesses. This policy explains what information we collect through
                this website and the services we operate, how we use it, and the
                choices you have.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Information we collect
              </h2>
              <p className="leading-relaxed text-muted">
                <strong className="text-foreground">Information you give us.</strong>{" "}
                When you fill out a contact form, use our missed-call cost
                calculator, book a call, or email us, we collect the details you
                provide — typically your name, email address, phone number, business
                name, and the numbers you enter into the calculator.
              </p>
              <p className="leading-relaxed text-muted">
                <strong className="text-foreground">
                  Information processed on behalf of our clients.
                </strong>{" "}
                The systems we build for business clients — website chatbots,
                missed-call text-back, SMS follow-up, and voice receptionists — may
                process chat transcripts, SMS messages, phone numbers, and related
                contact details belonging to those clients&apos; customers. In those
                cases we act as a data processor on behalf of the business you were
                communicating with, and that business controls the data.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                How we use information
              </h2>
              <p className="leading-relaxed text-muted">
                We use the information we collect to deliver and improve our
                services, respond to your inquiries, send you information you
                request (such as a calculator results email), schedule calls, and
                operate the automation systems our clients hire us to run. We do not
                sell your personal information, and we do not share it with third
                parties for their own marketing purposes.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Our role as a data processor
              </h2>
              <p className="leading-relaxed text-muted">
                Where we operate chatbots, SMS systems, or voice receptionists on
                behalf of a business client, that client is the data controller and
                we process data only on their instructions — to deliver the service
                they purchased. Questions about how a specific business handles your
                data should be directed to that business; we will assist them in
                responding.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Third-party processors
              </h2>
              <p className="leading-relaxed text-muted">
                We rely on a small set of trusted infrastructure providers to run
                our website and services. These currently include Vercel (hosting),
                Supabase (database), Twilio (SMS and voice), OpenAI (AI language
                models), Stripe (payments), Calendly (scheduling), and Resend
                (transactional email). Each processes data only as needed to provide
                their service to us and under their own security and privacy
                commitments.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Retention, export, and deletion
              </h2>
              <p className="leading-relaxed text-muted">
                We keep personal information only as long as needed for the purposes
                described above, or as required by law. You can request a copy of
                the information we hold about you, ask us to correct it, or ask us
                to delete it at any time by emailing{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-foreground underline decoration-edge-strong underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent"
                >
                  {SITE.email}
                </a>
                . We will respond promptly.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                SMS messaging
              </h2>
              <p className="leading-relaxed text-muted">
                Text messaging programs we operate are described in our{" "}
                <a
                  href="/sms-terms"
                  className="text-foreground underline decoration-edge-strong underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent"
                >
                  SMS Terms
                </a>
                . Mobile information is never shared with third parties or
                affiliates for marketing or promotional purposes.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Changes to this policy
              </h2>
              <p className="leading-relaxed text-muted">
                If we make material changes to this policy, we will update the
                effective date above and post the new version on this page.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Contact us
              </h2>
              <p className="leading-relaxed text-muted">
                {LEGAL.entityName}
                <br />
                Email:{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-foreground underline decoration-edge-strong underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent"
                >
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
