'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';

// Framer Motion components
const MotionDiv = dynamic(() =>
  import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);
const MotionLi = dynamic(() =>
  import('framer-motion').then((mod) => mod.motion.li),
  { ssr: false }
);

const sections = ['home', 'features', 'contact'];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number], // ✅ This fixes type error
    },
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

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        {
          rootMargin: '-50% 0px -49% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-md text-white shadow-md">
      <nav className="sticky top-0 z-50 w-full bg-black bg-opacity-80 backdrop-blur-md text-white shadow-md">
  <div className="max-w-5xl mx-auto px-4 py-4 flex justify-center items-center">
    <ul className="flex gap-10 text-base font-medium">
      {sections.map((id) => (
        <li key={id}>
          <Link
            href={`#${id}`}
            className={`transition ${
              active === id
                ? 'text-blue-400 font-semibold'
                : 'text-white hover:text-blue-300'
            }`}
          >
            {id === 'home'
              ? 'Inicio'
              : id === 'features'
              ? 'Beneficios'
              : 'Contacto'}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</nav>

      {/* Mobile Menu + Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Slide-in Menu */}
            <MotionDiv
              key="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-black text-white z-50 md:hidden"
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <span className="text-lg font-semibold">Menú</span>
                <button onClick={() => setMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <MotionDiv
                className="flex flex-col gap-4 p-6 text-base"
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
                      className={`block py-2 px-2 rounded transition ${
                        active === id
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-blue-800'
                      }`}
                    >
                      {id === 'home'
                        ? 'Inicio'
                        : id === 'features'
                        ? 'Beneficios'
                        : 'Contacto'}
                    </Link>
                  </MotionLi>
                ))}
              </MotionDiv>
            </MotionDiv>

            {/* Backdrop */}
            <MotionDiv
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
