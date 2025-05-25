import HeroSection from "../components/HeroSection";
export default function Home() {
  return (
    <main>
      <HeroSection
        headline="Speak English Like a Pro"
        subheadline="Fast-track your fluency with tailored tutoring"
        ctaLabel="Start Your Free Trial"
        onCtaClick={() => alert("Free Trial Booked")}
        imageUrl="/hero.jpg"
        altText="Person learning English on a laptop"
      />
    </main>
  );
}
