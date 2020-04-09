
const { src, dest, watch, series, parallel } = require('gulp');

const autoprefixer = require('autoprefixer');
const browserSync = require("browser-sync").create();
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const files = {

    scssPath: 'app/src/scss/**/*.scss',

    jsPath: 'app/src/scripts/**/*.js',

    htmlPath: 'app/*.html'
}



function scssTask() {

    return src(files.scssPath)

        .pipe(sourcemaps.init())

        .pipe(sass())

        .pipe(postcss([autoprefixer(), cssnano()]))

        .pipe(sourcemaps.write(''))

        .pipe(dest('app/style/css'))

        .pipe(browserSync.stream());
}

function jsTask() {

    return src(files.jsPath)

        .pipe(concat('scripts.js'))

        .pipe(uglify())

        .pipe(dest('app/js'))

        .pipe(browserSync.stream());
}



function reload() {
    browserSync.reload();
}


function watchTask() {
    browserSync.init({

        server: {
            baseDir: "app"
        },
        notify: false
    });
    watch([files.scssPath, files.jsPath],
        series(
            parallel(scssTask, jsTask)
        )
    );
    watch(files.htmlPath, reload);
}

exports.default = series(
    parallel(scssTask, jsTask),
    watchTask
);
parallel(scssTask, jsTask),
    watchTask

