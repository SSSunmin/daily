/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deepDarkGreen:"#344e41",
        darkGreen:"#3a5a40",
        green:"#588157",
        lightGreen:'#a3b18a',
        paleGreen:"#dad7cd"
      }
    },
  },
  plugins: [],
}

