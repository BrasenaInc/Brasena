import { Resend } from "resend";

const getResend = () => new Resend(process.env.RESEND_API_KEY ?? "");

const LIVE = process.env.NOTIFICATIONS_LIVE === "true";

export async function sendWaitlistConfirmation({
  name,
  email,
  phone,
  type,
  raffleNumber,
}: {
  name: string;
  email: string;
  phone: string;
  type: string;
  raffleNumber: number;
}) {
  const firstName = name.split(" ")[0];
  const typeLabel =
    type === "residential" ? "B2C — Families" : "B2B — Business";

  const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#0C0F0C;font-family:sans-serif;color:#fff;">
  <div style="max-width:520px;margin:40px auto;padding:32px;background:#111814;border-radius:16px;">
    <div style="margin-bottom:28px;">
      <span style="font-size:22px;font-weight:700;color:#8BAF8E;letter-spacing:0.12em;font-family:Georgia,serif;">BRASENA</span>
    </div>
    <h1 style="font-size:22px;font-weight:700;margin:0 0 6px;font-family:Georgia,serif;">You are on the list, ${firstName}</h1>
    <p style="color:#5A7A5A;font-size:13px;margin:0 0 28px;">Your waitlist spot has been confirmed.</p>
    <div style="background:#192019;border-radius:12px;padding:20px;margin-bottom:24px;text-align:center;position:relative;overflow:hidden;">
      <div style="height:2px;background:linear-gradient(90deg,#8BAF8E,#4A8A5A,#8BAF8E);position:absolute;top:0;left:0;right:0;"></div>
      <div style="font-size:10px;letter-spacing:0.3em;color:#5A7A5A;text-transform:uppercase;margin-bottom:8px;">Raffle Entry Confirmed</div>
      <div style="font-size:36px;font-weight:700;color:#8BAF8E;letter-spacing:0.1em;font-family:Georgia,serif;margin-bottom:6px;">#${raffleNumber}</div>
      <div style="font-size:11px;color:#4A6A4A;">Your entry number — Prize: Unknown Valuable Gift</div>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px;">
      <tr><td style="padding:8px 0;border-bottom:1px solid #1E2B1E;color:#5A7A5A;">Type</td><td style="padding:8px 0;border-bottom:1px solid #1E2B1E;text-align:right;">${typeLabel}</td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid #1E2B1E;color:#5A7A5A;">Email</td><td style="padding:8px 0;border-bottom:1px solid #1E2B1E;text-align:right;">${email}</td></tr>
      <tr><td style="padding:8px 0;color:#5A7A5A;">Phone</td><td style="padding:8px 0;text-align:right;">${phone}</td></tr>
    </table>
    <a href="https://www.instagram.com/brasenabx" style="display:block;padding:14px;border-radius:10px;background:linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045);color:#fff;font-weight:700;text-decoration:none;text-align:center;font-size:13px;margin-bottom:20px;">Follow @brasenabx on Instagram</a>
    <p style="font-size:11px;color:#3A5A3A;text-align:center;margin:0;">Brasena · The Bronx, NYC · Once we launch you can complete your profile and start ordering.</p>
  </div>
</body>
</html>
`;

  if (!LIVE) {
    console.log(`[MOCK WAITLIST EMAIL] To: ${email} | Raffle: #${raffleNumber}`);
    return;
  }

  const resend = getResend();
  try {
    await resend.emails.send({
      from: "Brasena <orders@brasena.com>",
      to: email,
      subject: `Brasena — You are on the list, ${firstName}. Raffle #${raffleNumber}`,
      html,
    });
  } catch (err) {
    console.error("[WAITLIST EMAIL ERROR]", err);
  }
}
