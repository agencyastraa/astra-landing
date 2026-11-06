"use client";

import { useEffect, useRef } from "react";

type Mock = {
  chat1: string;
  chat2: string;
  chat3: string;
  booked: string;
  agenda: string;
  leads: string;
  week: string;
  days: string[];
};

// Celdas reservadas de la agenda (día, franja)
const bookedCells = new Set(["0-0", "0-2", "1-1", "1-3", "2-0", "2-1", "2-3", "3-2", "4-0", "4-1", "4-2", "4-3", "5-1", "5-2"]);

export default function HeroVisual({ m }: { m: Mock }) {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.setProperty("--rx", `${-cy * 6}deg`);
      el.style.setProperty("--ry", `${cx * 9}deg`);
      el.style.setProperty("--mx", String(cx));
      el.style.setProperty("--my", String(cy));
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="hv" aria-hidden>
      <div className="hv-stage" ref={stage}>
        <div className="hv-halo" />

        {/* Esferas */}
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />

        {/* Teléfono: conversación de WhatsApp */}
        <div className="hv-layer hv-phone-wrap" style={{ ["--d" as string]: "60px" }}>
          <div className="phone">
            <div className="phone-notch" />
            <div className="phone-head">
              <span className="avatar">
                <span className="avatar-dot" />
              </span>
              <span className="phone-head-lines">
                <span className="ln ln-w60" />
                <span className="ln ln-w35 ln-green" />
              </span>
            </div>
            <div className="phone-body">
              <div className="ad-card">
                <div className="ad-img">
                  <span className="orb orb-in" />
                </div>
                <span className="ln ln-w80" />
                <span className="ln ln-w50" />
              </div>
              <div className="bubble in b1">{m.chat1}</div>
              <div className="bubble out b2">{m.chat2}</div>
              <div className="bubble in b3">{m.chat3}</div>
              <div className="booked b4">
                <span className="tick">✓</span> {m.booked}
              </div>
              <div className="typing b5">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta: agenda de la semana */}
        <div className="hv-layer hv-cal-wrap" style={{ ["--d" as string]: "110px" }}>
          <div className="glass cal">
            <div className="glass-head">
              <span className="mono-k">{m.agenda}</span>
              <span className="live" />
            </div>
            <div className="cal-grid">
              {m.days.map((dname, di) => (
                <div className="cal-col" key={di}>
                  <span className="cal-day">{dname}</span>
                  {[0, 1, 2, 3].map((s) => (
                    <span
                      key={s}
                      className={bookedCells.has(`${di}-${s}`) ? "slot on" : "slot"}
                      style={{ animationDelay: `${1.2 + (di * 4 + s) * 0.06}s` }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tarjeta: clientes nuevos */}
        <div className="hv-layer hv-chart-wrap" style={{ ["--d" as string]: "150px" }}>
          <div className="glass chart">
            <div className="glass-head">
              <span className="mono-k">{m.leads}</span>
              <span className="chip-up">▲</span>
            </div>
            <div className="bars">
              {[28, 36, 33, 48, 55, 52, 68, 80, 92].map((h, i) => (
                <span key={i} style={{ height: `${h}%`, animationDelay: `${0.9 + i * 0.07}s` }} />
              ))}
            </div>
            <div className="chart-foot">
              <span className="mono-k dim">{m.week}</span>
              <span className="gauge">
                <svg viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="14" />
                  <circle cx="18" cy="18" r="14" className="gauge-on" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
