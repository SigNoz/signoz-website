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
        "signoz-primary-light": "#F79A84",
        "signoz-secondary-light": "#A3B4CB",
        "signoz-dark-intermediate": "#404C5E",
        "signoz-medium": "#132742",
        "signoz-dark-light": "#74797F",
        "signoz-pure": "#051326",
        "signoz-light": "#FAFAFA",
        "white-light": "#D9D9D9",
      },
      backgroundImage: {
        "hero-pattern-gradient":
          "linear-gradient(0deg, rgba(19, 39, 66, 0.008) -18.5%, rgba(246, 170, 152, 0.128) 25.41%, rgba(250, 250, 250, 0.4) 104.41%),url('/images/whysignozmore.jpg')",
      },
      boxShadow: {
        1: "0px 8px 24px 4px rgba(0, 0, 0, 0.05)",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      letterSpacing: {
        lightTigher: `-0.015em`,
      },
      lineHeight: {
        150: "150%",
      },
    },
    backgroundPosition: {
      "bottom-1": "1rem",
      "left-1": "1rem",
      top: "1rem",
    },
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
