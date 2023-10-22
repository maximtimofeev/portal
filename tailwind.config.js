// const fontComponents = require('./src/styles/tailwind.fonts')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/helpers/**/*.rb', './app/views/**/*.{html,html.erb,erb}', './app/frontend/**/*.tsx'],
  corePlugins: {
    preflight: false,
    fontFamily: false,
    // fontSize: false,
    fontStyle: false,
    fontVariantNumeric: false,
    // fontWeight: false,
    fontSmoothing: false,
  },
  theme: {
    extend: {
      backgroundColor: {
        transparent: 'transparent',
      },
      boxShadow: {
        main: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.25), 0 0.25rem 1.25rem rgba(0, 0, 0, 0.3)',
        secondary: '0 0 0.25rem rgba(0, 0, 0, 0.25)',
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
