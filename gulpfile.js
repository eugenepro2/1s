var gulp = require('gulp'),
		jade = require('gulp-jade'),
		cssnano = require('gulp-cssnano'),
		connect = require('gulp-connect');
		sass = require('gulp-sass');

// Jade
gulp.task('jade', function(){
	gulp.src('./assets/jade/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./public'))
		.pipe(connect.reload());
});


gulp.task('sass', function () {
  return gulp.src('./assets/**/*.sass')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths,
      includePaths: require('node-neat').includePaths
    }).on('error', sass.logError))
    //.pipe(cssnano())
    .pipe(gulp.dest('./public/assets'))
    .pipe(connect.reload());
});

// Minify JS
gulp.task('js', function() {
  	gulp.src('assets/**/*.js')
    .pipe(gulp.dest('./public/assets'))
   	.pipe(connect.reload());
});

// Watch
gulp.task('watch', function (){
	gulp.watch('./assets/**/*.js', ['js'])
	gulp.watch('./assets/jade/**/*.jade', ['jade']);
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/**/*.sass', ['sass']);
});

// Server
gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('default', ['jade', 'sass', 'js', 'watch', 'sass:watch', 'connect'])