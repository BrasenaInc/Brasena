interface WaitlistConfirmationProps {
  firstName: string;
  referralCode: string;
  referralLink: string;
  entries: number;
}

/**
 * React-compatible HTML email template for waitlist confirmation.
 * Uses inline styles only — email clients strip external CSS.
 * Compatible with Resend's react prop.
 */
export function WaitlistConfirmationEmail({
  firstName,
  referralCode,
  referralLink,
  entries,
}: WaitlistConfirmationProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>You&apos;re on the Brasena waitlist</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#F5F2EC",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            maxWidth: 520,
            margin: "40px auto",
            backgroundColor: "#ffffff",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          <div
            style={{
              backgroundColor: "#192019",
              padding: "28px 40px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.4)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              BRASENA
            </p>
          </div>

          <div style={{ padding: "36px 40px" }}>
            <h1
              style={{
                margin: "0 0 10px",
                fontSize: 28,
                fontWeight: 700,
                color: "#192019",
                lineHeight: 1.15,
              }}
            >
              You&apos;re on the list, {firstName}.
            </h1>
            <p
              style={{
                margin: "0 0 28px",
                fontSize: 15,
                color: "#555555",
                lineHeight: 1.7,
              }}
            >
              You&apos;re officially on the Brasena waitlist and entered in our
              grand opening raffle. We&apos;ll reach out the moment we launch in
              The Bronx.
            </p>

            <div
              style={{
                backgroundColor: "#F5F2EC",
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 28,
              }}
            >
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#888888",
                }}
              >
                YOUR RAFFLE ENTRIES
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 40,
                  fontWeight: 700,
                  color: "#6B8F71",
                  lineHeight: 1,
                }}
              >
                {entries}
              </p>
            </div>

            <p
              style={{
                margin: "0 0 8px",
                fontSize: 15,
                fontWeight: 600,
                color: "#192019",
              }}
            >
              Earn more entries — share your link
            </p>
            <p
              style={{
                margin: "0 0 18px",
                fontSize: 14,
                color: "#555555",
                lineHeight: 1.65,
              }}
            >
              Every friend who signs up with your link gives you +3 entries. Hit
              5 referrals for +10 bonus entries.
            </p>

            <div
              style={{
                backgroundColor: "#F5F2EC",
                borderRadius: 10,
                padding: "13px 16px",
                marginBottom: 22,
                wordBreak: "break-all",
              }}
            >
              <p
                style={{
                  margin: "0 0 3px",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#888888",
                }}
              >
                YOUR PERSONAL LINK
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
                padding: "13px 24px",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Share your link
            </a>

            <div
              style={{
                marginTop: 32,
                borderTop: "1px solid rgba(0,0,0,0.07)",
                paddingTop: 24,
              }}
            >
              <p
                style={{
                  margin: "0 0 14px",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#888888",
                }}
              >
                HOW TO EARN MORE ENTRIES
              </p>
              {[
                { action: "Complete the survey", bonus: "+2 entries" },
                { action: "Refer a friend", bonus: "+3 per referral" },
                { action: "5 referrals milestone", bonus: "+10 bonus" },
                { action: "10 referrals milestone", bonus: "+25 bonus" },
                { action: "25 referrals milestone", bonus: "+75 bonus" },
              ].map((row) => (
                <div
                  key={row.action}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.04)",
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: "#555555" }}>{row.action}</span>
                  <span style={{ fontWeight: 600, color: "#6B8F71" }}>
                    {row.bonus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,0.07)",
              padding: "20px 40px",
              backgroundColor: "#F9F7F3",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 11,
                color: "#999999",
                lineHeight: 1.6,
              }}
            >
              The Bronx, NYC · Launching 2026 · © Brasena Inc.
              <br />
              You received this because you signed up at brasenabx.com.
              <br />
              Your referral code: <strong>{referralCode}</strong>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
