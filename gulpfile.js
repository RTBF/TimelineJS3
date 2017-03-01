var gulp          = require("gulp"),
    include       = require("gulp-codekit");

gulp.task("scripts", function() {
  console.log("-- gulp is running task 'scripts'");

  gulp.src("source/js/TL.Timeline.js")
    .pipe(include())
      .on('error', console.log)
    .pipe(gulp.dest("build/js"));
});

gulp.task("default", ["scripts"]);
