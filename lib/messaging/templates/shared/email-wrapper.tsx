import React from "react";

interface EmailWrapperProps {
  previewText?: string;
  children: React.ReactNode;
}

export function EmailWrapper({ previewText, children }: EmailWrapperProps) {
  const gridStyle = `repeating-linear-gradient(
    0deg,
    transparent,
    transparent 39px,
    rgba(255,255,255,0.04) 39px,
    rgba(255,255,255,0.04) 40px
  ), repeating-linear-gradient(
    90deg,
    transparent,
    transparent 39px,
    rgba(255,255,255,0.04) 39px,
    rgba(255,255,255,0.04) 40px
  ), #192019`;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#F8F6F2",
          fontFamily: '"DM Sans", Georgia, serif',
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {previewText && (
          <div
            style={{
              display: "none",
              overflow: "hidden",
              maxHeight: 0,
              opacity: 0,
              fontSize: 1,
              color: "#F8F6F2",
            }}
          >
            {previewText}
          </div>
        )}

        <div
          style={{
            maxWidth: 560,
            margin: "32px auto",
            backgroundColor: "#ffffff",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              height: 3,
              background:
                "linear-gradient(90deg, #6B8F71, #7a9e80, #8aab8f)",
            }}
          />

          <div
            style={{
              background: gridStyle,
              padding: "28px 40px 24px",
            }}
          >
            <table width="100%" cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr>
                  <td>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontSize: 22,
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        color: "#ffffff",
                      }}
                    >
                      BRASENA
                    </p>
                    <p
                      style={{
                        margin: "2px 0 0",
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.35)",
                      }}
                    >
                      Wholesale Platform · The Bronx, NY
                    </p>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(122,158,128,0.7)",
                      }}
                    >
                      Launching 2026
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ padding: "36px 40px 32px" }}>{children}</div>

          <div
            style={{
              backgroundColor: "#F8F6F2",
              borderTop: "1px solid rgba(0,0,0,0.06)",
              padding: "20px 40px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 11,
                color: "#999990",
                lineHeight: 1.7,
              }}
            >
              You received this because you signed up at{" "}
              <a
                href="https://brasenabx.com"
                style={{ color: "#7a9e80", textDecoration: "none" }}
              >
                brasenabx.com
              </a>
              .<br />
              © 2026 Brasena Inc. · The Bronx, New York
              <br />
              <a
                href="https://brasenabx.com/privacy-policy"
                style={{ color: "#999990" }}
              >
                Privacy Policy
              </a>
              {" · "}
              <a href="https://brasenabx.com/terms" style={{ color: "#999990" }}>
                Terms
              </a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
