var gulp      = require('gulp');
var config    = require('../config').production;
var size      = require('gulp-filesize');
var csso      = require('gulp-csso');
var rename    = require('gulp-rename');

gulp.task('minifyCss', ['sass'], function() {
    'use strict';
    return gulp.src(config.cssSrc)
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.dest + '/css/'))
        .pipe(size());
});
