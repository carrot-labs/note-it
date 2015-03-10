var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var plumber = require('gulp-plumber');
var stylish = require('jshint-stylish');

gulp.task('jshint', function() {
  gulp.src('server/**/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));

  gulp.watch(['server/**/*.js'], ['jshint']);
});