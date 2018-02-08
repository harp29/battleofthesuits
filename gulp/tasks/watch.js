var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

    watch('./app/assets/pug/**/*.pug', function() {
        gulp.start('pugRefresh');
    });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

    watch('./app/assets/styles/**/*.scss', function() {
        gulp.start('cssInject');
    });

  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })

});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/app.css')
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});

gulp.task('pugRefresh', ['pug'], function() {
    browserSync.reload();
});