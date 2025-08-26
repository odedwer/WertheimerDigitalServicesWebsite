/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // future-ready
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', 'Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
      },
      colors: {
        primary: {
          DEFAULT: '#4F46E5', // indigo-600
          700: '#4338CA',
          500: '#6366F1'
        },
        accent: {
          DEFAULT: '#06B6D4', // cyan-500
          600: '#0891B2'
        }
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: []
}
