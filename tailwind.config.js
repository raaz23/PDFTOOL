/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        backgroudColor:"#f7f5f2",
        logo:"#E5252A",
        red1:"#EF4444",
        red2:"#e04826",
        hoverColor:"#9C1B15",
      }
    },
  },
  plugins: [],
}
