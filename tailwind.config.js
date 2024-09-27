/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#868e96",
      },
    },
    container: {
      center: true,
      padding: "16px",
    },
  },
  plugins: [],
};
