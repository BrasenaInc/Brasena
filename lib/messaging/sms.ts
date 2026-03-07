/**
 * Placeholder — swap for Twilio when ready.
 * Set env: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER
 * Set SMS_PROVIDER=twilio when live.
 */

export async function sendWaitlistConfirmationSMS(
  phone: string,
  firstName: string,
  referralCode: string
): Promise<void> {
  if (process.env.SMS_PROVIDER === "twilio") {
    // Future: Twilio client and client.messages.create({ ... })
    return;
  }
  // Placeholder: log only (no console.log per project rules — use no-op or remove in production)
}
