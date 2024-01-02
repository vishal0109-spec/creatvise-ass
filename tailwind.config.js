/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slateblue: "#5552b9",
        white: "#fff",
        darkslateblue: "#393771",
        gray: {
          "100": "#939297",
          "200": "#252525",
        },
        plum: "#a7a4de",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      "3xl": "22px",
      mini: "15px",
      "61xl": "80px",
      lgi: "19px",
      xl: "20px",
      "101xl": "120px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
