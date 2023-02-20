/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#FDE68A",
          secondary: "#FEE2B5",
          // ...
        },
        dark: {
          primary: "#4B5563",
          secondary: "#1F2937",
          // ...
        },
      },
    },
  },
  plugins: [],
};
