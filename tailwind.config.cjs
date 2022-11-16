/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        rotateCenter: "rotateCenter 3.6s ease-in-out both;",
      },
      keyframes: {
        rotateCenter: {
          "0%": {
            transform: "rotate(0)",
          },
          "100% ": {
            transform: "rotate(720deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
