/** @type {import('tailwindcss').Config} */
const constants = {
  red: '#FC836D',
  green: '#1DC37E',
  black: '#3B434E',
  white: 'white',
  'primary': '#7653FC',
  'light-green': '#C8F8E4'
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:constants,
      fontFamily:{
        sans: ['Noto Sans', 'sans-serif']
      },
      fontSize: {
        xs: '0.82rem',
        sm: '0.98rem',
        base: '1.15rem',
        lg: '1.22rem',
        xl: '1.36rem',
        '1.5x1': '1.5rem',
        '2x1': '1.725rem',
        '3x1': '2.155rem',
        '4x1': '2.58rem',
        '5x1': '3.45rem',
        '6x1': '4.3rem',
        '7x1': '5.17rem',
        '8x1': '6.9rem',
        '9x1': '9.2rem',
        'h1':'1.625rem',
        'h2':'1.375rem',
        'h3':'1.25rem'
      },
    },
  },
  plugins: [],
}
