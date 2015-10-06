var gulp = require('gulp');

var del = require('del');

gulp.task('clean', function(done) {
    del(['build'], done);
});

// Run this to compress all the things!
gulp.task('production', ['clean', 'karma'], function() {
  // This runs only if the karma tests pass
  gulp.start(['markup', 'json', 'minifyCss']);
});
