//========================================================//
  // ==========   Gulp Config   =============
  // Plugins
  // - gulp-imagemin (Images minification)
  // - gulp-csso (CSS minification)
  // - gulp-uglify (JS minification)
  // - del (cleaning build directory)
//=========================================================//

'use strict';

var gulp = require('gulp'),
  cssMin = require('gulp-csso'),
  imageMin = require('gulp-imagemin'),
  jsMin = require('gulp-uglify'),
  del = require('del');

gulp.task('imagemin', function() {
  gulp.src('app/**/*.+(jpg|png|svg|jpeg)')
    .pipe(imageMin({progressive: true, interlased: true}))
    .pipe(gulp.dest('develope'));
});

gulp.task('cssmin', function() {
  gulp.src('app/css/**/*.css')
    .pipe(cssMin({sourceMap: true}))
    .pipe(gulp.dest('develope'));
});

gulp.task('jsmin', function() {
  pump([
    gulp.src('app/js/**/*.js'),
    jsMin(),
    gulp.dest('develope')
  ]);
});

gulp.task('optimize', ['del'], function() {
  gulp.watch('app/img/**/*.+(jpg|png|svg|jpeg)', ['imagemin']);
  gulp.watch('app/css/**/*.css', ['cssmin']);
  gulp.watch('app/css/**/*.js', ['jsmin']);
  gulp.watch('app/**/*.html', function() {
    gulp.src('app/**/*.html')
      .pipe(gulp.dest('develope'));
  });
});