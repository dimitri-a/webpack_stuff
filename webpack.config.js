var path = require('path');
var webpack = require('webpack');
// var WebpackStrip = require('strip-loader');

module.exports = {
    entry: './app/app.js',
    output: {
        //path: __dirname + '/dist',  //TODO for use with webpack command use  path: __dirname + '/dist',
        path: __dirname, //TODO for use with webpackdevserver, in memory: path:__dirname
        filename: 'bundletje.js'  //TODO this corresponds with the url:localhost:8080/bundletje
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            warnings: true,
            mangle: true,
            compress: {
                drop_console: true,
                drop_debugger:true
            }
        })
    ]

}