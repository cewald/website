/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
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
  },
  plugins: [],
}

