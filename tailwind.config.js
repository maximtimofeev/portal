// const fontComponents = require('./src/styles/tailwind.fonts')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/helpers/**/*.rb', './app/views/**/*.{html,html.erb,erb}', './app/frontend/**/*.tsx'],
  corePlugins: {
    preflight: false,
    fontFamily: false,
    fontSize: false,
    fontStyle: false,
    fontVariantNumeric: false,
    fontWeight: false,
    fontSmoothing: false,
  },
  theme: {
    extend: {
      backgroundColor: {
        transparent: 'transparent',
      },
      borderRadius: {
        px: '1px',
        half: '50%',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [
    // plugin(function ({ addComponents, theme }) {
    //   addComponents(fontComponents)
    // }),
  ],
}
