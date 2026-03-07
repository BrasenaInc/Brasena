/**
 * Placeholder — swap for Resend when ready.
 * Set env: RESEND_API_KEY, RESEND_FROM_EMAIL
 * Set EMAIL_PROVIDER=resend when live.
 */

export async function sendWaitlistConfirmationEmail(
  email: string,
  firstName: string,
  referralCode: string
): Promise<void> {
  if (process.env.EMAIL_PROVIDER === "resend") {
    // Future: Resend client and resend.emails.send({ ... })
    return;
  }
  // Placeholder: no-op
}
