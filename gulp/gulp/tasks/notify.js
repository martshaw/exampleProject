var gulp         = require('gulp');
var notify = require("gulp-notify");

gulp.src("./test.txt")
  .pipe(notify("Hello Gulp!"));