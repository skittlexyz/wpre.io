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
    screens: {
      'default': { 'raw': '(min-height: 400px)' },

      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

