'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Professional English instruction"
        layout="fill"
        objectFit="cover"
        priority
        placeholder="blur"
        blurDataURL="/blur-placeholder.jpg"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      <motion.div
        className="z-20 text-center px-6 md:px-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Expert Business English Coaching
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Tailored one-on-one and group English training for professionals in law, aviation,
          medicine, engineering, and more. Delivered online by a certified native speaker with 40+ years of experience.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-xl transition duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          Book a Free Trial Class
        </motion.a>
      </motion.div>
    </section>
  )
}
