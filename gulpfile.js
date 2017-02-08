var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var stream = require('webpack-stream');


gulp.task('webpack', [], function() {
    return gulp.src(path.ALL)
        .pipe(stream(webpackConfig))
        .pipe(gulp.dest(path.DEST_BUILD));
});


gulp.task('webpack-dev-server', function (c) {
    var myConfig = Object.create(webpackConfig);

    myConfig.devtool = 'eval';
    myConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        stats: {
            colors: true
        }
    }).listen(myConfig.devServer.port, 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/index.html');
    });
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['webpack-dev-server']);


var path = {
    HTML: 'src/index.html',
    ALL: ['app/**/*.js'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/',
    DEST_BUILD: 'dist/js',
    DEST: 'dist'
};

//dev environment run
gulp.task('default', ['webpack-dev-server']);
