var gulp = require('gulp');
var config = require('../config').json;
var browserSync  = require('browser-sync');

gulp.task('json', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
