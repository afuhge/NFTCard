const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primaryBlue: '#8BACDA',
      primaryCyan: '#00FFF7',
      mainBg: '#0D192B',
      cardBg: '#14253D',
      line: '#2F415B',
      white: colors.white,
    },
    fontWeight: {
      light: 300,
      normal: 400,
      semibold: 600,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
