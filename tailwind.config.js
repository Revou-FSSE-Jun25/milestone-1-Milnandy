/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [
    'selector', '[data-mode="dark"]'
  ],
  content: [
    './index.html',
    './js/**/*.js'
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#94a3b8',
        gray: colors.gray,
        teal: colors.teal,
      },
    },
  },
  plugins: [],
}

