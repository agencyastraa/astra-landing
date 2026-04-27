import CaseStudies from "./components/CaseStudies";

const fd = "var(--font-display), sans-serif";
const fb = "var(--font-body), sans-serif";

export default function Home() {
  return (
    <div style={{ fontFamily: fb }}>

      {/* ── 1. NAV ── */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.25rem 4rem",
        borderBottom: "0.5px solid var(--g200)",
        background: "var(--white)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div>
          {/* Replace with: <img src="/astra-logo.svg" alt="Astra Agency" style={{ height: 36 }} /> */}
          <img src="/AA_Transparent_-_DARK_RED.png" alt="Astra Agency" style={{ height: 36, filter: "brightness(0)" }} />
        </div>
        <button style={{
          fontFamily: fb,
          fontSize: "0.85rem",
          fontWeight: 500,
          padding: "0.65rem 1.4rem",
          background: "var(--red)",
          color: "var(--white)",
          border: "none",
          borderRadius: 5,
        }}>
          Get a free audit →
        </button>
      </nav>

      {/* ── 2. HERO ── */}
      <section style={{
        padding: "7rem 4rem 6rem",
        maxWidth: 960,
        margin: "0 auto",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--g600)",
          marginBottom: "2.5rem",
          border: "0.5px solid var(--g200)",
          padding: "0.4rem 1.1rem",
          borderRadius: 100,
          background: "var(--white)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red)", flexShrink: 0, display: "inline-block" }} />
          Paid media agency for brands spending $10K+/mo
        </div>

        <h1 style={{
          fontFamily: fd,
          fontSize: "clamp(3rem, 6.5vw, 5rem)",
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          color: "var(--black)",
          marginBottom: "1.75rem",
        }}>
          Your next{" "}
          <em style={{ fontStyle: "normal", color: "var(--red)" }}>$1M</em>
          {" "}in revenue<br />
          is already in your ad account.
        </h1>

        <p style={{
          fontSize: "1.05rem",
          fontWeight: 300,
          lineHeight: 1.75,
          color: "var(--g600)",
          maxWidth: 600,
          margin: "0 auto 2.75rem",
        }}>
          You&apos;re spending $10K+ a month and you know it&apos;s not performing the way it should. The budget is going somewhere — we help you find exactly where, fix it, and turn it into the growth you&apos;ve been expecting.
        </p>

        <button className="btn-primary">
          See exactly where your money is going — free
        </button>
        <p style={{ marginTop: "0.9rem", fontSize: "0.75rem", color: "var(--g400)" }}>
          No commitment. No agency pitch. Just answers.
        </p>
      </section>

      {/* ── 3. TRUST BAR ── */}
      <div style={{
        borderTop: "0.5px solid var(--g200)",
        borderBottom: "0.5px solid var(--g200)",
        padding: "1.75rem 4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        flexWrap: "wrap",
        background: "var(--black)",
      }}>
        {[
          { num: "4 Years", lbl: "Operating" },
          { num: "$500K+", lbl: "Ad spend managed" },
          { num: "4.8x", lbl: "Average ROAS" },
          { num: "15+", lbl: "Clients scaled" },
        ].map((s, i, arr) => (
          <div key={i} style={{ display: "contents" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: fd, fontSize: "1.8rem", fontWeight: 800, textTransform: "uppercase", color: "var(--red)" }}>{s.num}</div>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", marginTop: 2, letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.lbl}</div>
            </div>
            {i < arr.length - 1 && (
              <div style={{ width: "0.5px", height: "2rem", background: "rgba(255,255,255,0.1)" }} />
            )}
          </div>
        ))}
      </div>

      {/* ── 4. LOGOS ── */}
      <section style={{
        padding: "3rem 4rem",
        background: "var(--white)",
        borderBottom: "0.5px solid var(--g200)",
      }}>
        <p style={{
          fontSize: "0.68rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--g400)",
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: 500,
        }}>
          Trusted by brands across USA &amp; Europe
        </p>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          flexWrap: "wrap",
          maxWidth: 960,
          margin: "0 auto",
        }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 120,
              height: 44,
              border: "0.5px dashed var(--g200)",
              borderRadius: 6,
              background: "var(--g100)",
            }}>
              <span style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--g400)", fontWeight: 500 }}>
                Logo
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. PROBLEM ── */}
      <section style={{
        padding: "7rem 4rem",
        borderTop: "0.5px solid var(--g200)",
        background: "var(--off)",
      }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <p className="section-label">The real problem</p>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            textTransform: "uppercase",
            marginBottom: "2.5rem",
            color: "var(--black)",
          }}>
            You already tried the agency route. Here&apos;s why it didn&apos;t work.
          </h2>

          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, color: "var(--g600)", marginBottom: "1.25rem" }}>
            A senior closed the sale. A junior ran your account. Three months later you were staring at a report full of clicks and impressions wondering where your money went.
          </p>
          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, color: "var(--g600)", marginBottom: "1.25rem" }}>
            You couldn&apos;t get anyone on the phone. Your ad account was in their name. And when you finally walked away, you lost everything — the data, the history, the optimizations. Back to zero.
          </p>

          <div style={{
            fontFamily: fd,
            fontSize: "1.5rem",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "var(--black)",
            borderLeft: "3px solid var(--red)",
            paddingLeft: "1.25rem",
            margin: "2.5rem 0",
            lineHeight: 1.3,
          }}>
            Sound familiar?
          </div>

          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, color: "var(--g600)", marginBottom: "1.25rem" }}>
            After auditing hundreds of accounts, the ads were rarely the problem. What was broken was always the same three things.
          </p>

          <div style={{
            border: "0.5px solid var(--g200)",
            borderRadius: 8,
            overflow: "hidden",
            marginTop: "2.5rem",
            background: "var(--white)",
          }}>
            {[
              { n: "01", title: "Wrong priorities", desc: "Your budget was going to what looked busy — not to what was actually generating revenue." },
              { n: "02", title: "A weak offer", desc: "No amount of spend fixes a product that isn't positioned to convert. You need the right message before you need more traffic." },
              { n: "03", title: "Zero visibility", desc: "You had no clear picture of what was working, what wasn't, and why. So every decision was a guess." },
            ].map((item, i, arr) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1.25rem",
                padding: "1.5rem 1.75rem",
                borderBottom: i < arr.length - 1 ? "0.5px solid var(--g200)" : "none",
              }}>
                <div style={{ fontFamily: fd, fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--red)", minWidth: 24, paddingTop: 2 }}>{item.n}</div>
                <div>
                  <div style={{ fontFamily: fd, fontWeight: 800, fontSize: "1.05rem", textTransform: "uppercase", marginBottom: "0.3rem", letterSpacing: "0.02em" }}>{item.title}</div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 300, color: "var(--g600)", lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, color: "var(--g600)", marginTop: "2rem" }}>
            That&apos;s what Astra fixes. Not just the campaigns — the entire revenue equation behind them.
          </p>
        </div>
      </section>

      {/* ── 7. CASE STUDIES ── */}
      <CaseStudies />

      {/* ── 8. TESTIMONIALS ── */}
      <section style={{
        padding: "7rem 4rem",
        background: "var(--g100)",
        borderTop: "0.5px solid var(--g200)",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p className="section-label">What clients say</p>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            marginBottom: "0.4rem",
            color: "var(--black)",
          }}>
            Testimonials
          </h2>
          <div style={{
            display: "inline-block",
            fontSize: "0.65rem",
            color: "var(--red)",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            background: "rgba(241,42,41,0.08)",
            padding: "3px 10px",
            borderRadius: 4,
            marginBottom: "2.5rem",
            marginTop: "0.5rem",
          }}>
            ⚠ Add real client quotes
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            {[
              {
                quote: "Before Astra, we were spending $10K a month with no idea what was working. Within 60 days we crossed $1M in monthly revenue. The clarity alone was worth it.",
                initials: "IN",
                name: "[Client name]",
                role: "[Title] · IDACA",
              },
              {
                quote: "We went from 35 orders a day to over 100 in 75 days. We had to pause because we ran out of inventory — a problem I'd never had before.",
                initials: "IN",
                name: "[Client name]",
                role: "[Title] · OneTool",
              },
              {
                quote: "We were completely dependent on referrals. Now we have 8 to 12 new gyms signing every month across 12 countries — on autopilot.",
                initials: "IN",
                name: "[Client name]",
                role: "[Title] · Xcore.fit",
              },
            ].map((t, i) => (
              <div key={i} style={{
                background: "var(--white)",
                border: "0.5px solid var(--g200)",
                borderRadius: 8,
                padding: "1.75rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}>
                <div style={{ fontFamily: fd, fontSize: "2.5rem", fontWeight: 900, color: "var(--red)", lineHeight: 0.8, marginBottom: "0.5rem" }}>&ldquo;</div>
                <p style={{ fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.7, color: "var(--g600)", fontStyle: "italic", flex: 1 }}>
                  {t.quote}
                </p>
                <div style={{ height: "0.5px", background: "var(--g200)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%", background: "var(--g200)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: fd, fontSize: "0.7rem", fontWeight: 800, color: "var(--g400)",
                    flexShrink: 0, textTransform: "uppercase",
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: "0.85rem", color: "var(--black)" }}>{t.name}</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--g400)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. HOW IT WORKS ── */}
      <section style={{
        padding: "7rem 4rem",
        background: "var(--white)",
        borderTop: "0.5px solid var(--g200)",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p className="section-label">How it works</p>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            marginBottom: "3.5rem",
            color: "var(--black)",
          }}>
            Three phases. One goal: your revenue.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}>
            {[
              {
                phase: "Phase 01",
                title: "Diagnose",
                desc: "We look at your real account, your offer, and your sales process. Most of the issues are visible in the first 48 hours.",
                items: ["Sales strategy", "Follow-up & automation", "Response time", "Offer strength", "Sales conversation"],
              },
              {
                phase: "Phase 02",
                title: "Launch",
                desc: "We build the campaigns, segment the audiences, and get the baseline right from day one — no more months of 'testing'.",
                items: ["Campaign creation (Meta / Google / TikTok)", "Segmentation study", "Segmentation testing", "Ad account optimization", "Creative optimization"],
              },
              {
                phase: "Phase 03",
                title: "Scale",
                desc: "Once your revenue engine is working, we push. Budget, creative, audience — optimized in continuous cycles.",
                items: ["Campaign optimization", "Segmentation refinement", "Budget reallocation", "Creative iteration", "Sales process evaluation"],
              },
            ].map((step, i) => (
              <div key={i} style={{
                paddingTop: "1rem",
                borderTop: "2px solid var(--g200)",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute",
                  top: -2,
                  left: 0,
                  width: 40,
                  height: 2,
                  background: "var(--red)",
                }} />
                <div style={{ fontFamily: fd, fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.75rem" }}>
                  {step.phase}
                </div>
                <div style={{ fontFamily: fd, fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: "0.75rem", color: "var(--black)" }}>
                  {step.title}
                </div>
                <p style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.7, color: "var(--g600)", marginBottom: "0.75rem" }}>
                  {step.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {step.items.map((item, j) => (
                    <div key={j} style={{ fontSize: "0.78rem", color: "var(--g400)", display: "flex", alignItems: "flex-start", gap: 6, fontWeight: 300 }}>
                      <span style={{ color: "var(--red)", flexShrink: 0, fontSize: "0.65rem", marginTop: 2 }}>—</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA ── */}
      <section style={{
        background: "var(--red)",
        padding: "8rem 4rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "1.25rem", fontWeight: 500 }}>
            Free account audit
          </p>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            color: "var(--white)",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
          }}>
            Find the revenue you&apos;re{" "}
            <em style={{ fontStyle: "normal", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>
              already leaving
            </em>{" "}
            on the table.
          </h2>
          <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
            We&apos;ll look at your real account, show you exactly where the leaks are, and give you a clear picture of what growth actually looks like from here. No pitch. No pressure.
          </p>
          <button className="btn-white">
            See exactly where your money is going →
          </button>
          <p style={{ marginTop: "1.25rem", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>
            Takes 15 minutes. Available for brands spending $10K+/mo in ads.
          </p>
        </div>
      </section>

      {/* ── 11. FOOTER ── */}
      <footer style={{
        padding: "1.75rem 4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--black)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
      }}>
        <img src="/AA_Transparent_-_DARK_RED.png" alt="Astra Agency" style={{ height: 28, filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(320deg)" }} />
        <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>
          © 2025 Astra Agency. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
