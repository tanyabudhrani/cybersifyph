import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        200: '#ffffff', // almost white
        400: '#62755d', // dark pink
        500: '#979e82', // light pink 
        600: '#5ba6a2', // wine
      },
      grayscale: {
        25: '#E4E2DD', // beige
        50: '#CD6899', 
        100: '#efefef',
        200: '#FDFDFF',
        950: '#823A5D',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
