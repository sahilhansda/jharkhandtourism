/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          100: "#e6f4ea",
  300: "#a1e3b4",
  400: "#6ed49c",
  500: "#34a853",
  600: "#2d8e46",
        },
      },
      animation: {
        spinSlow: "spin 20s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
