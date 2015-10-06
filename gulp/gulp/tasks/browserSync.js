var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config');
var reload      = browserSync.reload;

gulp.task('browserSync', function() {
  browserSync(config.browserSync);
  gulp.watch(config.gulp.src).on('change', reload);
});
