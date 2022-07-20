const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.d.ts",
    "./public/index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        WorkSans: ["Work Sans", "sans-serif"],
      },
      colors: {
        "signoz-primary": "#F25733",
        "dark-intermediate": "#404C5E",
      },
    },
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [],
};
