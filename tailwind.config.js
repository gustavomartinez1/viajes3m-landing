/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C2D48',       // Deep navy blue
        secondary: '#145DA0',     // Ocean blue
        accent: '#F4A261',        // Warm sunset orange
        'accent-dark': '#E76F51', // Terracotta
        sand: '#F5F1E8',          // Warm sand
        'soft-gray': '#6B7280',
        charcoal: '#1F2937',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
