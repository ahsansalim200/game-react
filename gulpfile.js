'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');
var sourceFiles = ['bower_components/materialize/dist/**/*'];
var destination = 'src/libraries/';
var outputPath = 'some-other-dest/';

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/sass/master.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});


gulp.task('copyLibraries', function () {
    gulp.src(sourceFiles)
        .pipe(gulp.dest(destination));
});

gulp.task('default', ['sass', 'copyLibraries','sass:watch']);