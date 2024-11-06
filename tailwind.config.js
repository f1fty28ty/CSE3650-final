/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#27fdf5',
          lightCyan: '#a8f6f8',
          paleBlue: '#d7fffe',
          pink: '#f98dc9',
          hotPink: '#f765b8',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}