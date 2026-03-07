const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://brasenabx.com";

export const MARKETING_SOURCES = [
  { label: "Instagram", value: "instagram" },
  { label: "Flyer — Fordham", value: "flyer_fordham" },
  { label: "Flyer — 149th St", value: "flyer_149st" },
  { label: "Flyer — Tremont", value: "flyer_tremont" },
  { label: "Flyer — Grand Concourse", value: "flyer_grandconcourse" },
  { label: "Influencer", value: "influencer" },
  { label: "Event", value: "event" },
] as const;

export type MarketingSource = (typeof MARKETING_SOURCES)[number]["value"];

export function buildSourceUrl(source: MarketingSource): string {
  return `${BASE_URL}/waitlist?src=${source}`;
}

export function buildReferralUrl(referralCode: string): string {
  return `${BASE_URL}/waitlist?ref=${referralCode}`;
}

export async function generateSourceQR(source: MarketingSource): Promise<string> {
  const { default: QRCode } = await import("qrcode");
  return QRCode.toDataURL(buildSourceUrl(source), {
    width: 400,
    color: { dark: "#192019", light: "#ffffff" },
    errorCorrectionLevel: "H",
  });
}

export async function generateReferralQR(referralCode: string): Promise<string> {
  const { default: QRCode } = await import("qrcode");
  return QRCode.toDataURL(buildReferralUrl(referralCode), {
    width: 400,
    color: { dark: "#192019", light: "#ffffff" },
    errorCorrectionLevel: "H",
  });
}
