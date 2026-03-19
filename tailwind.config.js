/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F2EBE0',
          300: '#E8DDD0',
          400: '#D4C9B8',
        },
        chili: {
          500: '#C0392B',
          600: '#B7312C',
          700: '#9B2824',
        },
        terracotta: {
          400: '#E08850',
          500: '#D4723C',
          600: '#C0612E',
        },
        teal: {
          600: '#2C7A5E',
          700: '#1A6B5A',
        },
        bark: {
          800: '#2C2420',
          900: '#1A1A1A',
        },
        gold: {
          400: '#D4A843',
          500: '#C49A38',
        },
      },
      fontFamily: {
        display: ['"Alfa Slab One"', 'serif'],
        script: ['"Pacifico"', 'cursive'],
        body: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
