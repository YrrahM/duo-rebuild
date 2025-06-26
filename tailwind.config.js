/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}' // <- THIS LINE is essential
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
