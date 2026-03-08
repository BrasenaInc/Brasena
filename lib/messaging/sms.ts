/**
 * Waitlist SMS via Twilio.
 * Gated by NOTIFICATIONS_LIVE — never throws; failures are logged only.
 */

function toE164(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("1") && digits.length === 11) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  return `+${digits}`;
}

/**
 * Sends a waitlist confirmation SMS via Twilio.
 * Gated by NOTIFICATIONS_LIVE env flag.
 * Never throws — failures are logged only.
 */
export async function sendWaitlistConfirmationSMS(
  phone: string,
  firstName: string,
  referralCode: string
): Promise<void> {
  if (process.env.NOTIFICATIONS_LIVE !== "true") return;

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://brasenabx.com";

  if (!accountSid || !authToken || !fromNumber) {
    console.error("[SMS] Missing Twilio env vars");
    return;
  }

  try {
    const twilio = require("twilio")(accountSid, authToken);
    const referralLink = `${baseUrl}/waitlist?ref=${referralCode}`;

    await twilio.messages.create({
      to: toE164(phone),
      from: fromNumber,
      body: `Hey ${firstName}! You're on the Brasena waitlist. Share your link for more raffle entries: ${referralLink} — Reply STOP to unsubscribe.`,
    });
  } catch (err) {
    console.error("[SMS] Failed to send waitlist confirmation:", err);
  }
}

/**
 * Sends a milestone bonus notification SMS.
 * Called when a referrer hits 5, 10, or 25 referrals.
 * Never throws — failures are logged only.
 */
export async function sendMilestoneNotificationSMS(
  phone: string,
  firstName: string,
  referralCount: number,
  bonusEntries: number,
  totalEntries: number
): Promise<void> {
  if (process.env.NOTIFICATIONS_LIVE !== "true") return;

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber) return;

  try {
    const twilio = require("twilio")(accountSid, authToken);

    await twilio.messages.create({
      to: toE164(phone),
      from: fromNumber,
      body: `Brasena: Nice work ${firstName}! You hit ${referralCount} referrals and earned +${bonusEntries} bonus entries. You now have ${totalEntries} total raffle entries. Keep sharing! — Reply STOP to unsubscribe.`,
    });
  } catch (err) {
    console.error("[SMS] Failed to send milestone notification:", err);
  }
}
