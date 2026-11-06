"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Case = {
  tab: string;
  industry: string;
  client: string;
  tag: string;
  before: string;
  bigNum: string;
  bigLabel: string;
  metrics: { val: string; key: string }[];
  rows: { k: string; v: string }[];
};

type Labels = { situation: string; before: string; results: string };

export default function Cases({ cases, labels }: { cases: Case[]; labels: Labels }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touch = useRef(0);
  const c = cases[active];

  const go = useCallback((dir: 1 | -1) => setActive((p) => (p + dir + cases.length) % cases.length), [cases.length]);

  // Avance automático hasta que el visitante interactúa
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), 7000);
    return () => clearTimeout(t);
  }, [active, paused, go]);

  const pick = (i: number) => {
    setPaused(true);
    setActive(i);
  };

  return (
    <div
      className="cases"
      data-reveal
      onMouseEnter={() => setPaused(true)}
      onTouchStart={(e) => {
        setPaused(true);
        touch.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const dx = touch.current - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 50) go(dx > 0 ? 1 : -1);
      }}
    >
      <div className="case-tabs" role="tablist">
        {cases.map((cs, i) => (
          <button key={cs.tab} role="tab" aria-selected={active === i} className={active === i ? "case-tab on" : "case-tab"} onClick={() => pick(i)}>
            <span className="case-tab-n">0{i + 1}</span>
            <span className="case-tab-name">{cs.tab}</span>
            <span className="case-tab-ind">{cs.industry}</span>
            {active === i && !paused && <span className="case-tab-timer" />}
          </button>
        ))}
      </div>

      <div className="case-panel" key={active}>
        <div className="case-left">
          <div className="mono-k">{"// "}{labels.situation}</div>
          <div className="case-client">{c.client}</div>
          <div className="case-tag">{c.tag}</div>
          <div className="case-before">
            <div className="mono-k dim">{labels.before}</div>
            <p>{c.before}</p>
          </div>
        </div>
        <div className="case-right">
          <div className="mono-k red">{"// "}{labels.results}</div>
          <div className="case-big">{c.bigNum}</div>
          <div className="case-big-label">{c.bigLabel}</div>
          <div className="case-metrics">
            {c.metrics.map((m) => (
              <div key={m.key}>
                <div className="case-metric-v">{m.val}</div>
                <div className="case-metric-k">{m.key}</div>
              </div>
            ))}
          </div>
          <div className="case-rows">
            {c.rows.map((r) => (
              <div className="case-row" key={r.k}>
                <span>{r.k}</span>
                <strong>{r.v}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="case-nav">
        <button aria-label="Previous" onClick={() => (setPaused(true), go(-1))}>
          ←
        </button>
        <div className="case-dots">
          {cases.map((_, i) => (
            <button key={i} aria-label={`${i + 1}`} className={active === i ? "on" : ""} onClick={() => pick(i)} />
          ))}
        </div>
        <button aria-label="Next" onClick={() => (setPaused(true), go(1))}>
          →
        </button>
      </div>
    </div>
  );
}
