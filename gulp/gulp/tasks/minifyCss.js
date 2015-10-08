var gulp      = require('gulp');
var config    = require('../config');
var size      = require('gulp-filesize');
var csso      = require('gulp-csso');
var concat    = require('gulp-concat');
var browserSync = require('browser-sync');

gulp.task('minifyCss', ['sass'], function() {
    'use strict';
    return gulp.src(config.production.cssSrc)
        .pipe(concat('style.min.css'))
        .pipe(csso())
        .pipe(gulp.dest(config.production.dest + '/css/'))
        .pipe(size())
        .pipe(browserSync.reload({stream:true}));
});
