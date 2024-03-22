/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      rs0: "1175px",
      rs1: "1060px",
      rs2: "960px",
      rs3: "850px",
      rs4: "760px",
      "2xl": "1536px",
      custom: "2000px",
    },
    extend: {},
  },
  plugins: [],
};
