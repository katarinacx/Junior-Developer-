var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('transpile', function(){
  return gulp.src(['app/js/lib/content.js'])
.pipe(babel())
.pipe(gulp.dest('junior'));
});



	