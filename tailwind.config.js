/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      icongray: {
        50: "#4a4b4d",
        100: "#7c7d7e",
        200: "#828282",
      },
      iconorange: {
        50: "#fc6011",
        100: "#ee5a30",
      },
    },
    extend: {},
  },
  plugins: [],
};
