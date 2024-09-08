/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        backgroundLitePurple: '#EDD8FF',
      },
    },
    container: {
      padding: '1rem',
      center: true,
    },
  },
  plugins: [],
}

