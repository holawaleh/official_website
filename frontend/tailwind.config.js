/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#95d5b2',
          400: '#74c69d',
          500: '#52b788',
          600: '#2d6a4f',
          700: '#1b4332',
          800: '#081c15',
          900: '#040f0a',
        },
      },
    },
  },
  plugins: [],
}