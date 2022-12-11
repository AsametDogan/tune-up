/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1490px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1160px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '780px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '530px'},
      // => @media (max-width: 639px) { ... }

      'just-sm': {'min': '530px'},
      
    },
  },
  plugins: [],
}