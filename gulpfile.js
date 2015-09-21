var gulp = require('gulp');
var sass = require('gulp-sass');
var directoryMap = require("gulp-directory-map");
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
// var wrap = require("gulp-wrap");


gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('data0', function() {
  gulp.src('partials/**/*.html')
    .pipe(directoryMap({
      filename: 'home.json'
    }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('partials/**/*.html', ['data0']);
});

gulp.task('connect', function() {
  connect.server();
});


gulp.task('default', ['data0', 'connect', 'watch']
  // place code for your default task here

  // gulp.run('data0', 'connect');

);