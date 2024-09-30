/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        popUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        popUp1: "popUp 1s ease-out forwards",
        popUp3: "popUp 2s ease-out forwards",
      },
      fontFamily: {
        spicy: ["Spicy Rice", "sans-serif"],
      },
    },
  },
  plugins: [],
};
