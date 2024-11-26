/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softCyan: '#ECF8F9',
        ourServices: ' #FFE6D2',
        ourCostomers: ' #F9F9FF',
        readOur: '#ECF8F9',
        newSletter: ' #666DFF',
        ourWork: ' #FAFAFC',

      },
    },
  },
  plugins: [],
}

