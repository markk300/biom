const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        green: "#004A4C",
        darkGreen: "#002D33",
        siva1: "#F3F4F6",
      },
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
