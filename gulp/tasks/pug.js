var gulp = require('gulp'),
    gulpPug = require('gulp-pug'),
    clean =require('gulp-clean');

gulp.task('pug', function() {
    return gulp.src('./app/assets/pug/**/*.pug')
        .pipe(gulpPug())
        .pipe(clean())
        .pipe(gulp.dest('./app'));
});