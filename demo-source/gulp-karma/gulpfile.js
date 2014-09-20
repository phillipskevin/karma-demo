var gulp = require('gulp'),
	karma = require('gulp-karma'),
	argv = require('minimist')(process.argv.slice(2));

gulp.task('test', function () {
	var options = {
        configFile: './karma.conf.js',
        action: 'run'
    };

    // --coverage will create html coverage report
    // otherwise coverage summary will be shown
    if (argv.coverage) {
        options.coverageReporter = {
            type : 'html',
            dir : 'karma-coverage/'
        }
    }

    // --watch will run karma:watch
    if (argv.watch) {
        options.action = 'watch';
        // turn off coverage to avoid obfuscation
        options.reporters = ['dots']
    }

    // --browsers=... will set which browsers to use
    // --browsers=Chrome,Firefox will run tests in Chrome and Firefox
    // default is PhantomJS
    if (argv.browsers) {
        options.browsers = argv.browsers.split(',');
    }

	gulp.src(['nope.js'])
		.pipe(karma(options));
});