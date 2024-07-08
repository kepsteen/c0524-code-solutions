/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jade: '#469f8c',
        grey: '#cccbcb',
      },
    },
  },
  plugins: [],
};
