var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('minifyCss', function() {
    return gulp.src('./css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./css'));
});

gulp.task('browserSync', function() {
    return browserSync.init({server: {baseDir: './'},
            files: ['*.html','*.css']
        });
    }
);

gulp.task('images', function() {
    return gulp.src('./img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./img'))
});


gulp.task('uglify', function () {
    return gulp.src('./js/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('./js/min'))
});

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass', 'browserSync', 'images', 'uglify'));