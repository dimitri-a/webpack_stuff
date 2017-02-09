var path = require('path');
var webpack = require('webpack');
// var WebpackStrip = require('strip-loader');

module.exports = {
    entry: './app/app.js',
    output: {
        //path: __dirname + '/dist',  //TODO for use with webpack command use  path: __dirname + '/dist',
        path: __dirname, //TODO for use with webpackdevserver, in memory: path:__dirname
        filename: 'bundletje.js'  //TODO this corresponds with the url:localhost:9999/bundletje
    },
    devServer: {
        inline: true,
        port: 9999
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
            compress: {
                drop_console: true,
            }
        })
    ]

}