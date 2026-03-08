import { EmailWrapper } from "./shared/email-wrapper";

interface SurveyCompletionProps {
  firstName: string;
  referralCode: string;
  referralLink: string;
  totalEntries: number;
  bonusEarned: number;
}

export function SurveyCompletionEmail({
  firstName,
  referralCode,
  referralLink,
  totalEntries,
  bonusEarned,
}: SurveyCompletionProps) {
  return (
    <EmailWrapper
      previewText={`Survey done, ${firstName}. You earned +${bonusEarned} bonus entries.`}
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
        Survey Complete
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
        Thanks for telling us about yourself, {firstName}.
      </h1>
      <p
        style={{
          margin: "0 0 28px",
          fontSize: 15,
          color: "#555550",
          lineHeight: 1.7,
        }}
      >
        Your responses help us bring the right cuts and bundles to The Bronx.
        You've earned{" "}
        <strong style={{ color: "#7a9e80" }}>+{bonusEarned} bonus entries</strong>{" "}
        for completing it.
      </p>

      <div
        style={{
          background: "linear-gradient(135deg, #192019, #1e2b1e)",
          borderRadius: 14,
          padding: "24px 28px",
          marginBottom: 28,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <table width="100%" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              <td>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  Total Raffle Entries
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 52,
                    fontWeight: 700,
                    color: "#7a9e80",
                    lineHeight: 1,
                    fontFamily: '"Playfair Display", Georgia, serif',
                  }}
                >
                  {totalEntries}
                </p>
              </td>
              <td style={{ textAlign: "right", verticalAlign: "bottom" }}>
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(122,158,128,0.2)",
                    border: "1px solid rgba(122,158,128,0.3)",
                    borderRadius: 20,
                    padding: "4px 12px",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#7a9e80",
                    }}
                  >
                    +{bonusEarned} earned today
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p
        style={{
          margin: "0 0 6px",
          fontSize: 15,
          fontWeight: 600,
          color: "#192019",
        }}
      >
        Keep earning — share your referral link
      </p>
      <p
        style={{
          margin: "0 0 14px",
          fontSize: 14,
          color: "#555550",
          lineHeight: 1.65,
        }}
      >
        Each friend who signs up with your link gives you +3 more entries.
      </p>

      <div
        style={{
          background: "#F8F6F2",
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: 10,
          padding: "12px 16px",
          marginBottom: 16,
          wordBreak: "break-all",
        }}
      >
        <p
          style={{
            margin: "0 0 2px",
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#999990",
          }}
        >
          Your Referral Link
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            color: "#192019",
            fontFamily: "monospace",
          }}
        >
          {referralLink}
        </p>
      </div>

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
        Share your link →
      </a>
    </EmailWrapper>
  );
}
