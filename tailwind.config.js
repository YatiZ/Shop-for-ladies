/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      'GreatVibes': 'Great Vibes, cursive',
      'Serif':'ui-serif, Georgia',
    },
    imgUpload:{
      content: "\f093",
      fontSize: "90px",
      position: 'absolute',
      paddingTop: "80px",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: '#63d3a6',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      opacity: '0',
      transition: '.5s ease',
      backgroundColor: '#fff',
    }
  },
  plugins: [],
}

