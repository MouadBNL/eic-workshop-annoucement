/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': [ '"Poppins"', 'Helvetica, Arial, sans-serif']
      },
      colors: {
        primary: "#5A27EE",
        gray: {
          "dark": '#171717'
        }
      }
    },
  },
  plugins: [],
}
