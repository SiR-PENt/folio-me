/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#bbb',
        'light-dark': '#1c1c1c',
        'primary': '#a2a2a2',
        'secondary': '#494949',
        'red':'#FF0000',
        'blue': '#0000FF',
        'green':'#00ff00'

      },
      lineHeight: {
        'extra-tight': '.8',
      },
      fontFamily: {
        lato: [ 'var(--font-lato)', 'sans-serif' ],
        montserrat: [ 'var(--font-montserrat)', 'sans-serif' ],
        spartan: [ 'var(--font-spartan)', 'sans-serif' ],
        roboto: [ 'var(--font-roboto)', 'sans-serif' ],
        opensans: [ 'var(--font-opensans)', 'sans-serif' ],
      },
    },
  },
  plugins: [],
}
