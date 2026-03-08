import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/marketing/legal-page-shell";

export const metadata: Metadata = {
  title: "Terms & Conditions — Brasena",
  description:
    "Terms and conditions governing use of the Brasena platform and waitlist.",
};

export default function TermsPage() {
  return (
    <LegalPageShell>
      <section className="bg-[#192019] px-6 pb-16 pt-36 md:px-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
            Legal
          </p>
          <h1 className="font-serif text-[clamp(36px,5vw,56px)] font-bold leading-tight text-white">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-[15px] text-white/40">
            Last updated: March 8, 2026
          </p>
        </div>
      </section>

      <section className="bg-[#F5F0E8] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            By accessing or using the Brasena website at brasenabx.com (the
            &quot;Site&quot;) or joining the Brasena waitlist (the
            &quot;Services&quot;), you agree to be bound by these Terms and
            Conditions (&quot;Terms&quot;). If you do not agree to these Terms,
            do not use the Services.
          </p>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            These Terms apply to all visitors, waitlist members, and anyone who
            accesses or uses the Services. Brasena Inc. (&quot;Brasena,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) reserves the
            right to update these Terms at any time.
          </p>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            2. Eligibility
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            You must be at least 18 years old to use the Services or join the
            waitlist. By using the Services, you represent that you meet this
            requirement.
          </p>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            3. Waitlist Program
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            By joining the Brasena waitlist, you agree to the following:
          </p>
          <ul className="mb-4 space-y-2 pl-5">
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              You provide accurate and truthful information including your
              name, email address, phone number, and ZIP code.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              You will not create multiple waitlist accounts or use false
              information to gain additional raffle entries.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Waitlist participation does not guarantee access to the platform,
              delivery service, or any specific product.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Brasena reserves the right to remove any waitlist member who
              violates these Terms or engages in fraudulent activity.
            </li>
          </ul>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            4. Raffle Program
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            Brasena operates a pre-launch raffle as part of the waitlist
            program. The following terms govern participation:
          </p>
          <ul className="mb-4 space-y-2 pl-5">
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>No purchase necessary.</strong> A purchase is not
              required to enter or win. Joining the waitlist at
              brasenabx.com/waitlist constitutes one (1) raffle entry.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Additional entries</strong> may be earned by completing
              the optional survey (+2 entries) and referring friends who
              successfully join the waitlist (+3 entries per referral, with
              milestone bonuses at 5, 10, and 25 referrals).
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Prizes:</strong> Grand prize: $500 Brasena meat bundle.
              Second prize: $250 freezer box. Third prize: $100 bundle. Twenty
              (20) additional $25 discount codes. Prizes are non-transferable
              and have no cash value.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Winner selection:</strong> Winners will be selected by
              weighted random draw based on total entries at the time of
              drawing. The drawing will occur at or near the Brasena launch
              date.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Eligibility:</strong> Open to US residents 18 years or
              older. Employees of Brasena and their immediate family members are
              not eligible.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              <strong>Fraud:</strong> Any attempt to manipulate the raffle
              through duplicate accounts, fake referrals, or other fraudulent
              means will result in disqualification and removal from the
              waitlist.
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Brasena reserves the right to modify, suspend, or cancel the
              raffle program at any time with reasonable notice.
            </li>
          </ul>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            5. SMS Messaging Program
          </h2>
          <div className="my-6 rounded-xl border border-[#6B8F71]/20 bg-white px-6 py-5">
            <p className="text-[14px] leading-[1.8] text-[#444]">
              <strong>Program name:</strong> Brasena Waitlist Alerts
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#444]">
              <strong>Program description:</strong> By opting in, you will
              receive SMS messages from Brasena related to your waitlist
              status, referral updates, raffle entry milestones, and launch
              announcements.
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#444]">
              <strong>Message frequency:</strong> Message frequency varies.
              You may receive up to 4 messages per month during the pre-launch
              period.
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#444]">
              <strong>Message and data rates may apply.</strong> Standard
              carrier message and data rates apply.
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#444]">
              <strong>To opt out:</strong> Reply <strong>STOP</strong> to any
              message. You will receive a final confirmation and no further
              messages will be sent.
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#444]">
              <strong>For help:</strong> Reply <strong>HELP</strong> or email{" "}
              <a
                href="mailto:waitlist@brasenabx.com"
                className="text-[#6B8F71] underline underline-offset-2 hover:text-[#192019]"
              >
                waitlist@brasenabx.com
              </a>
              .
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#444]">
              We do not sell or share your phone number. See our{" "}
              <Link
                href="/privacy-policy"
                className="text-[#6B8F71] underline underline-offset-2 hover:text-[#192019]"
              >
                Privacy Policy
              </Link>{" "}
              for full details.
            </p>
          </div>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            6. Intellectual Property
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            All content on the Site, including text, graphics, logos, images,
            and software, is the property of Brasena Inc. and is protected by
            applicable intellectual property laws. You may not reproduce,
            distribute, or create derivative works from any content on the Site
            without our express written permission.
          </p>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            7. Prohibited Conduct
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            You agree not to:
          </p>
          <ul className="mb-4 space-y-2 pl-5">
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Use the Services for any unlawful purpose
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Submit false, misleading, or fraudulent information
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Attempt to gain unauthorized access to any part of the Services
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Use automated tools, bots, or scripts to interact with the
              Services
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Interfere with or disrupt the integrity or performance of the
              Services
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Create multiple accounts to gain additional raffle entries
            </li>
            <li className="list-disc text-[15px] leading-[1.8] text-[#444]">
              Harvest or scrape any data from the Site
            </li>
          </ul>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            8. Disclaimers
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED. BRASENA DOES NOT WARRANT THAT THE SERVICES WILL BE
            UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
          </p>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            Brasena is a pre-launch company. The availability of delivery
            services, product offerings, and pricing described on the Site are
            subject to change. Joining the waitlist does not guarantee delivery
            service in your area.
          </p>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            9. Limitation of Liability
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            TO THE FULLEST EXTENT PERMITTED BY LAW, BRASENA INC. SHALL NOT BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE
            SERVICES, EVEN IF BRASENA HAS BEEN ADVISED OF THE POSSIBILITY OF
            SUCH DAMAGES.
          </p>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            10. Governing Law
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            These Terms are governed by the laws of the State of New York,
            without regard to its conflict of law principles. Any disputes
            arising under these Terms shall be resolved in the state or federal
            courts located in New York County, New York.
          </p>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            11. Changes to These Terms
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            We reserve the right to update these Terms at any time. We will
            notify users of material changes by posting the updated Terms on
            this page and updating the &quot;Last updated&quot; date. Continued
            use of the Services after changes constitutes your acceptance of
            the revised Terms.
          </p>

          <h2 className="mb-4 mt-12 font-serif text-[22px] font-bold text-[#192019] first:mt-0">
            12. Contact
          </h2>
          <p className="mb-4 text-[15px] leading-[1.8] text-[#444]">
            Questions about these Terms? Contact us at:
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
