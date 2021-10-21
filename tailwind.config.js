const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "475px",
      iconBreak: "880px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        inter: "Inter",
        archivoBlack: "Archivo Black",
        jura: "Jura",
        exo2: "Exo 2",
        poppins: "Poppins",
      },
      colors: {
        darkRed: "#e73925",
        darkYellow: "#f6d60e",
        darkBlack: "#0c0c0a",
        darkGray: "#1f1f1f",
        lightBg: "#c6c6c6",
        lightSide: "#211e29",
        lightHead: "#f6d708",
        lightCard: "#ededed",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["dark"],
    },
  },
  plugins: [],
};
