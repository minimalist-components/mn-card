import gulp from 'gulp'
import packageFiles from 'package-files'
import minifyCss from 'gulp-clean-css'
import concat from 'gulp-concat'

gulp.task('vendorCSS', vendorCSSTask)

function vendorCSSTask() {
  const devDependencies = [
    'mn-gh-page',
    'mn-table-list',
  ]

  const dependencies = packageFiles(devDependencies)
    .filter(dep => dep.endsWith('.css'))

  return gulp
    .src(dependencies)
    .pipe(concat('vendor.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./docs'))
}
