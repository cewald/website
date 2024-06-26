const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{vue,js,ts,jsx,tsx}' ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: [ 'Martian Mono', ...defaultTheme.fontFamily.mono ],
      },
      colors: {
        base: {
          'lightest': '#eeeeee',
          'lighter': '#cccccc',
          'light': '#aaa',
          'light-contrast': '#949494',
          'semilight': '#707070',
          'semilight-contrast': '#757575',
          'default': '#999999',
          'dark': '#666666',
          'darkest': '#333333',
        },
      },
      flex: {
        fix: '0 0 auto',
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.vertical-rl': { writingMode: 'vertical-rl' },
        '.vertical-lr': { writingMode: 'vertical-lr' },
        '.horizontal-tb': { writingMode: 'horizontal-tb' },
      })
    },
  ],
}
