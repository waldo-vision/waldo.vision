const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        animation: {
          fadeIn: "fadeIn 0.6s ease-in-out forwards"
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0, transform: "translateX(20px)" },
            "100%": { opacity: 1 }
          }
        },
      colors: {
        gray: colors.coolGray,
        blue: colors.indigo,
        fuchsia: colors.fuchsia
      }
    },
  },
  variants: {
    extend: {},
    animation: ['motion-safe']
  },
  plugins: [],
}
