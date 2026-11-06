"use client";

import { useEffect, useRef } from "react";

/* Fondo vivo estilo Plan 7: resplandor rojo que cambia según la sección,
   estrellas con parpadeo, revelado de elementos al entrar en pantalla
   y barra de progreso de lectura. */
export default function Ambient() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Sección activa → variables del resplandor
    const actIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) root.dataset.act = (e.target as HTMLElement).dataset.act || "hero";
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("[data-act]").forEach((el) => el !== root && actIO.observe(el));

    // Revelado
    const revIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revIO.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => revIO.observe(el));
    root.classList.add("js");

    // Progreso
    const onScroll = () => {
      const h = document.body.scrollHeight - window.innerHeight;
      root.style.setProperty("--progress", String(h > 0 ? window.scrollY / h : 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Estrellas
    const c = canvas.current!;
    const ctx = c.getContext("2d")!;
    let raf = 0;
    let stars: { x: number; y: number; r: number; p: number; s: number; red: boolean }[] = [];
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = window.innerWidth * dpr;
      c.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round((window.innerWidth * window.innerHeight) / 9000);
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.2 + 0.2,
        p: Math.random() * Math.PI * 2,
        s: Math.random() * 0.015 + 0.004,
        red: Math.random() < 0.12,
      }));
    };
    resize();
    window.addEventListener("resize", resize);
    let scrollY = window.scrollY;
    const draw = () => {
      const dy = (window.scrollY - scrollY) * 0.08;
      scrollY = window.scrollY;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const st of stars) {
        st.p += st.s;
        st.y -= dy * st.r;
        if (st.y < 0) st.y += window.innerHeight;
        if (st.y > window.innerHeight) st.y -= window.innerHeight;
        const a = 0.25 + Math.sin(st.p) * 0.25 + 0.2;
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = st.red ? `rgba(241,42,41,${a})` : `rgba(250,249,248,${a * 0.8})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    if (!reduce) draw();

    return () => {
      actIO.disconnect();
      revIO.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="ambient" aria-hidden>
      <div className="ambient-glow" />
      <div className="ambient-grid" />
      <canvas ref={canvas} className="ambient-stars" />
      <div className="ambient-orbit" />
    </div>
  );
}
