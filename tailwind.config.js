/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["Sekuya", "sans-serif"],
        fact:["Dancing Script", "cursive"]
      },
    },
  },
  plugins: [],
};