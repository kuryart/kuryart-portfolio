/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require("gulp");
const { watch } = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const tailwind = require("tailwindcss");
const postcssImport = require("postcss-import");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");

function css() {
  var plugins = [
    postcssImport(),
    tailwind("./tailwind.config.js"),
    autoprefixer(),
  ];
  return gulp
    .src("./src/css/base.css")
    .pipe(postcss(plugins))
    .pipe(cleanCSS())
    .pipe(rename("style.css"))
    .pipe(gulp.dest("./build/"))
    .pipe(gulp.src("./src/assets/**/*.*"))
    .pipe(gulp.dest("./build/"))
}

exports.build = async function () {
  return css();
};
exports.dev = function () {
  watch(["src/**/*.css", "src/**/*.ts", "src/**/*.tsx"], css);
};
