/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aox-yellow': '#FFCC00', 
        'aox-yellow-hover': '#e6b800'
      }
    },
  },
  plugins: [],
}