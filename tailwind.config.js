/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Montserrat": ['Montserrat']
      },
      keyframes: {
        fadeUp: {
          "0%": {transform:"translateY(-1.5rem)", opacity:"0%"},
          "100%": {opacity:"100%"}
        },
        fadeIn: {
          "0%": {opacity:"0%"},
          "100%": {opacity:"100%"}
        },
      },
      animation: {
        fadeUp: 'fadeUp 1.25s 1 ease-in-out',
        fadeIn: 'fadeIn .75s 1 ease-in-out',
      }
    },
  },
  plugins: [],
}