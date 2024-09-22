/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        outfit: ["Outfit", "system-ui"],
      },
      colors: {
        "black-stone": "#2A2B2E",
        snow: "#FFFBFE",
        grey: "#838E83",
        "violet": "#735CDD",
      },
    },
  },
  plugins: [],
};
