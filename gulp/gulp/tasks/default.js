var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(done) {
    del(['build'], done);
});
gulp.task('default', function() {
    gulp.start('clean', 'sass', 'markup', 'json', 'lint', 'watch');
});
