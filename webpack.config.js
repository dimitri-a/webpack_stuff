var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        "./app/app.js",
        'webpack-dev-server/client?http://localhost:8080',
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    devtool: '#source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
    ],
    module: {
        loaders: [{
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    devServer: {
        inline: true
    },
    watch: true
}
