'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pairs: Record<string, string> = {
  // ES ↔ EN slug differences
  '/features/clases-personalizadas': '/en/features/custom-classes',
  '/en/features/custom-classes': '/features/clases-personalizadas',

  '/features/sobre-mi': '/en/features/about-me',
  '/en/features/about-me': '/features/sobre-mi',

  '/features/testimonias': '/en/features/testimonials',
  '/en/features/testimonials': '/features/testimonias',
};

const locales = ['es', 'en', 'zh'] as const;
type Locale = typeof locales[number];

function parsePath(pathname: string): { locale: Locale; rest: string } {
  if (pathname === '/' || !pathname.startsWith('/')) return { locale: 'es', rest: '/' };
  const seg = pathname.split('/')[1];
  if (seg === 'en' || seg === 'zh') {
    const rest = pathname.replace(/^\/(en|zh)(?=\/|$)/, '') || '/';
    return { locale: seg as Locale, rest };
  }
  return { locale: 'es', rest: pathname };
}

function buildPath(locale: Locale, rest: string) {
  if (locale === 'es') return rest === '/' ? '/' : rest;
  return rest === '/' ? `/${locale}` : `/${locale}${rest}`;
}

function mapToLocale(pathname: string, to: Locale) {
  if (pairs[pathname]) {
    const mapped = pairs[pathname];
    const parsed = parsePath(mapped);
    return parsed.locale !== to ? buildPath(to, parsed.rest) : mapped;
  }
  const { rest } = parsePath(pathname);
  return buildPath(to, rest);
}

function setLocaleCookie(locale: Locale) {
  document.cookie = `LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

export default function LanguageSwitcher() {
  const pathname = usePathname() || '/';
  const { locale: current } = parsePath(pathname);

  const targets: { code: Locale; label: string }[] = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
  ];

  return (
    <nav aria-label="Language switcher" className="flex items-center gap-2">
      {targets.map(({ code, label }) => {
        const baseHref = mapToLocale(pathname, code);
        const hrefWithLang = `${baseHref}${baseHref.includes('?') ? '&' : '?'}lang=${code}`;
        const isActive = current === code;

        return (
          <Link
            key={code}
            href={hrefWithLang}
            onClick={(e) => {
              e.preventDefault();
              setLocaleCookie(code);
              window.location.replace(hrefWithLang); // hard nav → middleware runs
            }}
            aria-current={isActive ? 'page' : undefined}
            className={[
              'rounded-full border px-3 py-1 text-sm',
              isActive
                ? 'border-gray-900 bg-gray-900 text-white'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50',
            ].join(' ')}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
