//========================================================//
  // ==========   Gulp Config   =============
  // Plugins
  // - gulp-imagemin (Images minification)
  // - gulp-csso (CSS minification)
  // - gulp-uglify (JS minification)
  // - pump (Debugging)
  // - del (cleaning build directory)
//=========================================================//

'use strict';

var gulp = require('gulp'),
  cssMin = require('gulp-csso'),
  imageMin = require('gulp-imagemin'),
  jsMin = require('gulp-uglify'),
  pump = require('pump'),
  del = require('del');

gulp.task('imagemin', function() {
  gulp.src('app/**/*.+(jpg|png|svg|jpeg)')
    .pipe(imageMin({progressive: true, interlased: true}))
    .pipe(gulp.dest('develope'));
});

gulp.task('cssmin', function() {
  gulp.src('app/**/*.css')
    .pipe(cssMin({sourceMap: true}))
    .pipe(gulp.dest('develope'));
});

gulp.task('jsmin', function() {
  pump([
    gulp.src('app/**/*.js'),
    jsMin(),
    gulp.dest('develope')
  ]);
});

gulp.task('html', function() {
  gulp.src('app/**/*.html')
    .pipe(gulp.dest('develope'));
})

gulp.task('clean', function(cb) {
  del(['develope/**']);
  cb();
});

gulp.task('dev', ['clean'], function(cb) {
  gulp.watch('app/**/*.+(jpg|png|svg|jpeg)', ['imagemin']);
  gulp.watch('app/**/*.css', ['cssmin']);
  gulp.watch('app/**/*.js', ['jsmin']);
  gulp.watch('app/**/*.html', ['html']);
  cb();
  // заменить вызовы задач на кол-бэки.
});

gulp.task('opti-forced', ['imagemin', 'cssmin', 'jsmin', 'html']);

gulp.task('build', ['opti-forced'], function() {
  del(['build/**']);
  gulp.src(['develope/**', '!develope/**/*.css'])
    .pipe(gulp.dest('build'));
  gulp.src('app/**/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('build'));
});