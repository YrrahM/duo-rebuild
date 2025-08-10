// src/components/MainLayout.tsx  (Server Component — no "use client")
import Link from "next/link";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher"; // client component is fine here

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header
        role="banner"
        className="z-50 w-full border-b border-gray-200"
        // To make it stay on scroll, swap the className above with:
        // "sticky top-0 z-50 w-full border-b border-gray-200"
        style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(6px)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="font-semibold text-gray-900 hover:opacity-80">
            businessenglish.vip
          </Link>

          {/* Right: language switcher (client component) */}
          <div className="shrink-0">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer
        className="mt-8"
        style={{ backgroundColor: "#1f2937", paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Footer />
      </footer>
    </div>
  );
}
