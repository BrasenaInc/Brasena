import { EmailWrapper } from "./shared/email-wrapper";

interface ReferralNotificationProps {
  firstName: string;
  referredFirstName: string;
  newEntries: number;
  totalEntries: number;
  referralCode: string;
  referralLink: string;
  referralCount: number;
  nextMilestone: number;
  milestoneBonus: number;
}

export function ReferralNotificationEmail({
  firstName,
  referredFirstName,
  newEntries,
  totalEntries,
  referralLink,
  referralCount,
  nextMilestone,
  milestoneBonus,
}: ReferralNotificationProps) {
  const remaining = nextMilestone - referralCount;

  const stats = [
    { label: "Total Entries", value: String(totalEntries), accent: true },
    { label: "Total Referrals", value: String(referralCount), accent: false },
    { label: "Until Next Bonus", value: `${remaining} more`, accent: false },
  ];

  return (
    <EmailWrapper
      previewText={`${referredFirstName} just joined using your link. +${newEntries} entries added.`}
    >
      <p
        style={{
          margin: "0 0 10px",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#7a9e80",
        }}
      >
        New Referral
      </p>

      <h1
        style={{
          margin: "0 0 10px",
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 30,
          fontWeight: 700,
          color: "#192019",
          lineHeight: 1.2,
        }}
      >
        {referredFirstName} just joined using your link.
      </h1>
      <p
        style={{
          margin: "0 0 28px",
          fontSize: 15,
          color: "#555550",
          lineHeight: 1.7,
        }}
      >
        Good work, {firstName}. You've been awarded{" "}
        <strong style={{ color: "#7a9e80" }}>+{newEntries} entries</strong> for
        the referral.
      </p>

      <table
        width="100%"
        cellPadding={0}
        cellSpacing={0}
        style={{ marginBottom: 28 }}
      >
        <tbody>
          <tr>
            {stats.map((stat) => (
              <td key={stat.label} style={{ padding: "0 6px 0 0", width: "33%" }}>
                <div
                  style={{
                    background: stat.accent
                      ? "linear-gradient(135deg, rgba(107,143,113,0.1), rgba(122,158,128,0.06))"
                      : "#F8F6F2",
                    border:
                      stat.accent
                        ? "1px solid rgba(122,158,128,0.25)"
                        : "1px solid rgba(0,0,0,0.07)",
                    borderRadius: 12,
                    padding: "14px 16px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontSize: 22,
                      fontWeight: 700,
                      color: stat.accent ? "#7a9e80" : "#192019",
                      fontFamily: '"Playfair Display", Georgia, serif',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 9,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#999990",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <div
        style={{
          background: "#192019",
          borderRadius: 14,
          padding: "18px 22px",
          marginBottom: 24,
        }}
      >
        <p
          style={{
            margin: "0 0 10px",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Next Milestone — {nextMilestone} Referrals
        </p>
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: 999,
            height: 6,
            marginBottom: 8,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${Math.min((referralCount / nextMilestone) * 100, 100)}%`,
              background: "linear-gradient(90deg, #6B8F71, #7a9e80)",
              borderRadius: 999,
            }}
          />
        </div>
        <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
          {remaining} more referral{remaining !== 1 ? "s" : ""} to unlock{" "}
          <strong style={{ color: "#7a9e80" }}>
            +{milestoneBonus} bonus entries
          </strong>
        </p>
      </div>

      <p
        style={{
          margin: "0 0 12px",
          fontSize: 14,
          color: "#555550",
          lineHeight: 1.65,
        }}
      >
        Keep sharing your link to hit the next milestone.
      </p>

      <a
        href={referralLink}
        style={{
          display: "inline-block",
          backgroundColor: "#7a9e80",
          color: "#ffffff",
          textDecoration: "none",
          borderRadius: 10,
          padding: "13px 26px",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        Keep sharing →
      </a>
    </EmailWrapper>
  );
}
