'use client';

import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function ClientHeader() {
  return (
    <div className="fixed top-3 right-3 z-[2000]">
      <div className="rounded-full border border-gray-300/70 bg-white/80 backdrop-blur px-3 py-1 shadow-md">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
