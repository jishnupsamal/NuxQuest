/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.jsx',
        './components/**/*.jsx',
  ],
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'Esoteric': ['"Esoteric"', 'serif']   // Ensure fonts with spaces have " " surrounding it.
    },
  
    extend: {
    },
  },
  plugins: [],
})