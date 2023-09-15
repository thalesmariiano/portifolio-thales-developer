/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        mediumPurple: '#551fdb',
        lightPurple: '#6531e6',
        mediumDarkPurple: '#02002d',
        darkPurple: '#020026',
        veryDarkPurple: '#04021d'
      },
      boxShadow: {
        inset: 'inset -3px 5px 5px rgba(0,0,0,.2)',
        toLeft: '-3px 5px 5px rgba(0,0,0,.2)'
      }
    },
    fontFamily: {
      madeTommy: ['madeTommyLight', 'sans-serif'],
      kusanagi: ['kusanagi', 'sans-serif']
    }
  },
  plugins: [],
}

