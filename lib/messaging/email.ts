import React from "react";
import { render } from "@react-email/render";
import { Resend } from "resend";
import { WaitlistConfirmationEmail } from "./templates/waitlist-confirmation";
import { SurveyCompletionEmail } from "./templates/survey-completion";
import { ReferralNotificationEmail } from "./templates/referral-notification";
import { MilestoneNotificationEmail } from "./templates/milestone-notification";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://brasenabx.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "waitlist@brasenabx.com";

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("[Email] RESEND_API_KEY not set");
    return null;
  }
  return new Resend(key);
}

function isLive(): boolean {
  return process.env.NOTIFICATIONS_LIVE === "true";
}

export async function sendWaitlistConfirmationEmail(
  email: string,
  firstName: string,
  referralCode: string,
  entries: number = 1
): Promise<void> {
  if (!isLive()) return;
  const resend = getResend();
  if (!resend) return;

  try {
    const referralLink = `${BASE_URL}/waitlist?ref=${referralCode}`;
    const html = await render(
      React.createElement(WaitlistConfirmationEmail, {
        firstName,
        referralCode,
        referralLink,
        entries,
      })
    );
    await resend.emails.send({
      from: `Brasena <${FROM_EMAIL}>`,
      to: email,
      subject: "Brasena — You're on the waitlist",
      html,
    });
  } catch (err) {
    console.error("[Email] waitlist confirmation failed:", err);
  }
}

export async function sendSurveyCompletionEmail(
  email: string,
  firstName: string,
  referralCode: string,
  totalEntries: number,
  bonusEarned: number = 2
): Promise<void> {
  if (!isLive()) return;
  const resend = getResend();
  if (!resend) return;

  try {
    const referralLink = `${BASE_URL}/waitlist?ref=${referralCode}`;
    const html = await render(
      React.createElement(SurveyCompletionEmail, {
        firstName,
        referralCode,
        referralLink,
        totalEntries,
        bonusEarned,
      })
    );
    await resend.emails.send({
      from: `Brasena <${FROM_EMAIL}>`,
      to: email,
      subject: "Brasena — Survey complete, you've got bonus entries",
      html,
    });
  } catch (err) {
    console.error("[Email] survey completion failed:", err);
  }
}

export async function sendReferralNotificationEmail(
  email: string,
  firstName: string,
  referredFirstName: string,
  referralCode: string,
  newEntries: number,
  totalEntries: number,
  referralCount: number
): Promise<void> {
  if (!isLive()) return;
  const resend = getResend();
  if (!resend) return;

  try {
    const referralLink = `${BASE_URL}/waitlist?ref=${referralCode}`;
    const nextMilestone =
      referralCount < 5 ? 5 : referralCount < 10 ? 10 : 25;
    const milestoneBonus =
      nextMilestone === 5 ? 10 : nextMilestone === 10 ? 25 : 75;

    const html = await render(
      React.createElement(ReferralNotificationEmail, {
        firstName,
        referredFirstName,
        newEntries,
        totalEntries,
        referralCode,
        referralLink,
        referralCount,
        nextMilestone,
        milestoneBonus,
      })
    );
    await resend.emails.send({
      from: `Brasena <${FROM_EMAIL}>`,
      to: email,
      subject: "Brasena — Someone used your referral link",
      html,
    });
  } catch (err) {
    console.error("[Email] referral notification failed:", err);
  }
}

export async function sendMilestoneNotificationEmail(
  email: string,
  firstName: string,
  referralCode: string,
  milestone: 5 | 10 | 25,
  bonusEntries: number,
  totalEntries: number
): Promise<void> {
  if (!isLive()) return;
  const resend = getResend();
  if (!resend) return;

  try {
    const referralLink = `${BASE_URL}/waitlist?ref=${referralCode}`;
    const html = await render(
      React.createElement(MilestoneNotificationEmail, {
        firstName,
        milestone,
        bonusEntries,
        totalEntries,
        referralLink,
      })
    );
    await resend.emails.send({
      from: `Brasena <${FROM_EMAIL}>`,
      to: email,
      subject: "Brasena — You hit a referral milestone",
      html,
    });
  } catch (err) {
    console.error("[Email] milestone notification failed:", err);
  }
}
