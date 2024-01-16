/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#FFFFFF',
        'primary-complementary' : '#000000',
        'secondary-color': '#F1F5F9',
        'hover-color' : '#1E40AF',
        'accent-color' : '#000000',
        'accent-complementary' : '#ffffff'
      },
    },
    screens: {
      'md' : { 'max' : '1000px'} ,
      'sm' : { 'max' : '600px'} ,
    }
  },
  plugins: [],
}