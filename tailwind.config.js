/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  content: ["./src/**/*.{ts,tsx}", "./src/css/base.css"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("precss"),
    require("postcss-import"),
    addDynamicIconSelectors(),
    plugin(function({ addVariant }) {
      addVariant('children', '&>*')
    })
  ],
  daisyui: {
    themes: ["cupcake", "dim"],
  },
};
