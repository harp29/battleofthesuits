var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/temp/styles'));
});