const gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
let cleanCSS = require('gulp-clean-css');
const { src, dest, series} = require('gulp');

function minifyCSS(){
     return gulp.src('src/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public'));
};

function minifyHTML() {
    return gulp.src('src/*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('public'));
    };
    
  
function imgTask(){
    return src('src/images/*')
    .pipe(dest('public/images'));
}


  exports.default = series(
    minifyHTML,
    minifyCSS,
    imgTask
  );