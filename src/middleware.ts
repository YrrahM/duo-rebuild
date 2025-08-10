// /middleware.ts
import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // Skip static & API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.(png|jpg|jpeg|webp|svg|gif|ico|txt|xml|json|css|js|map)$/.test(pathname)
  ) return NextResponse.next();

  // Normalize accidental /es prefix
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
    const res = NextResponse.redirect(url);
    res.cookies.set("LOCALE", "es", { path: "/", maxAge: 31536000, sameSite: "lax" });
    return res;
  }

  // Explicit override via ?lang=
  const lang = searchParams.get("lang");
  if (lang === "es" || lang === "en" || lang === "zh") {
    const rest = pathname.replace(/^\/(en|zh)(?=\/|$)/, "") || "/";
    const url = req.nextUrl.clone();
    url.searchParams.delete("lang");
    url.pathname = lang === "es" ? (rest === "/" ? "/" : rest)
               : (rest === "/" ? `/${lang}` : `/${lang}${rest}`);
    const res = NextResponse.redirect(url);
    res.cookies.set("LOCALE", lang, { path: "/", maxAge: 31536000, sameSite: "lax" });
    return res;
  }

  // Cookie follows the URL (authoritative)
  if (/^\/en(?:\/|$)/.test(pathname)) {
    const res = NextResponse.next();
    res.cookies.set("LOCALE", "en", { path: "/", maxAge: 31536000, sameSite: "lax" });
    return res;
  }
  if (/^\/zh(?:\/|$)/.test(pathname)) {
    const res = NextResponse.next();
    res.cookies.set("LOCALE", "zh", { path: "/", maxAge: 31536000, sameSite: "lax" });
    return res;
  }

  // Unprefixed => Spanish
  const res = NextResponse.next();
  res.cookies.set("LOCALE", "es", { path: "/", maxAge: 31536000, sameSite: "lax" });
  return res;
}

export const config = { matcher: ["/((?!_next|api|.*\\..*).*)"] };
