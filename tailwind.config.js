/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'custom-btn': 'rgb(105 203 132)',
        'custom-btn-hover': 'rgb(93 202 124)',
        'custom-btn-active': 'rgb(47 123 69)'
      }
    }
  },
  plugins: []
}
