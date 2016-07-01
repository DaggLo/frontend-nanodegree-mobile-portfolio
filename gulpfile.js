//========================================================//
  // ==========   Gulp Config   =============
  // Plugins
  // - Image Minification
  // - CSS minification
  // - JS Minification
//=========================================================//

'use strict';

var gulp = require('gulp'),
    cssMin = require('gulp-csso'),
    imageMin = require('gulp-imagemin'),
    jsMin = require('gulp-uglify');