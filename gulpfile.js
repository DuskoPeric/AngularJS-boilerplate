var gulp = require('gulp');

var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');



gulp.task('sass', function(){
  return gulp.src('style/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('style/'))
	.pipe(browserSync.reload({
      stream: true
    }))
});
gulp.task('watch', ['browserSync', 'sass'],function(){
  gulp.watch('style/*.scss', ['sass']); 
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('app/**/*.html', browserSync.reload); 
  gulp.watch('app/**/*.js', browserSync.reload);
  gulp.watch('app/*.js', browserSync.reload);
});
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  });
});
gulp.task('useref', function(){
  return gulp.src('*.html')
    .pipe(useref())
	.pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest(''))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest(''))
});

gulp.task('build', function (callback) {
  runSequence('sass', 
    [ 'useref'],
    callback
  )
});
gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})
