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
      transparent: "transparent",
      main: "#fc6011",
      primary: "#4a4b4d",
      secondary: "#7c7d7e",
      placeholder: "#b6b7b7",
      facebook: "#367FC0",
      white: "#ffffff",
    },
    extend: {},
    padding: {
      "108px": "108px",
      "16px": "16px",
    },
    width: {
      "307px": "307px",
    },
    height: {},
    borderWidth: {
      "1px": "1px",
    },
    container: {
      center : true,
       
    },
    screens: {
      'sm': '528px',
    },
  },
  plugins: [],
};
