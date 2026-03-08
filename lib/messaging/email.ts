import React from "react";
import { render } from "@react-email/render";
import { Resend } from "resend";
import { WaitlistConfirmationEmail } from "./templates/waitlist-confirmation";

/**
 * Sends a waitlist confirmation email via Resend.
 * Gated by NOTIFICATIONS_LIVE env flag.
 * Never throws — failures are logged only.
 */
export async function sendWaitlistConfirmationEmail(
  email: string,
  firstName: string,
  referralCode: string,
  entries: number = 1
): Promise<void> {
  if (process.env.NOTIFICATIONS_LIVE !== "true") return;

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "waitlist@brasenabx.com";
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://brasenabx.com";

  if (!apiKey) {
    console.error("[Email] RESEND_API_KEY not set");
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const referralLink = `${baseUrl}/waitlist?ref=${referralCode}`;

    const html = await render(
      React.createElement(WaitlistConfirmationEmail, {
        firstName,
        referralCode,
        referralLink,
        entries,
      })
    );

    await resend.emails.send({
      from: `Brasena <${fromEmail}>`,
      to: email,
      subject: `You're on the Brasena waitlist, ${firstName}`,
      html,
    });
  } catch (err) {
    console.error("[Email] Failed to send waitlist confirmation:", err);
  }
}

/**
 * Sends a survey completion email with updated entry count.
 * Never throws — failures are logged only.
 */
export async function sendSurveyCompletionEmail(
  email: string,
  firstName: string,
  referralCode: string,
  totalEntries: number
): Promise<void> {
  if (process.env.NOTIFICATIONS_LIVE !== "true") return;

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "waitlist@brasenabx.com";
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://brasenabx.com";

  if (!apiKey) return;

  try {
    const resend = new Resend(apiKey);
    const referralLink = `${baseUrl}/waitlist?ref=${referralCode}`;

    await resend.emails.send({
      from: `Brasena <${fromEmail}>`,
      to: email,
      subject: `Survey done — you now have ${totalEntries} raffle entries`,
      html: `
        <div style="max-width:520px;margin:40px auto;font-family:Georgia,serif;color:#192019;">
          <div style="background:#192019;padding:24px 36px;border-radius:12px 12px 0 0;">
            <p style="margin:0;color:rgba(255,255,255,0.4);font-size:12px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;">BRASENA</p>
          </div>
          <div style="background:#fff;padding:32px 36px;border:1px solid rgba(0,0,0,0.07);border-top:none;">
            <h2 style="margin:0 0 12px;font-size:24px;">Thanks for completing the survey, ${firstName}.</h2>
            <p style="color:#555;line-height:1.7;margin:0 0 24px;">Your responses help us bring the right cuts and bundles to The Bronx. You've earned +2 entries for completing it.</p>
            <div style="background:#F5F2EC;border-radius:10px;padding:18px 22px;margin-bottom:24px;">
              <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#888;">YOUR TOTAL ENTRIES</p>
              <p style="margin:0;font-size:36px;font-weight:700;color:#6B8F71;">${totalEntries}</p>
            </div>
            <p style="color:#555;font-size:14px;margin:0 0 16px;">Share your referral link to earn even more:</p>
            <a href="${referralLink}" style="display:inline-block;background:#7a9e80;color:#fff;text-decoration:none;border-radius:10px;padding:12px 22px;font-size:14px;font-weight:600;">${referralLink}</a>
          </div>
          <div style="background:#F9F7F3;border:1px solid rgba(0,0,0,0.07);border-top:none;padding:18px 36px;border-radius:0 0 12px 12px;">
            <p style="margin:0;font-size:11px;color:#999;line-height:1.6;">The Bronx, NYC · Launching 2026 · © Brasena Inc.</p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("[Email] Failed to send survey completion email:", err);
  }
}
