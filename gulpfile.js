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
	gulp.src('src/scss/style.scss')
	.pipe(sass({style: 'compressed'}))
	.on('error', gutil.log)
	.pipe(gulp.dest("./src"))
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});


gulp.task('build', ['build:scripts', 'build:styles', 'build:php']);

// Remove pre-existing content from output and test folders
gulp.task('clean:dist', function () {

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
		'/*!\n' +
		' * Theme Name: <%= package.name %>\n' +
		' * Theme URI: <%= package.repository.url %>\n' +
		' * GitHub Theme URI: <%= package.repository.url %>\n' +
		' * Description: <%= package.description %>\n' +
		' * Version: <%= package.version %>\n' +
		' * Author: <%= package.author.name %>\n' +
		' * Author URI: <%= package.author.url %>\n' +
		' * License: <%= package.license %>\n' +
		' * ' +
		' */'
};


// Lint, minify, and concatenate scripts
gulp.task('build:scripts', ['clean:dist'], function() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('build/' + package.version + '/js'));
});

// Process, lint, and minify Sass files
gulp.task('build:styles', ['clean:dist'], function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({style: 'compressed'}))
        .pipe(header(banner.theme, { package : package }))
	.on('error', gutil.log)
	.pipe(gulp.dest("./build/" + package.version + "/"));
});


gulp.task('build:php', function(){
	return gulp.src('./src/**/*.php')
		.pipe(gulp.dest('build/' + package.version + '/'))
});

// Create style.css with theme header
gulp.task('build:theme', function () {
    return gulp.src('build/' + package.version + '/style.css')
        .pipe(header(banner.theme, { package : package }))
        .pipe(gulp.dest('build/'+ package.version + '/'));
});
