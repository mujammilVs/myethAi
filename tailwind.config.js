/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#00161D",
        cardColor: "#1E808C",
        secondary: "#0B2A2D",
        footer: "#010F14",
        buttonBg: "#b0faff",
      },
      fontFamily: {
        space: "Space Grotesk",
      },

      colors: {
        primary: "#b0faff",
        text: "#00161D",
        iconColor: "#61F0FE",
        navbg:'#0C2B2F',
      },
      borderColor: {
        color: "#0B2A2D",
        bgColor: "#00161D",
        border: "#0E8B9A",
      },
    },
  },
  plugins: [],
};
