'use client';
import Image from 'next/image';

type HeroSectionProps = {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  onCtaClick: () => void;
  imageUrl: string; // e.g. "/hero.jpg"
  altText: string;
};

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
      className="relative w-full h-screen flex flex-col justify-center items-center text-white text-center px-4 overflow-hidden"
      aria-label={altText}
      data-aos="fade-up"
    >
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={altText}
        fill
        sizes="100vw"
        className="object-cover z-0"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAOABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2X4zfG2y0v41ab4GsvFZ26Eft+u6fjg/5yK9j07Uv7M/s/wCw2P8AaOo39h/oGnajXz3+1b+wB4k+Ifxx/wCFkeH9a0K3ivIrSC80/VHu23upCsQVJ4OB1/Kvrf4feApNM0yysdYvo9V1RFLfbjaqCf1oA4bVvsGzT/8Ar0T/AJcPrRXZap8E9MmvGY32o/8AgW3+FFAH/9k="
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text Content */}
      <div className="relative z-20 max-w-2xl text-center px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight" data-aos="fade-down">
          {headline}
        </h1>
        <p className="text-lg sm:text-xl mb-6 leading-relaxed" data-aos="fade-left" data-aos-delay="200">
          {subheadline}
        </p>
        <button
          onClick={onCtaClick}
          className="px-6 py-3 bg-[#EF233C] hover:bg-[#D90429] transition-transform transform hover:scale-105 rounded-md text-white text-lg shadow-md hover:shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}
