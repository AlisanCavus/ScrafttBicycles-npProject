module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': { "max" : "1024px" },
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
      sans:['Josefin Sans', 'sans-serif'],
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
      backgroundImage:{
        'bicycle' : "url('https://images.pexels.com/photos/686230/pexels-photo-686230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260') ",
        'tamir' : "url('https://images.pexels.com/photos/5446308/pexels-photo-5446308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        'garage' : "url('https://images.pexels.com/photos/6156531/pexels-photo-6156531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        'update' : "url('https://images.pexels.com/photos/5061053/pexels-photo-5061053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        'forgot' : "url('https://images.pexels.com/photos/210095/pexels-photo-210095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        'checkout': "url('https://images.pexels.com/photos/10203439/pexels-photo-10203439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg) scaleX(-100%)' },
          '50%': { transform: 'rotate(5deg) scaleX(-100%)' },
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite ',
      }
    },
  },
  plugins: [
   
  ],
}


