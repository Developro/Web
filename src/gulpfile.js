var 
	gulp 			= require('gulp'),
	livereload 		= require('gulp-livereload'),
	sass 			= require('gulp-sass'),
	autoprefixer 	= require('gulp-autoprefixer'),
	cleancss 		= require('gulp-clean-css'),
	rename 			= require('gulp-rename');
	// lr 				= require('tiny-lr'),
	// watch 			= require('gulp-watch'),
	// server 			= lr();

gulp.task("reload-css", function(){
	gulp.src("../src/*.scss")
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('../dist/css/'))
	.pipe(cleancss({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('../dist/css/'))
	.pipe(livereload());
});


gulp.task('html', function() {
	gulp.src('../src/*.html', {read: false})
    .pipe(livereload());
});


gulp.task("default", function(){
	livereload.listen();
	gulp.watch("../src/*.scss",['reload-css']);
	gulp.watch("../src/*.html",['html']);
});