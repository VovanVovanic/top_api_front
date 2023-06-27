/** @type {import('tailwindcss').Config} */
const constants = {
  red: '#FC836D',
  green: '#1DC37E',
  black: '#3B434E',
  white: 'white',
  'primary': '#7653FC',
  'primary-hover': '#5a3ccf',
  'gray': '#EBEBEB',
  'dark-grey': '#B3C0D9',
  'light-green': '#C8F8E4',
  'layout-grey': '#F5F6F8'
  
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
      borderRadius: {
        'tag_radius':'1.25rem'
      },
      colors:constants,
      fontFamily:{
        sans: ['Noto Sans KR', 'sans-serif']
      },
      gridTemplateColumns: {
        'layout_columns': 'auto 230px["sidebar"] minmax(320px,1200px)["content] auto'
      },
      gridTemplateRows: {
        'layout_rows': 'auto 1fr auto'
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.36rem',
        'hg':'1.875rem',
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
        'h3':'1.688rem'
      },
      padding: {
        '25': '1.563rem',
        '30': '1.875rem'
      },
      margin: {
        '25': '1.563rem',
        '30px': '1.875rem'
      }
    },

  },
  plugins: [],
}
