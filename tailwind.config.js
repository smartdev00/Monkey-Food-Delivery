/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      icongray: {
        50: "#4a4b4d",
        100: "#7c7d7e",
        200: "#828282",
        300: "#b6b7b7",
      },
      iconorange: {
        50: "#fc6011",
        100: "#ee5a30",
      },
      pageback: {
        50: "#f6f6f6",
        100: "#d8d8d8",
      },
      transparent: "transparent",
      main: "#fc6011",
      primary: "#4a4b4d",
      secondary: "#7c7d7e",
      placeholder: "#b6b7b7",
      facebook: "#367FC0",
      white: "#ffffff",
    },
    extend: {
      spacing: {
        "9px": "9px",
        "13px": "13px",
        "16px": "16px",
        "18px": "18px",
        "23px": "23px",
        "21px": "21px",
        "19px": "19px",
        "31px": "31px",
        "124px": "124px",
      },
      backgroundImage: {
        "pizza-back": "url('/public/assets/img/menu/pizza.png')",
      },
    },
    padding: {
      "108px": "108px",
      "16px": "16px",
    },
    width: {
      "53px": "53px",
      "307px": "307px",
    },
    height: {
      "53px": "53px",
      "75px": "75px",
    },
    borderWidth: {
      "1px": "1px",
    },
    container: {
      center: true,
    },
    screens: {
      sm: "375px",
    },
    borderRadius: {
      "7px": "7px",
    },
  },
  plugins: [],
};
