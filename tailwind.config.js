const { fontFamily, screens } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{ts,tsx}',
    './features/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './layout/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-variant-1': 'var(--color-primary-variant-1)',
        'primary-variant-2': 'var(--color-primary-variant-2)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)'
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...fontFamily.sans],
        tomorrow: ['Tomorrow', ...fontFamily.sans]
      },
      screens: { '3xl': '1920px', ...screens }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-text-stroke')]
}

