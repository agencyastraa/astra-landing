"use client";

import { useState } from "react";

const cases = [
  {
    tab: "IDACA",
    industry: "Medical Imaging",
    client: "IDACA",
    tag: "Medical Imaging · 9 Locations · USA",
    before:
      "You're generating $809K/month across 9 locations — but you have no idea which ones are actually driving the revenue. Budget gets spread evenly, nothing moves, and growth has been flat for 6 months. You keep paying for reports full of clicks and impressions that don't tell you anything useful.",
    badge: null,
    bigNum: "$1.12M",
    bigLabel: "Monthly revenue in 90 days — up from $809K",
    metrics: [
      { val: "+38%", key: "Revenue growth" },
      { val: "Day 60", key: "$1M/month milestone" },
    ],
    rows: [
      { k: "Ad spend", v: "$10K → $14K/mo" },
      { k: "Timeline", v: "90 days" },
      { k: "Channel", v: "Meta Ads" },
    ],
  },
  {
    tab: "OneTool",
    industry: "E-commerce",
    client: "OneTool",
    tag: "Construction E-commerce · USA",
    before:
      "You're doing 35–40 orders a day and spending $65K/year on ads that aren't scaling. Every time you try to push more budget, your cost per purchase goes up. The creative's gone stale, the audiences are burned out, and you're starting to wonder if paid media even works for your category.",
    badge: "12-month period",
    bigNum: "8.4x",
    bigLabel: "$65K spend → $549K revenue over 1 year",
    metrics: [
      { val: "100+", key: "Orders per day" },
      { val: "75 days", key: "To full scale" },
    ],
    rows: [
      { k: "Daily orders before", v: "35–40/day" },
      { k: "Daily orders after", v: "100+/day" },
      { k: "Channel", v: "Meta Ads" },
      { k: "Side effect", v: "Had to pause — ran out of inventory" },
    ],
  },
  {
    tab: "Tu Proyecto Fitness",
    industry: "Gym B2B",
    client: "Tu Proyecto Fitness",
    tag: "Gym · B2B High Ticket · LATAM",
    before:
      "You've got a strong high-ticket offer. But your pipeline runs entirely on referrals and word of mouth — which means growth is capped by how many conversations you can have. You've tried paid ads before, but they brought in leads that weren't qualified and wasted your team's time.",
    badge: null,
    bigNum: "38x",
    bigLabel: "ROAS — $6K spend → $230K revenue",
    metrics: [
      { val: "$200K+", key: "Single client value" },
      { val: "2 months", key: "Timeline" },
    ],
    rows: [
      { k: "Ad spend", v: "$6K total" },
      { k: "Channel", v: "Meta Ads" },
      { k: "Key insight", v: "3D design as funnel entry point" },
    ],
  },
  {
    tab: "Xcore.fit",
    industry: "Gym SaaS",
    client: "Xcore.fit",
    tag: "Gym SaaS · 12 Countries",
    before:
      "You're operating in 12 countries but almost every new client comes from a referral or a flight your sales team took. Growth is real — but it's completely dependent on human effort. There's no system. If your team stops moving, your pipeline stops moving.",
    badge: null,
    bigNum: "8–12",
    bigLabel: "New gyms/month — across multiple countries simultaneously",
    metrics: [
      { val: "$5K", key: "Monthly ad spend" },
      { val: "12", key: "Countries active" },
    ],
    rows: [
      { k: "Previous model", v: "Referrals + travel" },
      { k: "Now", v: "Automated + chatbot qualification" },
      { k: "Revenue model", v: "Monthly subscription — compounding MRR" },
    ],
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section
      style={{
        padding: "7rem 4rem",
        background: "var(--black)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--white)",
              lineHeight: 1.1,
            }}
          >
            Real accounts.<br />Real numbers.
          </h2>
          <p
            style={{
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.45)",
              maxWidth: 220,
              textAlign: "right",
              lineHeight: 1.5,
            }}
          >
            Results from active clients — not cherry-picked outliers.
          </p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          style={{
            display: "flex",
            border: "0.5px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            overflow: "hidden",
            marginBottom: "2rem",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          {cases.map((cs, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              style={{
                flex: 1,
                padding: "1rem 0.5rem",
                background: active === i ? "rgba(241,42,41,0.15)" : "transparent",
                border: "none",
                borderRight: i < cases.length - 1 ? "0.5px solid rgba(255,255,255,0.08)" : "none",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.78rem",
                fontWeight: active === i ? 500 : 400,
                color: active === i ? "var(--red)" : "rgba(255,255,255,0.5)",
                textAlign: "center",
                lineHeight: 1.4,
                cursor: "pointer",
              }}
            >
              {cs.tab}
              <span
                style={{
                  display: "block",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: active === i ? "rgba(241,42,41,0.5)" : "rgba(255,255,255,0.2)",
                  marginTop: 2,
                }}
              >
                {cs.industry}
              </span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          {/* Left */}
          <div style={{ background: "#1a1614", padding: "2.5rem 2.25rem" }}>
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: "1.25rem",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              The situation
            </p>
            <div
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "1.8rem",
                fontWeight: 900,
                textTransform: "uppercase",
                color: "var(--white)",
                lineHeight: 1,
                marginBottom: "0.25rem",
              }}
            >
              {c.client}
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "2rem",
                fontWeight: 300,
              }}
            >
              {c.tag}
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 6,
                padding: "1.25rem 1.5rem",
                borderLeft: "2px solid rgba(241,42,41,0.4)",
              }}
            >
              <div
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: "0.6rem",
                  fontWeight: 500,
                }}
              >
                Sound familiar?
              </div>
              <p
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {c.before}
              </p>
            </div>
          </div>

          {/* Right */}
          <div
            style={{
              background: "#221e1b",
              padding: "2.5rem 2.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "var(--red)",
              }}
            >
              Results
            </p>
            {c.badge && (
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.62rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: "rgba(241,42,41,0.15)",
                  color: "var(--red)",
                  padding: "2px 8px",
                  borderRadius: 3,
                  fontWeight: 500,
                  alignSelf: "flex-start",
                }}
              >
                {c.badge}
              </span>
            )}
            <div style={{ borderBottom: "0.5px solid rgba(255,255,255,0.08)", paddingBottom: "1.5rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "3.5rem",
                  fontWeight: 900,
                  color: "var(--red)",
                  lineHeight: 1,
                }}
              >
                {c.bigNum}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 300,
                  marginTop: "0.2rem",
                }}
              >
                {c.bigLabel}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {c.metrics.map((m, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: "var(--white)",
                      lineHeight: 1,
                    }}
                  >
                    {m.val}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", fontWeight: 300, marginTop: 2 }}>
                    {m.key}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", marginTop: "auto" }}>
              {c.rows.map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.78rem",
                    borderBottom: i < c.rows.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
                    paddingBottom: "0.35rem",
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>{r.k}</span>
                  <span style={{ color: "var(--white)", fontWeight: 500 }}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
