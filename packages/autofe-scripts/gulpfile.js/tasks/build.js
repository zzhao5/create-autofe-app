var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {
  runSequence(
    ['clean'],
    ['copy', 'fonts', 'images'],
    ['sass', 'js', 'html', 'markdown'],
    'html-bundle',
    cb);
});