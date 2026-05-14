import CaseStudies from "./components/CaseStudies";

const fd = "var(--font-display), sans-serif";
const fb = "var(--font-body), sans-serif";

export default function Home() {
  return (
    <div style={{ fontFamily: fb }}>

      {/* ── 1. NAV ── */}
      <nav className="m-nav" style={{
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
          <img src="/logo-astra.png" alt="Astra Agency" style={{ height: 52, mixBlendMode: "multiply" }} />
        </div>
        <button className="m-nav-cta" style={{
          fontFamily: fb,
          fontSize: "0.85rem",
          fontWeight: 500,
          padding: "0.65rem 1.4rem",
          background: "var(--red)",
          color: "var(--white)",
          border: "none",
          borderRadius: 5,
        }}>
          Get an audit →
        </button>
      </nav>

      {/* ── 2. HERO ── */}
      <section className="m-hero" style={{
        padding: "4rem 4rem 3.5rem",
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
          marginBottom: "1.5rem",
          border: "0.5px solid var(--g200)",
          padding: "0.4rem 1.1rem",
          borderRadius: 100,
          background: "var(--white)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red)", flexShrink: 0, display: "inline-block" }} />
          Paid media agency for DTC ecommerce brands spending $10K+/mo on Meta Ads
        </div>

        <h1 style={{
          fontFamily: fd,
          fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          color: "var(--black)",
          marginBottom: "1.25rem",
        }}>
          Your next{" "}
          <em style={{ fontStyle: "normal", color: "var(--red)" }}>$300K</em>
          {" "}in revenue<br />
          is already in your ad account.
        </h1>

        <p className="m-hero-sub" style={{
          fontSize: "0.95rem",
          fontWeight: 300,
          lineHeight: 1.7,
          color: "var(--g600)",
          maxWidth: 560,
          margin: "0 auto 2rem",
        }}>
          You&apos;re spending $10K+ a month and you know it&apos;s not performing the way it should. The budget is going somewhere — we help you find exactly where, fix it, and turn it into the growth you&apos;ve been expecting.
        </p>

        <button className="btn-primary m-btn-full">
          See exactly where your money is going
        </button>
        <p style={{ marginTop: "0.75rem", fontSize: "0.75rem", color: "var(--g400)" }}>
          No commitment. No agency pitch. Just answers.
        </p>
      </section>

      {/* ── 3. TRUST BAR ── */}
      <div className="m-trust" style={{
        padding: "2.5rem 4rem",
        background: "var(--black)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}>
          {[
            { num: "15+", lbl: "DTC Brands Scaled" },
            { num: "50%", lbl: "Average CPA Reduction" },
            { num: "2.8x", lbl: "Average Revenue Growth" },
            { num: "30 Days", lbl: "To first results" },
          ].map((s, i, arr) => (
            <div key={i} className="m-trust-stat" style={{
              padding: "1.25rem 1.5rem",
              borderRight: i < arr.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}>
              <div style={{
                fontFamily: fd,
                fontSize: "2.2rem",
                fontWeight: 900,
                color: "var(--white)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>
                {s.num}
                <span style={{ color: "var(--red)" }}>.</span>
              </div>
              <div style={{
                fontSize: "0.68rem",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 400,
              }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. LOGOS ── */}
      {(() => {
        const logos = [
          { src: "/logo-1.png", alt: "Client logo" },
          { src: "/logo-2.png", alt: "Client logo", height: 90 },
          { src: "/logo-3.png", alt: "Client logo" },
          { src: "/logo-4.png", alt: "Client logo" },
          { src: "/logo-5.png", alt: "Client logo", height: 96 },
          { src: "/logo-6.png", alt: "Publimax" },
          { src: "/logo-7.png", alt: "WiseGuyz" },
        ];
        return (
          <section className="m-logos" style={{
            padding: "1.75rem 0",
            background: "var(--white)",
            borderBottom: "0.5px solid var(--g200)",
          }}>
            <p style={{
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--g400)",
              textAlign: "center",
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}>
              Trusted by brands
            </p>
            <div className="marquee-outer">
              <div className="marquee-track">
                {[...logos, ...logos].map((logo, i) => (
                  <div key={i} className="marquee-logo">
                    <img src={logo.src} alt={logo.alt} style={logo.height ? { height: logo.height } : undefined} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── 5. CASE STUDIES ── */}
      <CaseStudies />

      {/* ── 6. PROBLEM ── */}
      <section className="m-section" style={{
        padding: "4.5rem 4rem",
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
            marginBottom: "1.5rem",
            color: "var(--black)",
          }}>
            You already tried the agency route. Here&apos;s why it didn&apos;t work.
          </h2>

          <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.7, color: "var(--g600)", marginBottom: "0.75rem" }}>
            A senior closed the sale. A junior ran your account. Three months later you were staring at a report full of clicks and impressions wondering where your money went.
          </p>
          <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.7, color: "var(--g600)", marginBottom: "0.75rem" }}>
            You couldn&apos;t get anyone on the phone. Your ad account was in their name. And when you finally walked away, you lost everything — the data, the history, the optimizations. Back to zero.
          </p>

          <div style={{
            fontFamily: fd,
            fontSize: "1.3rem",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "var(--black)",
            borderLeft: "3px solid var(--red)",
            paddingLeft: "1.25rem",
            margin: "1.5rem 0",
            lineHeight: 1.3,
          }}>
            Sound familiar?
          </div>

          <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.7, color: "var(--g600)", marginBottom: "0.75rem" }}>
            After auditing hundreds of accounts, the ads were rarely the problem. What was broken was always the same three things.
          </p>

          <div style={{
            border: "0.5px solid var(--g200)",
            borderRadius: 8,
            overflow: "hidden",
            marginTop: "1.5rem",
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
                padding: "1.1rem 1.75rem",
                borderBottom: i < arr.length - 1 ? "0.5px solid var(--g200)" : "none",
              }}>
                <div style={{ fontFamily: fd, fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--red)", minWidth: 24, paddingTop: 2 }}>{item.n}</div>
                <div>
                  <div style={{ fontFamily: fd, fontWeight: 800, fontSize: "1.05rem", textTransform: "uppercase", marginBottom: "0.2rem", letterSpacing: "0.02em" }}>{item.title}</div>
                  <div style={{ fontSize: "0.84rem", fontWeight: 300, color: "var(--g600)", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.7, color: "var(--g600)", marginTop: "1.25rem" }}>
            That&apos;s what Astra fixes. Not just the campaigns — the entire revenue equation behind them.
          </p>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ── */}
      <section className="m-section" style={{
        padding: "4rem 4rem",
        background: "var(--black)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p className="section-label" style={{ color: "rgba(255,255,255,0.4)" }}>What clients say</p>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            color: "var(--white)",
          }}>
            Testimonials
          </h2>
          <div className="m-testi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            {[
              {
                quote: "Before Astra, we were spending $10K a month with no idea what was working. Within 60 days we crossed $1M in monthly revenue. The clarity alone was worth it.",
                photo: "/testimonial-idaca.png",
                name: "Leyse Orlando",
                role: "General Manager · IDACA · Venezuela",
              },
              {
                quote: "We went from 35 orders a day to over 100 in 75 days. We had to pause because we ran out of inventory — a problem I'd never had before.",
                photo: "/testimonial-onetool.png",
                name: "Oswaldo Arias",
                role: "CEO · OneTool · Colombia",
              },
              {
                quote: "We were completely dependent on referrals. Now we have 8 to 12 new gyms signing every month across 12 countries — on autopilot.",
                photo: "/testimonial-xcore.png",
                name: "José Quintero",
                role: "CEO · Xcore.fit · Mexico",
              },
            ].map((t, i) => (
              <div key={i} style={{
                background: "#1a1614",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                padding: "1.25rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}>
                <div style={{ fontFamily: fd, fontSize: "2rem", fontWeight: 900, color: "var(--red)", lineHeight: 0.8, marginBottom: "0.25rem" }}>&ldquo;</div>
                <p style={{ fontSize: "0.84rem", fontWeight: 300, lineHeight: 1.65, color: "rgba(255,255,255,0.65)", fontStyle: "italic", flex: 1 }}>
                  {t.quote}
                </p>
                <div style={{ height: "0.5px", background: "rgba(255,255,255,0.08)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <img src={t.photo} alt={t.name} style={{
                    width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontWeight: 500, fontSize: "0.82rem", color: "var(--white)" }}>{t.name}</div>
                    <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.35)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. COMPARISON ── */}
      <section className="m-section" style={{
        padding: "4.5rem 4rem",
        background: "var(--white)",
        borderTop: "0.5px solid var(--g200)",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p className="section-label">Why Astra</p>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "var(--black)",
            lineHeight: 1.1,
            marginBottom: "2rem",
          }}>
            Not all agencies<br />are the same.
          </h2>

          <div className="m-comparison-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {/* Other agencies card */}
            <div style={{
              border: "0.5px solid var(--g200)",
              borderRadius: 10,
              overflow: "hidden",
            }}>
              <div style={{
                padding: "0.85rem 1.5rem",
                borderBottom: "0.5px solid var(--g200)",
                background: "var(--off)",
              }}>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: "var(--g400)" }}>Other agencies</div>
              </div>
              {[
                "A junior you never met runs your account",
                "Monthly PDF full of vanity metrics",
                "They own your ad account — you leave with nothing",
                "3 months of \"testing\" before anything moves",
                "Generic playbook from their last client",
                "You're one of 40+ clients in a queue",
                "Still running ads the same way they did 5 years ago",
              ].map((item, i, arr) => (
                <div key={i} style={{
                  padding: "0.85rem 1.5rem",
                  borderBottom: i < arr.length - 1 ? "0.5px solid var(--g200)" : "none",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.65rem",
                  background: "var(--white)",
                }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--g300)", flexShrink: 0, marginTop: 2 }}>&#x2715;</span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--g400)", lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Astra card */}
            <div style={{
              border: "2px solid var(--red)",
              borderRadius: 10,
              overflow: "hidden",
              position: "relative",
            }}>
              <div style={{
                padding: "0.85rem 1.5rem",
                borderBottom: "0.5px solid rgba(241,42,41,0.15)",
                background: "rgba(241,42,41,0.04)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red)", flexShrink: 0 }} />
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: "var(--red)" }}>Astra Agency</div>
              </div>
              {[
                "The strategist who built your plan runs your account",
                "Real-time visibility into every dollar spent — with a live dashboard",
                "Your account, your name, your data — always",
                "First results within 30 days",
                "Strategy built around your product, margins, and market",
                "Small roster — we know your numbers better than you do",
                "AI-powered optimization — faster insights, sharper creative, better results",
              ].map((item, i, arr) => (
                <div key={i} style={{
                  padding: "0.85rem 1.5rem",
                  borderBottom: i < arr.length - 1 ? "0.5px solid var(--g200)" : "none",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.65rem",
                  background: "var(--white)",
                }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--red)", flexShrink: 0, marginTop: 2 }}>&#x2713;</span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 400, color: "var(--black)", lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. HOW IT WORKS ── */}
      <section className="m-section" style={{
        padding: "4.5rem 4rem",
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
            marginBottom: "2rem",
            color: "var(--black)",
          }}>
            Three phases. One goal: your revenue.
          </h2>
          <div className="m-process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
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
                paddingTop: "0.75rem",
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
                <div style={{ fontFamily: fd, fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.5rem" }}>
                  {step.phase}
                </div>
                <div style={{ fontFamily: fd, fontSize: "1.25rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: "0.5rem", color: "var(--black)" }}>
                  {step.title}
                </div>
                <p style={{ fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.6, color: "var(--g600)", marginBottom: "0.5rem" }}>
                  {step.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  {step.items.map((item, j) => (
                    <div key={j} style={{ fontSize: "0.75rem", color: "var(--g400)", display: "flex", alignItems: "flex-start", gap: 6, fontWeight: 300 }}>
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

      {/* ── 9. CTA ── */}
      <section className="m-cta" style={{
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
          <button className="btn-white m-btn-full">
            See exactly where your money is going →
          </button>
          <p style={{ marginTop: "1.25rem", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>
            Available for DTC ecommerce brands with physical products spending $8K+/mo on Meta Ads.
          </p>
        </div>
      </section>

      {/* ── 10. FOOTER ── */}
      <footer className="m-footer" style={{
        padding: "1.75rem 4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--black)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
      }}>
        <img src="/logo-astra.png" alt="Astra Agency" style={{ height: 90, filter: "brightness(0) invert(1)" }} />
        <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>
          © 2025 Astra Agency. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
