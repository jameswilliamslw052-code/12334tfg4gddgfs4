/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0375E0', // based on provided logo blue
          dark: '#025BB5',
        },
        secondary: {
          DEFAULT: '#00BFA6',
          dark: '#009B84',
        },
        background: {
          light: '#F5FAFF',
          DEFAULT: '#EAF3FC',
          dark: '#0F1B2B',
        },
        accent: '#00A8E8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};