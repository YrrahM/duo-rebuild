export default function HeroSection({
  headline,
  subheadline,
  ctaLabel,
  onCtaClick,
  imageUrl,
  altText,
}: HeroSectionProps) {
  return (
    <section
      className="text-center px-6 py-40 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      aria-label={altText}
    >
      <div className="bg-white/80 p-10 max-w-3xl mx-auto rounded shadow">
        <h1 className="text-4xl font-bold mb-4 text-[#2B2D42]">{headline}</h1>
        <p className="text-lg text-[#2B2D42] mb-6">{subheadline}</p>
        <button
          onClick={onCtaClick}
          className="px-6 py-3 text-white bg-[#EF233C] hover:bg-[#D90429] rounded-lg font-semibold"
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}
