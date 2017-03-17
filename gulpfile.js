const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const del = require('del');
const jade = require('gulp-jade');
const rename = require('gulp-rename');
const stylus = require('gulp-stylus');

const paths = {
  build: 'build',
  public: 'public',
  server: 'server/*.js',
  styles: 'styles/*.styl',
  views: 'views/*.pug'
}

gulp.task('clean', (cb) => {
  del([ paths.build, paths.public ], () => cb());
});

gulp.task('styles', () => {
  return gulp.src(paths.styles)
    .pipe(stylus())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.public));
});

gulp.task('scripts', () => {
  return gulp.src(paths.server)
    .pipe(babel())
    .pipe(rename((path) => {
      path.basename = path.basename.split('.')[0]
    }))
    .pipe(gulp.dest(paths.build))
});

gulp.task('views', () => {
  return gulp.src(paths.views)
    .pipe(jade())
    .pipe(gulp.dest(paths.public))
});

gulp.task('build', ['scripts', 'styles', 'views']);
