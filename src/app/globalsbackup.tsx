@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* ✅ Tailwind layers */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ✅ Global styles */
html {
  scroll-behavior: smooth;
  margin-right: 0;
  transition-property: none;
}

body {
  background: linear-gradient(to bottom, #60a5fa, #ffffff, #93c5fd); /* Matches HeroSection */
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  box-sizing: border-box;
}

/* ✅ Fade-in animation and utilities */
@layer utilities {
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-fade-in {
    animation: fade-in 1.5s ease-out forwards;
  }

  .animate-fade-in-delay-1 {
    animation: fade-in 1.5s ease-out forwards;
    animation-delay: 0.5s;
  }

  .animate-fade-in-delay-2 {
    animation: fade-in 1.5s ease-out forwards;
    animation-delay: 1s;
  }

  .animate-fade-in-delay-3 {
    animation: fade-in 1.5s ease-out forwards;
    animation-delay: 1.5s;
  }

  /* ✅ Screen-reader only (accessibility support) */
  .sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
}
