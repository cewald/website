/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app.vue', './{pages,components}/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mono: [
        'ui-monospace',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ]
    },
    extend: {
      colors: {
        base: {
          lightest: '#eeeeee',
          light: '#cccccc',
          semilight: '#757575',
          default: '#999999',
          dark: '#666666',
          darkest: '#333333'
        }
      }
    }
  }
}
