type Name = "target" | "chat" | "chart" | "search" | "layout" | "rocket" | "loop" | "whatsapp";

const paths: Record<Name, React.ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v10H9l-5 4z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  chart: (
    <>
      <path d="M3 21h18" />
      <path d="M6 17v-4M10 17V9M14 17v-6M18 17V6" />
      <circle cx="18" cy="4" r="1.6" />
    </>
  ),
  search: (
    <>
      <rect x="3" y="4" width="13" height="11" rx="1.5" />
      <path d="M6 8h7M6 11h4" />
      <circle cx="17" cy="16" r="3" />
      <path d="M19.2 18.2 21 20" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M9 9v11M12 13h6M12 16h4" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3c3 2.5 4.5 6 4 10l-2 3h-4l-2-3c-.5-4 1-7.5 4-10z" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M8 14l-2.5 2.5L7 19M16 14l2.5 2.5L17 19M12 19v2" />
    </>
  ),
  loop: (
    <>
      <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" />
      <path d="M18 3v4h-4M6 21v-4h4" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.3-3.8A8 8 0 1 1 8 19z" />
      <path d="M9 8.5c0 3 2.5 6 6 6.5l1.2-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z" />
    </>
  ),
};

export function Icon({ name }: { name: Name }) {
  return (
    <svg className={`icon icon-${name}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[name]}
    </svg>
  );
}
