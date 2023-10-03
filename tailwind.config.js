/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      'GreatVibes': 'Great Vibes, cursive',
      'Serif':'ui-serif, Georgia',
    },
    // animation:{
    //   'animation':'animate 10s linear infinite',
    //   'animation-delay':'calc(-1s * var(--i))'
    // }
  },
  plugins: [],
}

