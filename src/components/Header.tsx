'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '@/components/LanguageSwitcher';

// Framer Motion components (SSR-safe)
const MotionDiv = dynamic(() => import('framer-motion').then((m) => m.motion.div), { ssr: false });
const MotionLi  = dynamic(() => import('framer-motion').then((m) => m.motion.li),  { ssr: false });

const sections = ['home', 'features', 'contact'];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
  },
};

export default function Header() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(id),
        { rootMargin: '-50% 0px -49% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const label = (id: string) =>
    id === 'home' ? 'Inicio' : id === 'features' ? 'Beneficios' : 'Contacto';

  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{
        background: 'linear-gradient(to right, #bfdbfe, #ffffff, #e5e7eb)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Left: Logo / Home */}
        <Link href="/" className="font-semibold text-gray-800 hover:opacity-80">
          businessenglish.vip
        </Link>

        {/* Center: Desktop nav */}
        <ul className="hidden gap-8 text-sm font-medium md:flex">
          {sections.map((id) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                className={`transition ${
                  active === id
                    ? 'text-blue-700 font-semibold'
                    : 'text-gray-800 hover:text-blue-700'
                }`}
              >
                {label(id)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Switcher + Hamburger */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label="Abrir menú"
            className="md:hidden rounded-md p-2 text-gray-800 hover:bg-black/5"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu + Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Slide-in panel */}
            <MotionDiv
              key="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-0 z-50 h-full w-72 bg-white text-gray-900 md:hidden"
              style={{ boxShadow: '-6px 0 20px rgba(0,0,0,0.15)' }}
            >
              <div className="flex items-center justify-between border-b border-gray-200 p-4">
                <span className="text-lg font-semibold">Menú</span>
                <button
                  type="button"
                  aria-label="Cerrar menú"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md p-2 hover:bg-black/5"
                >
                  <X size={22} />
                </button>
              </div>

              <MotionDiv
                className="flex flex-col gap-2 p-4 text-base"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={listVariants}
              >
                {sections.map((id) => (
                  <MotionLi key={id} variants={itemVariants}>
                    <Link
                      href={`#${id}`}
                      onClick={() => setMenuOpen(false)}
                      className={`block rounded-md px-3 py-2 transition ${
                        active === id ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'
                      }`}
                    >
                      {label(id)}
                    </Link>
                  </MotionLi>
                ))}
              </MotionDiv>
            </MotionDiv>

            {/* Backdrop */}
            <MotionDiv
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black md:hidden"
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
