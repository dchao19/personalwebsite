var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var htmlConfig = new HtmlWebpackPlugin({
    template: APP_DIR + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {

    entry: [
        'tether',
        'font-awesome-loader',
        'bootstrap-loader',
        APP_DIR + '/index.jsx'
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {test: /\.json$/, loader: 'json'},
           {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', ['css', 'postcss'])},
           {test: /\.scss$/, include: APP_DIR, loader: ExtractTextPlugin.extract('style', ['css', 'postcss', 'sass'])},
           {test: /\.jsx?$/, include: APP_DIR, loader: 'babel'},
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file'
            }
        ]
    },

    plugins: [
        htmlConfig,
        new webpack.ProvidePlugin({
            "window.Tether": "tether"
        }),
        new ExtractTextPlugin("styles.css")
    ],

    postcss: [autoprefixer]

};
