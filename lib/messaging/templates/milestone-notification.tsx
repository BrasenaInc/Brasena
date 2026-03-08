import { EmailWrapper } from "./shared/email-wrapper";

interface MilestoneNotificationProps {
  firstName: string;
  milestone: 5 | 10 | 25;
  bonusEntries: number;
  totalEntries: number;
  referralLink: string;
}

const MILESTONE_COPY: Record<
  number,
  { headline: string; sub: string; color: string }
> = {
  5: {
    headline: "Five referrals.",
    sub: "You're building something real.",
    color: "#d4af37",
  },
  10: {
    headline: "Ten referrals.",
    sub: "The Bronx is paying attention.",
    color: "#7a9e80",
  },
  25: {
    headline: "Twenty-five.",
    sub: "You're basically our ambassador.",
    color: "#c4885a",
  },
};

export function MilestoneNotificationEmail({
  firstName,
  milestone,
  bonusEntries,
  totalEntries,
  referralLink,
}: MilestoneNotificationProps) {
  const copy = MILESTONE_COPY[milestone];

  return (
    <EmailWrapper
      previewText={`${firstName}, you hit ${milestone} referrals and earned +${bonusEntries} bonus entries.`}
    >
      <div
        style={{
          display: "inline-block",
          background: `${copy.color}18`,
          border: `1px solid ${copy.color}40`,
          borderRadius: 20,
          padding: "4px 14px",
          marginBottom: 18,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: copy.color,
          }}
        >
          {milestone} Referral Milestone
        </p>
      </div>

      <h1
        style={{
          margin: "0 0 6px",
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 36,
          fontWeight: 700,
          color: "#192019",
          lineHeight: 1.1,
        }}
      >
        {copy.headline}
      </h1>
      <p
        style={{
          margin: "0 0 6px",
          fontSize: 18,
          fontStyle: "italic",
          color: "#7a9e80",
          fontFamily: '"Playfair Display", Georgia, serif',
        }}
      >
        {copy.sub}
      </p>
      <p
        style={{
          margin: "0 0 28px",
          fontSize: 15,
          color: "#555550",
          lineHeight: 1.7,
        }}
      >
        You've hit {milestone} referrals, {firstName}. That earns you{" "}
        <strong style={{ color: "#7a9e80" }}>+{bonusEntries} bonus entries</strong>{" "}
        added to your total.
      </p>

      <div
        style={{
          background: "linear-gradient(135deg, #192019 0%, #0C0F0C 100%)",
          borderRadius: 16,
          padding: "28px 32px",
          marginBottom: 28,
          textAlign: "center",
          border: `1px solid ${copy.color}30`,
        }}
      >
        <p
          style={{
            margin: "0 0 8px",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Total Raffle Entries
        </p>
        <p
          style={{
            margin: "0 0 6px",
            fontSize: 64,
            fontWeight: 700,
            color: copy.color,
            lineHeight: 1,
            fontFamily: '"Playfair Display", Georgia, serif',
          }}
        >
          {totalEntries}
        </p>
        <div
          style={{
            display: "inline-block",
            background: `${copy.color}20`,
            borderRadius: 20,
            padding: "4px 14px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 12,
              fontWeight: 600,
              color: copy.color,
            }}
          >
            +{bonusEntries} bonus just added
          </p>
        </div>
      </div>

      <p
        style={{
          margin: "0 0 16px",
          fontSize: 14,
          color: "#555550",
          lineHeight: 1.65,
        }}
      >
        Keep going — every referral keeps adding entries until launch day.
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
        Share again →
      </a>
    </EmailWrapper>
  );
}
