/** @type {import('tailwindcss').Config} */
const constants = {
  red: '#F23C3D',
  green: '#008D64',
  black: '#222222',
  white: '#ffffff',
  'light-gray': '#E8E7E3',
  'dark-green': '#006044',
  'beige': '#A49B8F',
  'light-green': '#E6F2EF'

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
        '9x1': '9.2rem'
      },
    },
  },
  plugins: [],
}
