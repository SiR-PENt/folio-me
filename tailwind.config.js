/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-dark': '#1c1c1c',
        'primary': '#a2a2a2',
        'secondary': '#494949',
      },
      lineHeight: {
        'extra-tight': '.8',
      },
      fontFamily: {
        sans: [ 'var(--font-lato)', 'sans-serif' ],
      },
    },
  },
  plugins: [],
}
