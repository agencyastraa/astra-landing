import { notFound } from "next/navigation";
import { dictionaries, hasLocale, waLink } from "./content";
import Nav from "../components/Nav";
import Ambient from "../components/Ambient";
import HeroVisual from "../components/HeroVisual";
import Cases from "../components/Cases";
import { Icon } from "../components/Icons";

const logos = [
  { src: "/logo-1.png", alt: "Xcore" },
  { src: "/logo-2.png", alt: "MediFitness" },
  { src: "/logo-3.png", alt: "IDACA" },
  { src: "/logo-4.png", alt: "Compumax" },
  { src: "/logo-5.png", alt: "OneTool" },
  { src: "/logo-6.png", alt: "Publimax" },
  { src: "/logo-7.png", alt: "WiseGuyz" },
];

function Head({ n, label, t1, t2, sub, light }: { n: string; label: string; t1: string; t2: string; sub?: string; light?: boolean }) {
  return (
    <div className="head" data-reveal>
      <div className="eyebrow">
        <span className="eyebrow-n">[{n}]</span> {label}
        <span className="eyebrow-line" />
      </div>
      <h2 className={light ? "h2 h2--ink" : "h2"}>
        {t1} <span className="red">{t2}</span>
      </h2>
      {sub && <p className="lead">{sub}</p>}
    </div>
  );
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = dictionaries[lang];
  const wa = waLink(d.wa);
  const problemIcons = ["target", "chat", "chart"] as const;
  const stepIcons = ["search", "layout", "rocket", "loop"] as const;

  return (
    <>
      <Ambient />
      <Nav lang={lang} links={d.nav.links} cta={d.nav.cta} menu={d.nav.menu} wa={wa} switchLabel={d.langSwitch} />

      <main>
        {/* HERO */}
        <section className="hero" data-act="hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="pill" data-reveal>
                <span className="dot" /> {d.hero.badge}
              </div>
              <h1 className="h1" data-reveal>
                <span className="h1-muted">{d.hero.l1}</span>
                <br />
                {d.hero.l2}
                <br />
                <span className="red">{d.hero.l3}</span>
              </h1>
              <p className="hero-sub" data-reveal>
                {d.hero.sub} <strong>{d.hero.subStrong}</strong>
              </p>
              <ul className="hero-bullets" data-reveal>
                {d.hero.bullets.map((b) => (
                  <li key={b.b}>
                    <span className="dot" />
                    <span>
                      <strong>{b.b}</strong> {b.t}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="hero-cta" data-reveal>
                <a className="btn btn-red btn-lg" href={wa} target="_blank" rel="noopener">
                  {d.hero.cta} <span className="arrow">→</span>
                </a>
                <p className="micro">{d.hero.note}</p>
              </div>
            </div>
            <HeroVisual m={d.hero.mock} />
          </div>

          <div className="wrap glance">
            {d.glance.map((g, i) => (
              <div className="glance-card" key={g.k} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="mono-k">{"// "}{g.k}</div>
                <div className="glance-v">{g.v}</div>
                <div className="glance-d">{g.d}</div>
              </div>
            ))}
          </div>

          <div className="ribbon">
            <div className="ribbon-track">
              {[0, 1].map((r) => (
                <div className="ribbon-set" key={r} aria-hidden={r === 1}>
                  {d.marquee.map((m, i) => (
                    <span key={i} className={i % 2 ? "ribbon-item dim" : "ribbon-item"}>
                      {m} <span className="ribbon-dia">◆</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="sec" id="problem" data-act="problem">
          <div className="wrap">
            <Head n="01" label={d.problem.label} t1={d.problem.t1} t2={d.problem.t2} sub={d.problem.sub} />
            <div className="grid3">
              {d.problem.items.map((p, i) => (
                <article className="card card-hover" key={p.k} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="card-top">
                    <span className="mono-k">{"// "}{p.k}</span>
                    <Icon name={problemIcons[i]} />
                  </div>
                  <h3 className="h3">{p.t}</h3>
                  <p className="body">{p.d}</p>
                </article>
              ))}
            </div>
            <p className="closing" data-reveal>
              {d.problem.close}
            </p>
          </div>
        </section>

        {/* CASES */}
        <section className="sec sec--deep" id="cases" data-act="cases">
          <div className="wrap">
            <Head n="02" label={d.cases.label} t1={d.cases.t1} t2={d.cases.t2} sub={d.cases.sub} />
            <Cases cases={d.cases.list} labels={{ situation: d.cases.situation, before: d.cases.before, results: d.cases.results }} />
          </div>
          <div className="logos" data-reveal>
            <div className="mono-k center">{"// "}{d.cases.logos}</div>
            <div className="logo-marquee">
              <div className="logo-track">
                {[...logos, ...logos].map((l, i) => (
                  <div className="logo-chip" key={i}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.src} alt={l.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="sec" id="testimonials" data-act="testimonials">
          <div className="wrap">
            <Head n="03" label={d.testimonials.label} t1={d.testimonials.t1} t2={d.testimonials.t2} />
            <div className="grid3">
              {d.testimonials.list.map((t, i) => (
                <figure className="card testi" key={t.name} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="quote-mark">&ldquo;</div>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.photo} alt={t.name} />
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="sec sec--deep" id="why" data-act="why">
          <div className="wrap">
            <Head n="04" label={d.why.label} t1={d.why.t1} t2={d.why.t2} />
            <div className="compare" data-reveal>
              <div className="compare-col compare-other">
                <div className="compare-head mono-k">{d.why.other}</div>
                {d.why.rows.map((r) => (
                  <div className="compare-row" key={r[0]}>
                    <span className="x">✕</span>
                    {r[0]}
                  </div>
                ))}
              </div>
              <div className="compare-col compare-astra">
                <div className="compare-head mono-k">
                  <span className="dot" /> {d.why.astra}
                </div>
                {d.why.rows.map((r) => (
                  <div className="compare-row" key={r[1]}>
                    <span className="check">✓</span>
                    {r[1]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FIRST MONTH */}
        <section className="sec sec--deep" id="start" data-act="start">
          <div className="wrap">
            <Head n="05" label={d.start.label} t1={d.start.t1} t2={d.start.t2} sub={d.start.sub} />
            <div className="grid4">
              {d.start.steps.map((s, i) => (
                <article className="card card-hover step" key={s.t} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="card-top">
                    <span className="mono-k">
                      <span className="red">0{i + 1}</span> &nbsp;{s.k}
                    </span>
                    <Icon name={stepIcons[i]} />
                  </div>
                  <div className="step-bar">
                    <span style={{ width: `${(i + 1) * 25}%` }} />
                  </div>
                  <h3 className="h3">{s.t}</h3>
                  <p className="body">{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec sec--paper" id="questions" data-act="questions">
          <div className="wrap faq-grid">
            <Head n="06" label={d.faq.label} t1={d.faq.t1} t2={d.faq.t2} light />
            <div className="faq" data-reveal>
              {d.faq.list.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>
                    <span>{f.q}</span>
                    <span className="plus" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="final" data-act="end">
          <div className="final-glow" />
          <div className="wrap final-inner" data-reveal>
            <div className="mono-k">{"// "}{d.cta.label}</div>
            <h2 className="final-h">
              {d.cta.t1} <span className="u">{d.cta.t2}</span>
            </h2>
            <p className="final-sub">{d.cta.sub}</p>
            <a className="btn btn-white btn-lg" href={wa} target="_blank" rel="noopener">
              <Icon name="whatsapp" /> {d.cta.button} <span className="arrow">→</span>
            </a>
            <p className="micro">{d.cta.note}</p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-astra.png" alt="Astra Agency" className="foot-logo" />
          <p>{d.footer}</p>
        </div>
      </footer>
    </>
  );
}
