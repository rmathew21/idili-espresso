/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        cream: '#FAF6EF',
        espresso: '#2C1A0E',
        mocha: '#6B3F1F',
        gold: '#C9A96E',
        'gold-light': '#E8D5B0',
        sage: '#8A9E7A',
      },
    },
  },
  plugins: [],
}

