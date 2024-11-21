/** @type {import('tailwindcss').Config} */

const content = ['./index.html'];
const theme = {
  extend: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      'custom-green': 'hsl(75, 94%, 57%)',
      'custom-grey-700': 'hsl(0, 0%, 20%)',
      'custom-grey-800': 'hsl(0, 0%, 12%)',
      'custom-grey-900': 'hsl(0, 0%, 8%)',
    },
  },
};
const plugins = [];

export { content, theme, plugins };
