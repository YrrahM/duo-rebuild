import Link from "next/link";
import Image from "next/image";
import MainLayout from "@/components/MainLayout"; // adjust if not using @ alias

export const metadata = {
  title: "Testimonials | businessenglish.vip",
  description:
    "What professionals say about learning with Harry Michael Ernest — real results in Business English and specialized fields.",
};

export default function TestimonialsEN() {
  return (
    <MainLayout>
      <div
        className="animate-fade-in"
        style={{
          minHeight: "auto",
          marginBottom: "4rem",
          padding: "2rem 1rem",
          background: "linear-gradient(to bottom, #bfdbfe, #ffffff, #e5e7eb)",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Testimonials</h2>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Testimonial 1 — Alejandro Javier Quezada Ramírez */}
          <article className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-gray-200">
            {/* Company/Logo first */}
            <div className="mb-4 flex justify-center">
              <Image
                src="/logos/quezada.jpg" // portrait logo as noted
                alt="Company logo for Alejandro Javier Quezada Ramírez"
                width={120}
                height={120}
                className="rounded-md object-contain"
              />
            </div>

            {/* Text */}
            <p className="text-gray-700 leading-relaxed">
              “Harry helped me gain confidence for international meetings and presentations.
              His classes are practical, focused on real business situations, and tailored
              to the language I actually use at work.”
            </p>

            {/* Attribution */}
            <p className="mt-4 font-semibold text-gray-900">
              — Alejandro Javier Quezada Ramírez
            </p>
          </article>

          {/* Testimonial 2 — Banjamin Porras (Bechtel logo sizing fixed) */}
          <article className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-gray-200">
            {/* Company/Logo first */}
            <div className="mb-4 flex justify-center">
              <Image
                src="/logos/bechtel.png" // ensure this path exists; fixed size avoids layout takeover
                alt="Bechtel logo"
                width={140}
                height={140}
                className="object-contain"
                priority
              />
            </div>

            {/* Text */}
            <p className="text-gray-700 leading-relaxed">
              “Clear, goal-oriented lessons that improved my technical vocabulary and email
              communication. I saw immediate results with clients and colleagues.”
            </p>

            {/* Attribution */}
            <p className="mt-4 font-semibold text-gray-900">
              — Banjamin Porras
            </p>
          </article>
        </div>

        {/* CTA buttons (isolated to avoid footer conflicts) */}
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
