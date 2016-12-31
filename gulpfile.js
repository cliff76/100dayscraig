/**
 * Created by cliftoncraig on 12/31/16.
 */

gulp = require('gulp');
var del = require('del');
var path = require('path');
var webpack = require('gulp-webpack');

var dir_src = path.resolve(__dirname, 'src');
var dir_src_server = path.resolve(dir_src, 'server');
var dir_js = path.resolve(dir_src, 'js');
var dir_html = path.resolve(dir_src, 'html');

var dir_build = path.resolve(__dirname, 'build');
var dir_build_server = path.resolve(dir_build, 'server');
var dir_build_client = path.resolve(dir_build, 'client');

gulp.task('clean', function() {
    return del([dir_build]);
});

gulp.task('client', function() {
    return gulp.src(path.resolve(dir_js, 'main.js'))
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest(dir_build_client));
});

gulp.task('server', function() {
    return gulp.src(dir_src_server + '/*.js')
        .pipe(gulp.dest(dir_build_server));
});

gulp.task('default', ['clean'], function() {
    gulp.start('server');
});