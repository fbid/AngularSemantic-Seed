var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    concat        = require('gulp-concat'),
    browserSync   = require('browser-sync'),
    uglify        = require('gulp-uglify'),
    sass          = require('gulp-sass'),
    prefix        = require('gulp-autoprefixer'),
    uncss         = require('gulp-uncss'),
    nanocss       = require('gulp-cssnano'),
    imgmin        = require('gulp-imagemin');


// paths di origine
var js_path     = './js/**/*.js',
    sass_path   = './sass/**/*.scss',
    img_path    = './static/images/*';

//paths di destinazione
var js_dest     = './dist/js/',
    sass_dest   = './css',
    img_dest    = './dist/images/';


// ************************************************

// Minify js
gulp.task('compressjs', function () {
    gulp.src(js_path)
        .pipe(plumber())
        .pipe(uglify({mangle: false}))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(js_dest));
});

// Sass
gulp.task('sass', function () {
    gulp.src(sass_path)
        .pipe(plumber())
        .pipe(sass())
        .pipe(prefix())
        .pipe(concat('main.css'))
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(nanocss())
        .pipe(gulp.dest(sass_dest));
});

// Image Minification
gulp.task('imgmin', function () {
    gulp.src(img_path)
        .pipe(imgmin())
        .pipe(gulp.dest(img_dest));
});

//Browser Sync
gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

// Watcher
gulp.task('watch', function () {
    gulp.watch(js_path, ['compressjs']);
    gulp.watch(sass_path, ['sass']);
});

// *** MAIN ***
gulp.task('default', ['compressjs','sass','watch','browser-sync']);
