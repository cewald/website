/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'Fira Code',
          'ui-monospace',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace'
        ]
      },
      colors: {
        base: {
          lightest: '#eeeeee',
          light: '#cccccc',
          semilight: '#707070',
          default: '#999999',
          dark: '#666666',
          darkest: '#333333'
        }
      }
    }
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.vertical-rl': { writingMode: 'vertical-rl' },
        '.vertical-lr': { writingMode: 'vertical-lr' },
        '.horizontal-tb': { writingMode: 'horizontal-tb' },
      })
    }
  ],
}

