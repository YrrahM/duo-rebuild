// /app/layout.tsx
import "./globals.css";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header
          role="banner"
          className="fixed top-0 inset-x-0 z-[200] w-full border-b border-gray-200"
          style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(6px)" }}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold text-gray-900 hover:opacity-80">
              businessenglish.vip
            </Link>
            <LanguageSwitcher />
          </div>
        </header>

        {/* Push content below the fixed header (≈64px) */}
        <main className="min-h-screen pt-16">{children}</main>
      </body>
    </html>
  );
}
