var gulp   = require('gulp');
var config = require('../config.js');
var imagemin = require('gulp-imagemin')

gulp.task('copy:fonts', function() {
    return gulp
        .src(config.src.fonts + '/*.{woff,woff2}')
        .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:lib', function() {
    return gulp
        .src(config.src.lib + '/**/*.*')
        .pipe(gulp.dest(config.dest.lib));
});

gulp.task('copy:rootfiles', function() {
    return gulp
        .src(config.src.root + '/*.*')
        .pipe(gulp.dest(config.dest.root));
});

const imagePaths = [
    config.src.img + '/**/*.{jpg,png,jpeg,svg,gif}',
    '!' + config.src.img + '/svgo/**/*.*',
]
gulp.task('copy:img', function() {
    return config.production ? (
        gulp.src(imagePaths)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest.img))
    ) : (
        gulp.src(imagePaths).pipe(gulp.dest(config.dest.img))
    )
});

gulp.task('copy', [
    'copy:img',
    'copy:fonts'
]);

gulp.task('copy:watch', function() {
    gulp.watch(config.src.img+'/*', ['copy']);
});
