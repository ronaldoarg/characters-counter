const gulp   = require('gulp');
const sass   = require('gulp-sass');
const uglify = require('gulp-uglify');
const babel  = require('gulp-babel');
const rename = require('gulp-rename');
const server = require('browser-sync').create();

const dir = {
	js: './assets/js/',
	css: './assets/css/',
	sass: './assets/sass/'
}

gulp.task('default',  ['server']);

gulp.task('watch:sass', () => {
	gulp.watch(dir.sass + '**/*.scss', ['compile:sass']);
});

gulp.task('compile:sass', () => {
	return gulp.src(dir.sass + 'main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(dir.css))
		.pipe(server.stream());		
});

gulp.task('minify:js', () => {
	return gulp.src(dir.js + 'main.js')
		.pipe(rename('main.min.js'))
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(uglify())	
		.pipe(gulp.dest(dir.js));		
});

gulp.task('server', ['watch:sass'], function() {
	server.init({
			server: {
					baseDir: "./"
			}
	});
	gulp.watch("app/*.html").on('change', server.reload);
});
