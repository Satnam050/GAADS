/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        themeOrange : "#f89d1b",
        btnHoverRed : "#fb2c36",
      },
      fontFamily: {
        ptsans : ['PTSans', 'sans-serif'],
      },
    },
     
  },
  plugins: [],
}

