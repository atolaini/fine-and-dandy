const gulp = require("gulp");
const sass = require("gulp-sass");
const prefix = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");

//TASKS

//Copy HTML
gulp.task("copyHtml", () => {
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

//Compile SASS and prefix CSS
gulp.task("sass", () => {
  gulp
    .src(["src/scss/**/*.scss"], ["sass"])
    .pipe(sass().on("error", sass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(gulp.dest("dist/css"));
});

//Image Minify
gulp.task("minify", () => {
  gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
});

//CSS MINIFY
gulp.task("minify-css", () => {
  return gulp
    .src("dist/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist"));
});

//Wacth task
gulp.task("serve", ["sass", "copyHtml", "minify", "minify-css"], () => {
  gulp.watch(["src/scss/**/*.scss"], ["sass"]);
  gulp.watch(["src/*.html"], ["copyHtml"]);
  gulp.watch(["src/images/*"], ["minify"]);
});

//Default Task
gulp.task("default", ["serve"]);
