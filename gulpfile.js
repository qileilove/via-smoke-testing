var gulp = require('gulp'),
 selenium = require('selenium-standalone'),
 webdriver = require('gulp-webdriver'),
  notify = require('gulp-notify'),
  clean = require('gulp-clean'),
  runSequence = require('run-sequence'),
 shell = require('gulp-shell');
 gulp.task('test:e2e', function() {
     return gulp.src('wdio.conf.js').pipe(webdriver({
         logLevel: 'verbose',
         waitforTimeout: 10000,
         reporter: 'spec'
     }));
 });
