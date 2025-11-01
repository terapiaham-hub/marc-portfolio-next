/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F6EF',
        ink: '#5B5B5B',
        accent: '#7A715C',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Raleway', 'serif'],
      },
    },
  },
  plugins: [],
};
