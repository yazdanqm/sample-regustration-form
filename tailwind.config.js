import { error } from 'cypress/types/jquery';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        backgroud : '#FBFAFA',
        border : '#eaeff2',
        error : '#E74C3C',
        success : '#2ECC71',
        darkerBorder : '#d3d7da',
        input : '#fefeff',
        placeholder : '#9ca7b0',
        text : '#121f2d',
        primary : '#1b84f2',
        primaryDarker : '#1877da',
        description : '#8d97a5',
        disableBackground : '#e5e5e5',
        disableText : '#ababab'
      },
      fontWeight: {
        ultralight: '100',
        light: '200',
        regular: '300',
        medium: '400',
        semibold: '500',
        bold: '600',
        extrabold: '700',
        black: '800',
        heavy: '900',
      },
    },
  },
  plugins: [],
};
