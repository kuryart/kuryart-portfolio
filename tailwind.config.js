/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/css/base.css",
    // "./src/css/base.css",
    // "./src/css/magic.min.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("precss"),
    require("postcss-import"),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "dim"],
  },
};
