/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src//*.{html,js,jsx,ts,tsx,css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        publicsans: [
          "'Public Sans', sans-serif",
          // ...defaultTheme.fontFamily.sans,
        ]
      },
      colors: {
        primary: {
         DEFAULT: 'hsl(233, 26%, 24%)',
         limegreen: 'hsl(136, 65%, 51%)',
         brightcyan: 'hsl(192, 70%, 51%)'
        },
        neutral: {
         grayishblue: 'hsl(233, 8%, 62%)',
         verylightgray: 'hsl(0, 0%, 98%)',
         white: 'hsl(0, 0%, 100%)'
        }
       },
    },
    
  },
  plugins: [],
}



