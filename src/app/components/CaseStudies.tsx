"use client";

import { useState } from "react";

const fd = "var(--font-display), sans-serif";
const fb = "var(--font-body), sans-serif";

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
      className="m-cases"
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Header */}
        <div className="cases-header" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "3rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "var(--white)",
            lineHeight: 1.1,
          }}>
            Real accounts.<br />Real numbers.
          </h2>
          <p className="cases-sub" style={{
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.45)",
            maxWidth: 220,
            textAlign: "right",
            lineHeight: 1.5,
          }}>
            Results from active clients — not cherry-picked outliers.
          </p>
        </div>

        {/* ══════ DESKTOP LAYOUT ══════ */}
        <div className="cases-desktop">
          <div role="tablist" style={{
            display: "flex",
            border: "0.5px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            marginBottom: "2rem",
            background: "rgba(255,255,255,0.04)",
          }}>
            {cases.map((cs, i) => (
              <button key={i} role="tab" aria-selected={active === i} onClick={() => setActive(i)} style={{
                flex: 1, padding: "1rem 0.5rem",
                background: active === i ? "rgba(241,42,41,0.15)" : "transparent",
                border: "none",
                borderRight: i < cases.length - 1 ? "0.5px solid rgba(255,255,255,0.08)" : "none",
                fontFamily: fb, fontSize: "0.78rem", fontWeight: active === i ? 500 : 400,
                color: active === i ? "var(--red)" : "rgba(255,255,255,0.5)",
                textAlign: "center", lineHeight: 1.4, cursor: "pointer",
              }}>
                {cs.tab}
                <span style={{ display: "block", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: active === i ? "rgba(241,42,41,0.5)" : "rgba(255,255,255,0.2)", marginTop: 2 }}>
                  {cs.industry}
                </span>
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.06)", borderRadius: 8 }}>
            <div style={{ background: "#1a1614", padding: "2.5rem 2.25rem", borderRadius: "8px 0 0 8px" }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1.25rem", color: "rgba(255,255,255,0.35)" }}>The situation</p>
              <div style={{ fontFamily: fd, fontSize: "1.8rem", fontWeight: 900, textTransform: "uppercase", color: "var(--white)", lineHeight: 1, marginBottom: "0.25rem" }}>{c.client}</div>
              <div style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "2rem", fontWeight: 300 }}>{c.tag}</div>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "1.25rem 1.5rem", borderLeft: "2px solid rgba(241,42,41,0.4)" }}>
                <div style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.6rem", fontWeight: 500 }}>Sound familiar?</div>
                <p style={{ fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}>{c.before}</p>
              </div>
            </div>
            <div style={{ background: "#221e1b", padding: "2.5rem 2.25rem", display: "flex", flexDirection: "column", gap: "1.5rem", borderRadius: "0 8px 8px 0" }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, color: "var(--red)" }}>Results</p>
              {c.badge && <span style={{ display: "inline-block", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", background: "rgba(241,42,41,0.15)", color: "var(--red)", padding: "2px 8px", borderRadius: 3, fontWeight: 500, alignSelf: "flex-start" }}>{c.badge}</span>}
              <div style={{ borderBottom: "0.5px solid rgba(255,255,255,0.08)", paddingBottom: "1.5rem" }}>
                <div style={{ fontFamily: fd, fontSize: "3.5rem", fontWeight: 900, color: "var(--red)", lineHeight: 1 }}>{c.bigNum}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", fontWeight: 300, marginTop: "0.2rem" }}>{c.bigLabel}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {c.metrics.map((m, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: fd, fontSize: "1.6rem", fontWeight: 800, color: "var(--white)", lineHeight: 1 }}>{m.val}</div>
                    <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", fontWeight: 300, marginTop: 2 }}>{m.key}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", marginTop: "auto" }}>
                {c.rows.map((r, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", borderBottom: i < c.rows.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none", paddingBottom: "0.35rem" }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>{r.k}</span>
                    <span style={{ color: "var(--white)", fontWeight: 500 }}>{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════ MOBILE LAYOUT ══════ */}
        <div className="cases-mobile">

          {/* Pill selector */}
          <div className="cases-pills" style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", overflowX: "auto", paddingBottom: 4 }}>
            {cases.map((cs, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                flexShrink: 0,
                padding: "0.55rem 1.1rem",
                borderRadius: 100,
                border: active === i ? "none" : "1px solid rgba(255,255,255,0.15)",
                background: active === i ? "var(--red)" : "transparent",
                color: active === i ? "var(--white)" : "rgba(255,255,255,0.5)",
                fontFamily: fb, fontSize: "0.82rem", fontWeight: active === i ? 600 : 400,
                cursor: "pointer", whiteSpace: "nowrap",
              }}>
                {cs.tab}
              </button>
            ))}
          </div>

          {/* ── CLIENT + TAG ── */}
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ fontFamily: fd, fontSize: "1.4rem", fontWeight: 900, textTransform: "uppercase", color: "var(--white)", lineHeight: 1 }}>{c.client}</div>
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "0.3rem", fontWeight: 300 }}>{c.tag}</div>
          </div>

          {/* ── SITUATION BLOCK ── */}
          <div style={{
            background: "#1a1614",
            borderRadius: 10,
            padding: "1.25rem",
            marginBottom: "1rem",
            borderLeft: "3px solid rgba(241,42,41,0.4)",
          }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.5rem", fontWeight: 500 }}>
              The situation
            </div>
            <div className="cases-mobile-text" style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.75)" }}>
              {c.before}
            </div>
          </div>

          {/* ── BIG RESULT ── */}
          <div style={{
            background: "var(--red)",
            borderRadius: 10,
            padding: "1.5rem 1.25rem",
            marginBottom: "0.75rem",
          }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "0.5rem", fontWeight: 500 }}>
              Results
              {c.badge && (
                <span style={{ marginLeft: "0.5rem", background: "rgba(0,0,0,0.15)", padding: "2px 8px", borderRadius: 3 }}>{c.badge}</span>
              )}
            </div>
            <div style={{ fontFamily: fd, fontSize: "3rem", fontWeight: 900, color: "var(--white)", lineHeight: 1 }}>{c.bigNum}</div>
            <div className="cases-mobile-text" style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.9)", fontWeight: 300, marginTop: "0.4rem", lineHeight: 1.5 }}>{c.bigLabel}</div>
          </div>

          {/* ── METRICS 2-COL ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}>
            {c.metrics.map((m, i) => (
              <div key={i} style={{ background: "#1a1614", borderRadius: 10, padding: "1.1rem 1rem" }}>
                <div style={{ fontFamily: fd, fontSize: "1.4rem", fontWeight: 800, color: "var(--white)", lineHeight: 1 }}>{m.val}</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", fontWeight: 300, marginTop: 4, lineHeight: 1.35 }}>{m.key}</div>
              </div>
            ))}
          </div>

          {/* ── DETAIL ROWS ── */}
          <div style={{ background: "#1a1614", borderRadius: 10 }}>
            {c.rows.map((r, i) => (
              <div key={i} style={{
                padding: "0.9rem 1.1rem",
                borderBottom: i < c.rows.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.15rem" }}>{r.k}</div>
                <div style={{ fontSize: "0.9rem", color: "var(--white)", fontWeight: 500, lineHeight: 1.4 }}>{r.v}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
