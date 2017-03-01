var gulp          = require("gulp");
var include       = require("gulp-codekit");
var concat        = require('gulp-concat');
var less          = require('gulp-less');
var path          = require('path');

gulp.task("process", function() {

  console.log("-- gulp is running task 'process'");

  gulp.src("./source/js/TL.Timeline.js")
    .pipe(include())
    .on('error', console.log)
    .pipe(concat('timeline.js'))
    .pipe(gulp.dest("./build/js"));

  gulp.src("./source/js/embed/Embed.CDN.js")
    .pipe(include())
    .on('error', console.log)
    .pipe(concat('timeline-embed-cdn.js'))
    .pipe(gulp.dest("./build/js"));

  gulp.src("./source/js/embed/Embed.js")
    .pipe(include())
    .on('error', console.log)
    .pipe(concat('timeline-embed.js'))
    .pipe(gulp.dest("./build/js"));
});


gulp.task('less', function () {

  console.log("-- gulp is running task 'process'");

  return gulp.src('./source/less/TL.Timeline.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./build/css'));
});


/*

            {
                "src": "source/less/TL.Timeline.less",
                "dst": "build/css/timeline.css",
                "opt": "--clean-css=--s0"
            },
            {
                "src": "source/less/themes/dark/TL.Theme.Dark.less",
                "dst": "build/css/themes/timeline.theme.dark.css",
                "opt": "--clean-css=--s0"
            },
            {
                "src": "source/less/fonts",
                "dst": "build/css/fonts",
                "regex": ".*(?<!font.base)\\.less"
            }
*/


gulp.task("default", ["process", "less"]);
