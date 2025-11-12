/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCC29",
        secondary: "#FFE490",
      },
      screens: {
        xxl: "1440px", // Define the xxl breakpoint at 1440px or any value you prefer
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
