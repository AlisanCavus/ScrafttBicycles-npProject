module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': { "max" : "700px" },
      // => @media (max-width: 700px) {...}

      'xs': '280px',
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
        primary: "#FFE8D6",
        secondary: "#DDBEA9",
        bart: "#B7B7A4",
        darkbart: "#A5A58D",
        tonage: "#CB997E",
        textMain: "#6B705C",
        abitgray: "#a69cac"
      },
    },
  },
  plugins: [],
}
