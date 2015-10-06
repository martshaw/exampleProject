'use strict';
var gulp = require('gulp');
var config = require('../config').lint;
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var beep = require('gulp-util').beep();

gulp.task('lint', function () {
    return gulp.src([config.src])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .on('error', function() {
            beep();
        });
});