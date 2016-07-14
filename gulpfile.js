//========================================================//
  // ==========   Gulp Config   =============
  // Plugins
  // - gulp-imagemin (Images minification)
  // - gulp-csso (CSS minification)
  // - gulp-uglify (JS minification)
  // - pump (Debugging)
  // - del (Cleaning directory)
  // - run-sequence (Runs series of dependent gulp tasks in order)
//=========================================================//

'use strict';

var gulp = require('gulp'),
  cssMin = require('gulp-csso'),
  imageMin = require('gulp-imagemin'),
  jsMin = require('gulp-uglify'),
  pump = require('pump'),
  del = require('del'),
  sequence = require('run-sequence');

gulp.task('imagemin', function() {
  return gulp.src('app/**/*.+(jpg|png|svg|jpeg)')
    .pipe(imageMin({progressive: true, interlased: true}))
    .pipe(gulp.dest('develope'));
});

gulp.task('cssmin', function() {
  return gulp.src('app/**/*.css')
    .pipe(cssMin({sourceMap: true}))
    .pipe(gulp.dest('develope'));
});

gulp.task('jsmin', function() {
  return pump([
    gulp.src('app/**/*.js'),
    jsMin(),
    gulp.dest('develope')
  ]);
});

gulp.task('html', function(cb) {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('develope'));
})

gulp.task('clean', function() {
  return del(['develope/**', 'build/**']);
});

gulp.task('opti', function(cb) {
  sequence('clean', ['imagemin', 'cssmin', 'jsmin', 'html'], cb);
});

gulp.task('dev', ['opti'], function() {
  gulp.watch('app/**/*.+(jpg|png|svg|jpeg)', ['imagemin']);
  gulp.watch('app/**/*.css', ['cssmin']);
  gulp.watch('app/**/*.js', ['jsmin']);
  gulp.watch('app/**/*.html', ['html']);
});

gulp.task('build', function() {
  gulp.src('app/**/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('build'));

  return gulp.src(['develope/**/*', '!develope/**/*.css'])
    .pipe(gulp.dest('build'));
});

gulp.task('default', function(cb) {
  sequence('clean', ['imagemin', 'cssmin', 'jsmin', 'html'], 'build', cb);
});