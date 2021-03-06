var gulp = require('gulp');

var appDev = './src/**/*';
var appProd = './dist';

/* JS & TS */
var typescript = require('gulp-typescript');
var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-ts', function () {
    return gulp.src(appDev + '**/*.ts')
        .pipe(typescript(tsProject))
        .pipe(gulp.dest(appProd));
});

gulp.task('watch', function () {
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
});

gulp.task('default', ['watch', 'build-ts']);