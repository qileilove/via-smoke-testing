var gulp = require('gulp'),
 selenium = require('selenium-standalone'),
 webdriver = require('gulp-webdriver'),
  notify = require('gulp-notify'),
  clean = require('gulp-clean'),
  runSequence = require('run-sequence'),
 shell = require('gulp-shell');

gulp.task('selenium', (done) => {
  selenium.install({logger: console.log}, () => {
    selenium.start((err, child) => {
      if (err) { return done(err); }
      seleniumServer = child;
      done();
    });
  });
});
// gulp.task('clean_test_log',shell.task([
//   'rm -rf allure-results']));

  gulp.task('clean_test_log', function() {
    return gulp.src(['allure-results'], {read: false})
      .pipe(clean());
  });


gulp.task('report', shell.task([
  'allure report generate -o allure-report allure-results && allure report open -o allure-report']));

gulp.task('e2e', ['selenium'], () => {
  return gulp.src('wdio.conf.js').pipe(notify({ message: 'test start' }))
    .pipe(webdriver()).on('error', () => {
      seleniumServer.kill();
      process.exit(1);
    });
});


gulp.task('test', (callback) => {

  runSequence('clean_test_log', 'e2e', 'report', callback);
  // seleniumServer.kill();
});
