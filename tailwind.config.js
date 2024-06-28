/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        sm: "repeat(1, 266px)",
        md: "repeat(2, 266px)",
        lg: "repeat(3, 266px)",
      },
      gridTemplateRows: {
        sm: "auto 1fr auto",
      },
    },
  },
  plugins: [],
};
