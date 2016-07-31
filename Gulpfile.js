//  This is used to automate the minification
//  of stylesheets and javascript files. Run using either
//  'gulp', 'gulp watch' or 'gulp serve' from a command line terminal.
//
//  Contents
//  --------
//    1. Includes and Requirements
//    2. Sass Automation
//    3. JS Automation
//    4. Images
//    5. Browsersync
//    6. Build Task

'use strict';

//
//  1. Includes and Requirements
//  ----------------------------
//  Set the plugin requirements
//  for Gulp to function correctly.
var gulp              = require('gulp'),
    sass              = require('gulp-sass'),
    autoprefixer      = require('gulp-autoprefixer'),
    cssnano           = require('gulp-cssnano'),
    clean             = require('gulp-clean'),
    stripCssComments  = require('gulp-strip-css-comments'),
    sourcemaps        = require('gulp-sourcemaps'),
    rename            = require('gulp-rename'),
    notify            = require("gulp-notify"),
    concat            = require('gulp-concat'),
    stripDebug        = require('gulp-strip-debug'),
    uglify            = require('gulp-uglify'),
    browserSync       = require('browser-sync').create(),
    streamqueue       = require('streamqueue'),
    newer             = require('gulp-newer'),
    imagemin          = require('gulp-imagemin'),
    cache             = require('gulp-cache'),
    //scssLint          = require('gulp-scss-lint'),
    webserver         = require('gulp-webserver'),



//  Set the default folder structure
//  variables
    styleSheets     = 'src/styles/',
    styleSheetsDist = 'dist/css/',
    imgSrc          = 'src/images/**',
    imgDest         = 'dist/images',
    appDir          = '';


//  2. SASS Automation
//  ------------------
//  Includes the minification of SASS
//  stylesheets. Output will be compressed.
gulp.task('sass-dev', function () {
  gulp.src(styleSheets + 'main.scss', { style: 'expanded' })
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'expanded' }))
    .on("error", notify.onError(function (error) { return error.message; }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(styleSheetsDist))
    .pipe(browserSync.stream())
    // .pipe(notify({ message: 'Dev styles successfully built' }));
});


gulp.task('sass-dist', function () {
  gulp.src(styleSheets + 'main.scss', { style: 'expanded' })
    .pipe(sass({ style: 'expanded' }))
    .on("error", notify.onError(function (error) { return error.message; }))
    .pipe(autoprefixer())
    .pipe(stripCssComments())
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest(styleSheetsDist))
    // .pipe(notify({ message: 'Dist styles successfully built' }));
});


// 3. JS Automation
// -----------------
// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  return streamqueue({ objectMode: true },
    gulp.src('src/js/**/*.js')
  )
  // .pipe(concat('scripts.js'))
  .pipe(gulp.dest('dist/js/'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(stripDebug())
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))
  .pipe(notify({ message: 'JavaScript successfully built' }));
});


// 4. Images
//  -------------
// Grab images, compress and move to /dist
gulp.task('images', function() {
  // Add the newer pipe to pass through newer images only 
  return gulp.src(imgSrc)
    .pipe(newer(imgDest))
    // .pipe(imagemin())
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(imgDest))
    .pipe(notify({ message: 'Images task complete' }));

  // return gulp.src('src/images/**/*')
  //   .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
  //   .pipe(gulp.dest('dist/images'))
  //   .pipe(notify({ message: 'Images task complete' }));
});


//  5. Browsersync
//  --------------
// Static Server + watching scss/html files
gulp.task('browserSync', ['sass-dev', 'sass-dist'], function() {

  browserSync.init({
      server: "./",
      open: false,
      https: false
  });

  gulp.watch([styleSheets + '**/*.scss'], ['sass-dev', 'sass-dist']);
  gulp.watch(['src/js/**/*.js'], ['scripts']);
  gulp.watch(['src/images/**'], ['images'], browserSync.reload);
  gulp.watch("*.html").on('change', browserSync.reload);
});


//  7. Build Task
//  --------------
gulp.task('default', ['sass-dev', 'sass-dist', 'scripts', 'images', 'browserSync']);