var gulp = require('gulp');
var plato = require('plato');
var config = require('../config').plato;
var fs = require('fs');
var del = require('del');
var jsHintPath = process.cwd() + '/.jshintrc';

gulp.task('plato:clean', function() {
  del.sync([process.cwd() + '/report/plato']);
});

gulp.task('plato:run', function() {
  var files = [
    process.cwd() + '/build/bundle.js'
  ];

  var outputDir = process.cwd() + '/report/plato';
  var jsHintContents = fs.readFileSync(jsHintPath);
  var jsHintOptions = jsHintContents;
  // null options for this example
  var options = {
    title: 'Your title here',
    jshint: jsHintOptions,
    complexity: config.complexity
  };

  var callback = function() {
    process.exit();
  };
  plato.inspect(files, outputDir, options, callback);
});

gulp.task('plato', ['plato:clean', 'plato:run']);