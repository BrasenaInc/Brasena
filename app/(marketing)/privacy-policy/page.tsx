import type { Metadata } from "next";
import { LegalPageShell } from "@/components/marketing/legal-page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — Brasena",
  description:
    "How Brasena collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell>
      <section className="bg-[#192019] px-6 pb-16 pt-36 md:px-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
            Legal
          </p>
          <h1 className="font-serif text-[clamp(36px,5vw,56px)] font-bold leading-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[15px] text-white/40">
            Last updated: March 8, 2026
          </p>
        </div>
      </section>

      <section className="bg-[#F5F0E8] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            1. Who We Are
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            Brasena Inc. (&quot;Brasena,&quot; &quot;we,&quot; &quot;us,&quot;
            or &quot;our&quot;) operates the wholesale meat delivery platform
            available at brasenabx.com. We are based in The Bronx, New York.
            This Privacy Policy explains how we collect, use, disclose, and
            protect your personal information when you use our website,
            waitlist, or any related services (collectively, the
            &quot;Services&quot;).
          </p>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            By using our Services, you agree to the collection and use of
            information in accordance with this policy. If you do not agree,
            please do not use our Services.
          </p>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            2. Information We Collect
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            We collect the following categories of personal information:
          </p>
          <ul className="mb-4 space-y-2 pl-5">
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Contact information:</strong> First name, email address,
              and phone number provided when joining the waitlist.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Location information:</strong> ZIP code, used to
              understand demand by neighborhood and plan delivery coverage.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Household information:</strong> Household size, used to
              tailor product recommendations and bundle sizing.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Survey responses:</strong> Answers to optional survey
              questions about your meat purchasing habits, preferences, and
              budget.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Referral data:</strong> Referral codes used and referrals
              you generate, used to track raffle entries and reward
              participation.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Communication preferences:</strong> Whether you have
              opted in to receive SMS and/or email communications from us.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Usage data:</strong> Browser type, IP address, pages
              visited, and referring URLs, collected automatically via cookies
              and server logs.
            </li>
          </ul>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            3. How We Use Your Information
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            We use the information we collect to:
          </p>
          <ul className="mb-4 space-y-2 pl-5">
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Add you to the Brasena pre-launch waitlist and manage your raffle
              entries
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Send you waitlist confirmation, referral links, and launch
              notifications via SMS and/or email, based on your communication
              preferences
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Analyze survey responses in aggregate to inform our product and
              delivery offering
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Track and award referral bonuses and milestone raffle entries
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Communicate service updates, promotions, and announcements (only
              if you have opted in)
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Improve and optimize our website and user experience
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Comply with legal obligations
            </li>
          </ul>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            4. SMS Communications
          </h2>
          <div className="my-6 rounded-xl border border-[#6B8F71]/20 bg-white px-6 py-5">
            <p className="text-[14px] leading-[1.8] text-[#444]">
              <strong>SMS opt-in:</strong> When you join the Brasena waitlist
              and check the &quot;Text me launch deals and giveaway
              updates&quot; checkbox, you consent to receive SMS messages from
              Brasena, including waitlist confirmations, referral updates,
              milestone notifications, and launch announcements.
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#444]">
              <strong>Message frequency:</strong> Message frequency varies. You
              may receive up to 4 messages per month during the pre-launch
              period.
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#444]">
              <strong>Message and data rates may apply.</strong> Standard
              carrier message and data rates apply to all SMS messages sent and
              received.
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#444]">
              <strong>Opt-out:</strong> Reply <strong>STOP</strong> to any SMS
              message to unsubscribe at any time. You will receive one final
              confirmation message. No further messages will be sent.
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#444]">
              <strong>Help:</strong> Reply <strong>HELP</strong> for help, or
              contact us at{" "}
              <a
                href="mailto:waitlist@brasenabx.com"
                className="text-[#6B8F71] underline underline-offset-2 hover:text-[#192019]"
              >
                waitlist@brasenabx.com
              </a>
              .
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#444]">
              We do not sell or share your phone number with third parties for
              their marketing purposes. Your phone number is used solely to send
              you messages from Brasena.
            </p>
          </div>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            5. How We Share Your Information
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            We do not sell your personal information. We may share your
            information only in the following limited circumstances:
          </p>
          <ul className="mb-4 space-y-2 pl-5">
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Service providers:</strong> We use Twilio to send SMS
              messages and Resend to send transactional emails. These
              providers process your contact information solely to deliver
              messages on our behalf and are contractually prohibited from using
              it for any other purpose.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Analytics:</strong> We may share anonymized, aggregated
              data with analytics providers to understand usage patterns. This
              data cannot be used to identify you.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Legal requirements:</strong> We may disclose your
              information if required to do so by law or in response to valid
              legal process.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Business transfers:</strong> If Brasena is acquired or
              merged with another company, your information may be transferred
              as part of that transaction. We will notify you before your
              information is transferred and becomes subject to a different
              privacy policy.
            </li>
          </ul>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            6. Data Retention
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            We retain your personal information for as long as your waitlist
            record is active or as needed to operate the Services. If you
            request deletion of your data, we will remove your personal
            information within 30 days, except where we are required to retain
            it by law.
          </p>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            7. Your Rights
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            Depending on your location, you may have the right to:
          </p>
          <ul className="mb-4 space-y-2 pl-5">
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Access the personal information we hold about you
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Request correction of inaccurate information
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Request deletion of your personal information
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Opt out of SMS or email communications at any time
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Request a copy of your data in a portable format
            </li>
          </ul>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:waitlist@brasenabx.com"
              className="text-[#6B8F71] underline underline-offset-2 hover:text-[#192019]"
            >
              waitlist@brasenabx.com
            </a>
            . We will respond within 30 days.
          </p>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            8. Cookies and Tracking
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            Our website uses cookies and similar tracking technologies to
            improve your experience, analyze traffic, and understand how
            visitors use the site. You can control cookie settings through your
            browser. Disabling cookies may affect the functionality of certain
            features.
          </p>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            9. Children&apos;s Privacy
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            Our Services are not directed to children under the age of 13. We
            do not knowingly collect personal information from children. If you
            believe we have inadvertently collected information from a child,
            please contact us immediately at{" "}
            <a
              href="mailto:waitlist@brasenabx.com"
              className="text-[#6B8F71] underline underline-offset-2 hover:text-[#192019]"
            >
              waitlist@brasenabx.com
            </a>
            .
          </p>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            10. Changes to This Policy
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            We may update this Privacy Policy from time to time. We will notify
            you of material changes by posting the updated policy on this page
            and updating the &quot;Last updated&quot; date above. Continued use
            of the Services after changes constitutes your acceptance of the
            revised policy.
          </p>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            11. Contact Us
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            If you have questions about this Privacy Policy or your personal
            data, contact us at:
          </p>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            Brasena Inc.
            <br />
            The Bronx, New York
            <br />
            <a
              href="mailto:waitlist@brasenabx.com"
              className="text-[#6B8F71] underline underline-offset-2 hover:text-[#192019]"
            >
              waitlist@brasenabx.com
            </a>
            <br />
            <a
              href="https://brasenabx.com"
              className="text-[#6B8F71] underline underline-offset-2 hover:text-[#192019]"
            >
              brasenabx.com
            </a>
          </p>
        </div>
      </section>
    </LegalPageShell>
  );
}
