// Initialize modules
// Importing specific gulp API functions lets us
// write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');

// Importing all the Gulp-related packages we want to use
const autoprefixer = require('autoprefixer');
const browserSync = require("browser-sync").create();
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');


// File paths for the source & the destination
// inside the same file
const files = {
    // By using scss/**/*.scss we're telling gulp
    // to check for any .scss file
    scssPath: 'app/src/scss/**/*.scss',
    // By using js/**/*.js we're telling gulp
    // to check for any .js file
    jsPath: 'app/src/scripts/**/*.js',
    // By using *.html we're telling gulp
    // to check for any .html file
    htmlPath: 'app/*.html'
}