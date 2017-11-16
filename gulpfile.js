var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');
var rename = require('gulp-rename');
var header = require('gulp-header');
var package = require('./package.json');

gulp.task('log', function() {gutil.log("== MY LOG TASK ==") });

gulp.task('default', ['watch']);

gulp.task('sass', function() {
	gulp.src('scss/style.scss')
	.pipe(sass({style: 'compressed'}))
	.on('error', gutil.log)
	.pipe(gulp.dest("./"))
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});


gulp.task('build', function() {

	});

// Remove pre-existing content from output and test folders
gulp.task('clean:dist', function () {
	del.sync([
		paths.output
	]);
});


var banner = {
	full :
		'/*!\n' +
		' * <%= package.name %> v<%= package.version %>: <%= package.description %>\n' +
		' * (c) ' + new Date().getFullYear() + ' <%= package.author.name %>\n' +
		' * MIT License\n' +
		' * <%= package.repository.url %>\n' +
		' * Open Source Credits: <%= package.openSource.credits %>\n' +
		' */\n\n',
	min :
		'/*!' +
		' <%= package.name %> v<%= package.version %>' +
		' | (c) ' + new Date().getFullYear() + ' <%= package.author.name %>' +
		' | <%= package.license %> License' +
		' | <%= package.repository.url %>' +
		' | Open Source Credits: <%= package.openSource.credits %>' +
		' */\n',
	theme :
		'/**\n' +
		' * Theme Name: <%= package.name %>\n' +
		' * Theme URI: <%= package.repository.url %>\n' +
		' * GitHub Theme URI: <%= package.repository.url %>\n' +
		' * Description: <%= package.description %>\n' +
		' * Version: <%= package.version %>\n' +
		' * Author: <%= package.author.name %>\n' +
		' * Author URI: <%= package.author.url %>\n' +
		' * License: <%= package.license %>\n' +
		' * Open Source Credits: <%= package.openSource.credits %>\n' +
		' */'
};


// Lint, minify, and concatenate scripts
gulp.task('build:scripts', ['clean:dist'], function() {
    return gulp.src('src/js/**/*.js')
        .pipe(rename({ suffix: '.' + package.version }))
        .pipe(gulp.dest('dist/js'));
});

// Process, lint, and minify Sass files
gulp.task('build:styles', ['clean:dist'], function() {
    return gulp.src('src/css/**/*.css')
        .pipe(rename({ suffix: '.' + package.version }))
        .pipe(gulp.dest('dist/css'));
});

// Create style.css with theme header
gulp.task('build:theme', function () {
    return gulp.src('dist/style.css')
        .pipe(header(banner.theme, { package : package }))
        .pipe(gulp.dest(''));
});
