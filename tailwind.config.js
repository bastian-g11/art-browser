/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-500': '#CC9F54',
        'gray-300': '#BBBAB0',
      },
    },
  },
  plugins: [],
};
