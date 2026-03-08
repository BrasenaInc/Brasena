import { EmailWrapper } from "./shared/email-wrapper";

interface WaitlistConfirmationProps {
  firstName: string;
  referralCode: string;
  referralLink: string;
  entries: number;
}

export function WaitlistConfirmationEmail({
  firstName,
  referralCode,
  referralLink,
  entries,
}: WaitlistConfirmationProps) {
  const entryLadder = [
    { label: "Join the waitlist", bonus: "+1 entry", done: true },
    { label: "Complete the survey", bonus: "+2 entries", done: false },
    { label: "Refer a friend", bonus: "+3 per referral", done: false },
    { label: "5 referrals", bonus: "+10 bonus", done: false },
    { label: "10 referrals", bonus: "+25 bonus", done: false },
    { label: "25 referrals", bonus: "+75 bonus", done: false },
  ];

  return (
    <EmailWrapper
      previewText={`You're on the Brasena waitlist, ${firstName}. Here's your referral link.`}
    >
      <h1
        style={{
          margin: "0 0 8px",
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 32,
          fontWeight: 700,
          color: "#192019",
          lineHeight: 1.15,
        }}
      >
        You're on the list, {firstName}.
      </h1>
      <p
        style={{
          margin: "0 0 28px",
          fontSize: 15,
          color: "#555550",
          lineHeight: 1.7,
        }}
      >
        You're officially entered in Brasena's grand opening raffle. We'll reach
        out the moment we launch in The Bronx.
      </p>

      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(107,143,113,0.1), rgba(122,158,128,0.06))",
          border: "1px solid rgba(122,158,128,0.25)",
          borderRadius: 14,
          padding: "20px 24px",
          marginBottom: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 4px",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#999990",
            }}
          >
            Your Raffle Entries
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 48,
              fontWeight: 700,
              color: "#7a9e80",
              lineHeight: 1,
              fontFamily: '"Playfair Display", Georgia, serif',
            }}
          >
            {entries}
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p
            style={{
              margin: "0 0 3px",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#999990",
            }}
          >
            Referral Code
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              fontWeight: 600,
              color: "#192019",
              fontFamily: "monospace",
            }}
          >
            {referralCode}
          </p>
        </div>
      </div>

      <p
        style={{
          margin: "0 0 6px",
          fontSize: 15,
          fontWeight: 600,
          color: "#192019",
        }}
      >
        Earn more entries — share your link
      </p>
      <p
        style={{
          margin: "0 0 14px",
          fontSize: 14,
          color: "#555550",
          lineHeight: 1.65,
        }}
      >
        Every friend who signs up with your link gives you +3 entries. Hit 5
        referrals for a +10 bonus.
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
          Your Personal Link
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
          letterSpacing: "0.01em",
          marginBottom: 32,
        }}
      >
        Share your link →
      </a>

      <div
        style={{
          borderTop: "1px solid rgba(0,0,0,0.07)",
          paddingTop: 24,
        }}
      >
        <p
          style={{
            margin: "0 0 14px",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#999990",
          }}
        >
          How to earn more entries
        </p>
        {entryLadder.map((row, i) => (
          <div
            key={row.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "9px 0",
              borderBottom:
                i < entryLadder.length - 1
                  ? "1px solid rgba(0,0,0,0.05)"
                  : "none",
            }}
          >
            <span
              style={{
                fontSize: 13,
                color: row.done ? "#7a9e80" : "#555550",
                fontWeight: row.done ? 600 : 400,
              }}
            >
              {row.done ? "✓ " : ""}
              {row.label}
            </span>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: row.done ? "#7a9e80" : "#192019",
              }}
            >
              {row.bonus}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 28,
          borderTop: "1px solid rgba(0,0,0,0.07)",
          paddingTop: 20,
        }}
      >
        <p
          style={{
            margin: "0 0 12px",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#999990",
          }}
        >
          Grand Opening Raffle Prizes
        </p>
        <table width="100%" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              {[
                {
                  place: "Grand Prize",
                  value: "$500 Meat Bundle",
                  color: "#d4af37",
                },
                {
                  place: "2nd Place",
                  value: "$250 Freezer Box",
                  color: "#b0b0b0",
                },
                { place: "3rd Place", value: "$100 + 20×$25", color: "#c4885a" },
              ].map((p) => (
                <td
                  key={p.place}
                  style={{
                    textAlign: "center",
                    padding: "10px 6px",
                    background: "#F8F6F2",
                    borderRadius: 8,
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 3px",
                      fontSize: 13,
                      fontWeight: 700,
                      color: p.color,
                    }}
                  >
                    {p.value}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 9,
                      color: "#999990",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.place}
                  </p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </EmailWrapper>
  );
}
