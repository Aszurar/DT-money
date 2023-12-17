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
      },

      minWidth: {
        table: '37.5rem',
      },

      height: {
        header: '25vh',
      },
      maxWidth: {
        app: '1120px',
      },

      gridTemplateColumns: {
        table: '4fr 2fr 2fr 1fr',
      },

      colors: {
        red: {
          300: '#F75A68',
          500: '#AB222E',
          700: '#7A1921',
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
  plugins: [],
}
