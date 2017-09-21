var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

gulp.task('log', function() {gutil.log("== MY LOG TASK ==") });

gulp.task('sass', function() {
	gulp.src('scss/style.scss')
	.pipe(sass({style: 'expanded'}))
	.on('error', gutil.log)
	.pipe(gulp.dest("./"))
});

gulp.task('connect', function() {
	  connect.server({
		      root: '.',
		      livereload: true
		    })
	});
