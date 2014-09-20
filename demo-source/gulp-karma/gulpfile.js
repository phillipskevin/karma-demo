var gulp = require('gulp'),
	karma = require('gulp-karma'),
	argv = require('minimist')(process.argv.slice(2));

gulp.task('test', function () {
	var options = {
        configFile: './karma.conf.js',
        action: 'run'
    };

	gulp.src(['nope.js'])
		.pipe(karma(options));
});