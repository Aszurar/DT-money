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
        table: '37.5rem',
        37: '9.25rem',
      },

      height: {
        header: '25vh',
        13.5: '3.375rem',
      },
      maxWidth: {
        app: '1120px',
        modal: '535px',
      },

      gridTemplateColumns: {
        table: '4fr 2fr 2fr 1fr',
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
    plugin(({ addUtilities }) => {
      addUtilities({
        '.border-top-4-table': {
          'border-top': '4px solid transparent',
        },
      })
    }),
  ],
}
