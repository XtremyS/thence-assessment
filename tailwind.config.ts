/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        xl: "1440px",
      },
      borderRadius: {
        customLg: "107px",
        customMd: "40px",
      },
      colors: {
        lightButton: {
          primaryBg: "#FFFF",
          primaryText: "#1C1C1C",
          hoverBg: "#F1F1F1",
          hoverText: "#1C1C1C",
        },
        darkButton: {
          primaryBg: "#1C1C1C",
          primaryText: "#FFFF",
          hoverBg: "#4E4E4E",
          hoverText: "#FFFF",
          disabledBg: "#C9C9C9",
          disabledText: "#FFFF",
        },
        footerBg: "#F5F5F5",
        customBorderColor: "#EAEAEA",
        successGreen: "#2DA950",
        inputBg: "#EFEFEF",
        primaryColor: "#1C1C1C",
      },
    },
  },
  plugins: [],
};
