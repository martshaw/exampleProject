'use strict';
var gulp = require('gulp');
var config = require('../config').lint;
var jshint = require('gulp-jshint');
var eslint = require('gulp-eslint');
var handleErrors = require('../utils/handleErrors');
var stylish = require('jshint-stylish');
gulp.task('lint', function () {
    return gulp.src([config.src])
        //jsHint uncommment here
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(eslint.failOnError())
        .on('error', handleErrors);
});