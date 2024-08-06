/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      'emerald': '#50C878',
      'white':  '#ffffff',
      'black': '#000000'
    }, 
    fontFamily: {
      'roboto': ["Roboto", "sans-serif"]
    }
  },
  plugins: [],
}