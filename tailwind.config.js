/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container :{
      center : true,
      padding : '16px',
    },
    extend: {
      colors : {
        primary: '#06b6d4',
        dark: '#1e293b',
      },
      screens :{
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

