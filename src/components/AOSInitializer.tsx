'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,          // ⏱ smooth timing (ms)
      easing: 'ease-out-cubic', // 🎯 smoother animation curve
      once: true,             // ✅ animate only once
      offset: 80              // 📏 trigger slightly before the element enters
    })
  }, [])

  return null
}
