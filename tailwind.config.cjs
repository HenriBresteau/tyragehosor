/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        rotateCenter: "rotateCenter 3.6s ease-in-out both;",
        zoom: "zoom 6s cubic-bezier(0.895, 0.030, 0.685, 0.220) forwards",
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
        zoom: {
          "0%": {
            transform: "scale(2) translate(-25%,-25%)",
          },
          "50% ": {
            transform: "scale(1) translate(-50%,-50%)",
            borderRadius: "50%",
          },
          "75% ": {
            opacity: "1",
          },
          "100% ": {
            transform: "translate(-50%,75px)",
            borderRadius: "50%",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
