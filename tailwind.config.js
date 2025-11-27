/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-deep": "#020617",
      },
      boxShadow: {
        glass: "0 18px 45px rgba(15,23,42,0.7)",
      },
    },
  },
  plugins: [],
};
