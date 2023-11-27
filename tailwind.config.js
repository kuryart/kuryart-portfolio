/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{ts,tsx}", "./src/css/base.css"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("postcss-import"),
  ],
  daisyui: {
    themes: ["cupcake", "dim"],
  },
};
