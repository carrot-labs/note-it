var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var plumber = require('gulp-plumber');
var stylish = require('jshint-stylish');
var watch   = require('gulp-watch');

gulp.task('jshint', function() {
  gulp.src('server/**/*.js')
    .pipe(plumber())
    .pipe(watch('server/**/*.js'))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});