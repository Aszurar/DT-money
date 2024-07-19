import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        title: '1.625rem',
        '2.5xl': '2rem',
      },

      width: {
        highlightcard: '22rem',
        37: '9.25rem',
      },

      minWidth: {
        table: '15.625rem',
        37: '9.25rem',
        highlightcard: '260px',
      },

      height: {
        header: '25vh',
        13.5: '3.375rem',
        dashboard: 'calc(100vh - 23vh)',
      },
      maxHeight: {
        25: '6.25rem',
        50: '12.5rem',
        75: '18.75rem',
        100: '25rem',
        108: '27rem',
        112: '28rem',
        118: '29.5rem',
        125: '31.25rem',
        130: '32.5rem',
      },

      maxWidth: {
        app: '1120px',
        modal: '535px',
      },

      gridTemplateColumns: {
        table: '4fr 2fr 2fr 1fr',
      },

      screens: {
        'phone-md': '360px',
        'phone-lg': '390px',
        'phone-xl': '400px',
        'iPhone-se': {
          raw: '(min-width: 375px) and (max-height: 667px)',
        },
        'notebook-sm': {
          raw: '(min-width: 440px) and (min-height: 668px)',
        },
        'notebook-sm-2': {
          raw: '(min-width: 440px) and (min-height: 700px)',
        },
        'notebook-md': {
          raw: '(min-width: 440px) and (min-height: 800px)',
        },
        'notebook-lg': {
          raw: '(min-width: 440px) and (min-height: 900px)',
        },
        'notebook-xl': {
          raw: '(min-width: 440px) and (min-height: 1024px)',
        },
      },

      colors: {
        red: {
          300: '#F75A68',
          500: '#AB222E',
          700: '#AA2834',
        },
        dark: {
          50: 'rgba(0, 0, 0, 0.75)',
        },
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },

        gray: {
          100: '#E1E1E6',
          300: '#C4C4CC',
          400: '#8D8D99',
          500: '#7C7C8A',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.border-top-4-table': {
          'border-top': '4px solid transparent',
        },
      })
    }),
  ],
}
