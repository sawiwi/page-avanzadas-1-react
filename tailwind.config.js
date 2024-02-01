/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'img-departamento': "url('https://res.cloudinary.com/dvdb33uyj/image/upload/v1690906191/Projects/unne/img/Invertir/UNIDADES_NUEVAS__DEPARTAMENTO_ffxlui.webp')",
        'img-estacionamiento': "url('https://res.cloudinary.com/dvdb33uyj/image/upload/v1690906035/Projects/unne/img/Invertir/UNIDADES_NUEVAS__ESTACIONAMIENTO_ag2mc7.webp')",
        'img-bodega': "url('https://res.cloudinary.com/dvdb33uyj/image/upload/v1690906185/Projects/unne/img/Invertir/UNIDADES_NUEVAS__BODEGA_oxyv3r.webp')",
      },
      screens:{
        'sm': '640px',
        //@media (min-width: 640px)
        'md': '768px',
        //@media (min-width: 768px)
        'lg': '1024px',
        //@media (min-width: 1024px)
        'xl': '1280px',
        //@media (min-width: 1280px)
        '2xl': '1536px',
        //@media (min-width: 1536px)
        '3xl': '1920px',
        //@media (min-width: 1920px)
      },
      fontFamily:{
          customFont:['Work Sans', 'sans-serif']
      },
      colors: {
        // primary: {
        //   DEFAULT: '#bbffe4',
        //   opacity: '#bbffe4d4',
        //   ligth: '#bbffe5',
        //   700: '#a0ffd9',
        //   // 400: '#fb923C',
        // },
          primary: {
            DEFAULT: '#ffffe5',
            opacity: '#ffffe5d4',
            ligth: '#ffffe5',
            700: '#f2f2d6',
            // 400: '#fb923C',
          },
        secondary: {
          DEFAULT: '#614d19',
          opacity: '#614d19d4',
          ligth: '#614d19',
          700: '#4e3e15',
          800:'#413312',
          grey: '#85795b'
          // 300: '#FCD34D',
          // 400: '#FACC15',
        },
        // secondary: {
        //   DEFAULT: '#000018',
        //   opacity: '#000018d4',
        //   ligth: '#01014a',
        //   700: '#000083',
        //   800:'#000064',
        //   grey: '#85795b'
        //   // 300: '#FCD34D',
        //   // 400: '#FACC15',
        // },
      },
    },
  },
  plugins: [require('daisyui')],
};
