const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        blue: colors.indigo,
        fuchsia: colors.fuchsia
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
