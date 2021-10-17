module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
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
    extend: {},
  },
  plugins: [],
};
