'use strict';

var gulp = require('gulp');
var concate = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function(){
    return gulp.src('src/*.js')
        .pipe(concate('bundle.js')) // 結合後のファイル名はbundle.js
        .pipe(uglify()) // uglifyの実行
        .pipe(gulp.dest('dist'))   // distディレクトリに出力
});

gulp.task('sass', function () {
   return gulp.src('public/style/sass/*.scss')
       .pipe(sourcemaps.init())
       .pipe(sass().on('error', sass.logError))
       .pipe(sourcemaps.write('maps'))
       .pipe(gulp.dest('public/style/css'))
});

// ファイルの変更を監視してタスクを実行する
gulp.task('watch', function(){
    gulp.watch(['src/*.js'], ['js']);
});