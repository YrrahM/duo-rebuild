import Link from "next/link";
import MainLayout from "@/components/MainLayout"; // or "../../../components/MainLayout" if you don't use @ alias

export const metadata = {
  title: "What I Offer | businessenglish.vip",
  description:
    "Tailored English for professionals: Business English, customized classes, testimonials, and contact info.",
};

export default function FeaturesPageEN() {
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
        <h2 className="text-3xl font-bold text-gray-900 mb-10">What I Offer</h2>

        <Link href="/en/features/business-english" className="text-xl underline text-purple-800 mb-2">
          <strong>Business English</strong>
        </Link>
        <p className="text-gray-700 mb-6">
          Learn the language you need for meetings, presentations, and professional emails.
        </p>

        <Link href="/en/features/custom-classes" className="text-xl underline text-purple-800 mb-2">
          <strong>A Wide Range of Customized Classes</strong>
        </Link>
        <p className="text-gray-700 mb-6">Designed around your specific goals in your professional field.</p>

        <Link href="/en/features/about-me" className="text-xl underline text-purple-800 mb-2">
          <strong>About Me</strong>
        </Link>
        <p className="text-gray-700 mb-6">
          Learn about my experience, training, and passion for teaching professional English.
        </p>

        <Link href="/en/features/testimonials" className="text-xl underline text-purple-800 mb-2">
          <strong>Testimonials</strong>
        </Link>
        <p className="text-gray-700 mb-6">What my students say.</p>

        <Link href="/en/features/contact-me" className="text-xl underline text-purple-800 mb-2">
          <strong>Contact Me</strong>
        </Link>
        <p className="text-gray-700 mb-6">
          Ready to improve your professional English? Send me a message and let’s begin.
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
            aria-label="Book your free class with Harry Michael Ernest"
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
            href="/en"
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
