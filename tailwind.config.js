/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      'white':  '#ffffff',
      'black': '#000000',
      'emerald': '#50C878',
      'emerald-hover': '#3ba15d',
      'champagne-pink': '#F7F7FF',
      'grey': '#A9A9A9'
    }, 
    extend: {
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
        'bookletter': ['"Goudy Bookletter 1911"', 'serif'],
        'exo': ['"Exo 2"', "sans-serif"]
      }
    }
  },
  plugins: [],
}