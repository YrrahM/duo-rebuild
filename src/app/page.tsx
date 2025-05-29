import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection'; // ← Add this line

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Thank You!</h1>
        <p className="text-gray-700 text-lg">
          Your message has been sent. I’ll get back to you as soon as possible.
        </p>
      </div>
    </section>
  );
}

}
