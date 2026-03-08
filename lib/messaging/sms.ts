// Waitlist + milestone SMS via Twilio. Requires NOTIFICATIONS_LIVE and Twilio env vars.

function toE164(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("1") && digits.length === 11) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  return `+${digits}`;
}

function canSendSMS(): boolean {
  return (
    process.env.NOTIFICATIONS_LIVE === "true" &&
    !!process.env.TWILIO_ACCOUNT_SID &&
    !!process.env.TWILIO_AUTH_TOKEN &&
    !!process.env.TWILIO_PHONE_NUMBER
  );
}

export async function sendWaitlistConfirmationSMS(
  phone: string,
  firstName: string,
  referralCode: string
): Promise<void> {
  if (!canSendSMS()) return;

  const accountSid = process.env.TWILIO_ACCOUNT_SID!;
  const authToken = process.env.TWILIO_AUTH_TOKEN!;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER!;
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://brasenabx.com";

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

export async function sendMilestoneNotificationSMS(
  phone: string,
  firstName: string,
  referralCount: number,
  bonusEntries: number,
  totalEntries: number
): Promise<void> {
  if (!canSendSMS()) return;

  const accountSid = process.env.TWILIO_ACCOUNT_SID!;
  const authToken = process.env.TWILIO_AUTH_TOKEN!;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER!;

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
