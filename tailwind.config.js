module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': "280px",
      // => @media (min-width: 280px) { ... }

      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily:{
      sans:['Montserrat', 'sans-serif'],
    },
    
    
    extend: {
      colors:{
        primary: "#FAF9F9",
        secondary: "#BEE3DB",
        bart: "#89B0AE",
        darkbart: "#555B6E",
        tonage: "#FFD6BA",
        textMain: "#0d0c1d",
        abitgray: "#a69cac"
      },
    },
  },
  plugins: [],
}
