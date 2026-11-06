import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"];

function getLocale(request: NextRequest) {
  const cookie = request.cookies.get("lang")?.value;
  if (cookie && locales.includes(cookie)) return cookie;
  const header = request.headers.get("accept-language") || "";
  const langs = header
    .split(",")
    .map((p) => {
      const [tag, q] = p.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const l of langs) {
    const base = l.tag.split("-")[0];
    if (locales.includes(base)) return base;
  }
  return "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;
  request.nextUrl.pathname = `/${getLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
