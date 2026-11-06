"use client";

import { useEffect, useState } from "react";

type Props = {
  lang: string;
  links: { id: string; label: string }[];
  cta: string;
  menu: string;
  wa: string;
  switchLabel: string;
};

export default function Nav({ lang, links, cta, menu, wa, switchLabel }: Props) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const other = lang === "es" ? "en" : "es";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const ids = links.map((l) => l.id);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(ids.includes(e.target.id) ? e.target.id : "");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [links]);

  const switchLang = () => {
    document.cookie = `lang=${other};path=/;max-age=31536000`;
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav-inner">
        <a href={`/${lang}#top`} className="nav-logo" aria-label="Astra Agency">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-astra.png" alt="Astra Agency" />
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "is-active" : ""} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <a className="lang-switch" href={`/${other}`} onClick={switchLang} hrefLang={other}>
            <span className={lang === "es" ? "on" : ""}>ES</span>
            <span className="sep">/</span>
            <span className={lang === "en" ? "on" : ""}>EN</span>
            <span className="sr-only">{switchLabel}</span>
          </a>
          <a className="btn btn-red btn-sm nav-cta" href={wa} target="_blank" rel="noopener">
            {cta}
          </a>
          <button className="burger" aria-label={menu} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className="nav-progress" />
    </header>
  );
}
