/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge : ['./src/**/*.{html, js, css}'],
  darkMode : "class",
  theme: {
    extend: {
      colors : {

        light : {
          "primary" : "#2C7EF8",
          "primary-hover-light": "#075CD9",
          "on-primary-light": "#FFFFFF",
          "on-background-light": "#191C1E",
          "about-us-bgcolor" : "#EBF3FE",
          "input-border" : "#E6E6E6",
        },
        dark :{
          "primary" : "#3A86F8",
          "primary-hover-dark": "#6BA4FA",
          "background-dark" : "#040810",
          "on-background-dark": "#E6E9EF",
          "surface-dark" : "#E6E9EF",
          "a-dark" : "#CFCFCF",
          "a-hover-dark" : "#037FFF",
          "text-color" : "#ffffff",
          "about-bg" : "#122549",
          "card-bg" : "#0B192D",
          "about-me-card" : "#0E1E34"
        }


      },
      fontFamily:{
        "yekan":["yekan"]
      },

      boxShadow:{
        "app": "0px_0px_24px_0px_rgba(0, 0, 0, 0.05)",
        "comment" : "0px_4px_63px_0px_rgba(0, 0, 0, 0.04)"
      },

      gridTemplateColumns:{
        "card" : "repeat( auto-fit , 190px )",
        "lgcard":"repeat(auto-fit , 260px)",
        "comment": "repeat(3 , 1fr)",
        "about-mobile" : "repeat( 1 , 1fr )",
        "about-desktop" : "repeat( 2 , 1fr )"
      },
      gridAutoRows:{
        "auto-row" : "190px",
        "lg-auto-row" : "260px"
      },
      gridTemplateRows:{
        "about-mobile" : "repeat( 3 , 1fr )",
        "about-desktop" : "repeat( 2 , 350px )"      }

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
  ],
}

