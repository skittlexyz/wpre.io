/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#4f72fc',
        'secondary': '#ffc034',
        'tertiary': '#9398b0',
        'white': '#f2f2f2',
        'black': '#151515'
      }
    },
  },
  plugins: [],
}

