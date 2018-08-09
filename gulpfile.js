"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var pug = require('gulp-pug');
 

gulp.task('pug', function buildHTML() {
    return gulp.src('pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
    // Your options in here.
    }))    
    .pipe(gulp.dest("."))
    .pipe(gulp.dest("build"))
});

gulp.task("style", function() {
  gulp.src("static/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]})
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.reload({stream: true}));
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });

    gulp.watch("static/less/**/*.less", ["style"]);
    gulp.watch("pug/**/*.pug", ["pug"]);
    gulp.watch("*.html").on("change", server.reload);
});
