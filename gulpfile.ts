/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const tailwind = require("tailwindcss");
const postcssImport = require("postcss-import");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
// const uglify = require("gulp-uglify");

gulp.task("css", function () {
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
    .pipe(gulp.dest("./public/dist/"));
});

// gulp.task("js", function () {
//   return gulp
//     .src("./src/js/*.js")
//     .pipe(uglify())
//     .pipe(rename({ extname: ".min.js" }))
//     .pipe(gulp.dest("./public/dist/"));
// })
