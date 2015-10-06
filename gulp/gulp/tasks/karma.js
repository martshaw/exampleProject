var gulp = require('gulp');
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('karma', function (done) {
  new Server({
    configFile: process.cwd() + '/karma.conf.js',
    action: 'watch',
    singleRun: true
  }, done).start();
});


