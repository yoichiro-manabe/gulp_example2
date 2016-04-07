var gulp = require('gulp');
var concate = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('js', function(){
    return gulp.src('src/*.js')
        .pipe(concate('bundle.js')) // 結合後のファイル名はbundle.js
        .pipe(uglify()) // uglifyの実行
        .pipe(gulp.dest('dist'))    // distディレクトリに出力
});

// ファイルの変更を監視してタスクを実行する
gulp.task('watch', function(){
    gulp.watch(['src/*.js'], ['js']);
});