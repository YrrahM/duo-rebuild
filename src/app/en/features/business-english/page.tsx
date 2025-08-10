import Link from "next/link";
import MainLayout from "@/components/MainLayout"; // adjust path if needed

export const metadata = {
  title: "Business English | businessenglish.vip",
  description:
    "Master Business English for meetings, presentations, emails, and negotiations. Learn with a native British English teacher with 40+ years of experience.",
};

export default function BusinessEnglishEN() {
  return (
    <MainLayout>
      <div
        className="animate-fade-in"
        style={{
          minHeight: "auto",
          marginBottom: "4rem",
          padding: "2rem 1rem",
          background: "linear-gradient(to bottom, #bfdbfe, #ffffff, #e5e7eb)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Business English</h2>

        <p className="text-gray-700 mb-6 max-w-3xl">
          In today’s global market, communicating confidently in English is key to professional success.
          My Business English classes are designed to give you the language skills needed for meetings,
          presentations, professional emails, and negotiations — all tailored to your industry.
        </p>

        <p className="text-gray-700 mb-6 max-w-3xl">
          You’ll learn how to express yourself clearly, persuasively, and professionally, while mastering
          the vocabulary and expressions used in international business contexts.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="https://calendar.app.google/M3DnLoa1754P9qdHA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your free Business English class with Harry Michael Ernest"
            title="Book a free professional English class with Harry Michael Ernest"
            style={{
              display: "inline-block",
              backgroundColor: "#2563eb",
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "1.1rem",
              border: "2px solid #2563eb",
              borderRadius: "0.75rem",
              padding: "0.5rem 1rem",
            }}
          >
            Book a Free Class
          </Link>

          <Link
            href="/en/features"
            style={{
              display: "inline-block",
              color: "#2563eb",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "1.1rem",
              border: "2px solid #2563eb",
              borderRadius: "0.75rem",
              padding: "0.5rem 1rem",
            }}
          >
            ← Back
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
