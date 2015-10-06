var gulp = require('gulp');
var glob = require('glob').sync;
var spawn = require('child_process').spawn;
var config = require('../config').gulp;

gulp.task('auto-reload', function() {
    'use strict';
    function spawnChildren() {
        console.log('here');
        // Store current process if any
        var p;
        if (p) {
            p.kill();
        }
        p = spawn('gulp', ['watch'], {stdio: 'inherit'});
    }
    // Comment the line below if you start your server by yourslef anywhere else
    spawnChildren();
    gulp.watch(glob(config.src), spawnChildren);
});