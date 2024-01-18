/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    display: ["NeoSansArabic", "sans-serif"],
    body: ["Inter", "sans-serif"],
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    screens: {
      sm: "400px",
      md: "768px",
      lg: "960px",
      xl: "1500px",
      "2xl": "2160px",
    },
    extend: {
      backgroundImage: {
        ticket: "url('assets/tickets/card_background.png')",
      },
      colors: {
        white: "#F3F5F7",
        extraWhite: "#FFFFFF",
        primary: "#8A74F9",
        accent: "#F13024",
        black: "#1C1C28",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },

  plugins: [require("tailwindcss-rtl"), require('flowbite/plugin')],
};
