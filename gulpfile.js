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
    .pipe(gulp.dest('dist'));
});
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('partials/**/*.html', ['data0']);
});

// gulp.task('data1', function() {
//   gulp.src('partials/uicomponents/*.html')
//     .pipe(directoryMap({
//       filename: 'urls1.json'
//     }))
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('data2', function() {
//   gulp.src('partials/uicomponents2/*.html')
//     .pipe(directoryMap({
//       filename: 'urls2.json'
//     }))
//     .pipe(gulp.dest('dist'));
// });

gulp.task('connect', function() {
  connect.server();
});

// gulp.task('layout', function () {
//   return gulp.src(['uicomponents/*.html'])
//     .pipe(wrap({src: 'template/layout.html'}))
//     .pipe(gulp.dest('dist'));
// });


gulp.task('default', ['connect']
  // place code for your default task here

  // gulp.run('data0', 'connect');

);