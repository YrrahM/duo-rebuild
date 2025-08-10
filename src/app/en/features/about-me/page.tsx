import Link from "next/link";
import Image from "next/image";
import MainLayout from "@/components/MainLayout"; // adjust path if needed

export const metadata = {
  title: "About Me | businessenglish.vip",
  description:
    "Meet Harry Michael Ernest — native British English teacher with over 40 years of experience teaching professionals worldwide in business, medicine, engineering, and more.",
};

export default function AboutMeEN() {
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
        {/* Top main image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logos/sobre-mi.png"
            alt="Harry Michael Ernest teaching"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10">About Me</h2>

        {/* Text description */}
        <div className="max-w-3xl mx-auto mb-12 text-gray-700 space-y-4">
          <p>
            My name is Harry Michael Ernest, and I’m a native British English teacher with over 40
            years of experience helping professionals succeed in their careers through English.
          </p>
          <p>
            I hold a Master’s in TEFL (Teaching English as a Foreign Language) and Educational
            Psychology, as well as a CELTA certification. I’ve taught professionals in a wide
            variety of fields — including business, medicine, engineering, law, aviation,
            hospitality, and more — across multiple countries.
          </p>
          <p>
            My teaching philosophy is centered on creating a friendly, encouraging learning
            environment where you can build confidence, fluency, and the ability to express
            yourself naturally in real-world situations.
          </p>
        </div>

        {/* Grid of role-related images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Image src="/logos/student.png" alt="Student" width={150} height={150} />
          <Image src="/logos/awacs.png" alt="Aviation specialist" width={150} height={150} />
          <Image src="/logos/doctor.png" alt="Doctor" width={150} height={150} />
          <Image src="/logos/businessman.png" alt="Businessman" width={150} height={150} />
          <Image src="/logos/engineer.png" alt="Engineer" width={150} height={150} />
          <Image src="/logos/child.png" alt="Child learning English" width={150} height={150} />
        </div>

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
            aria-label="Book your free English class with Harry Michael Ernest"
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
