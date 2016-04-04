import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import babel from 'gulp-babel';
import del from 'del';
import jade from 'gulp-jade';
import stylus from 'gulp-stylus';

const paths = {
  build: 'build',
  public: 'public',
  server: 'server/*.js',
  styles: 'styles/*.styl',
  views: 'views/*.jade'
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
    .pipe(gulp.dest(paths.build))
});

gulp.task('views', () => {
  return gulp.src(paths.views)
    .pipe(jade())
    .pipe(gulp.dest(paths.public))
});

gulp.task('build', ['scripts', 'styles', 'views']);
