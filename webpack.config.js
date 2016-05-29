var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var htmlConfig = new HtmlWebpackPlugin({
  template: APP_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry:  APP_DIR + '/index.jsx',

  resolve: {
      extensions: ['', '.js', '.jsx', '.scss']
  },
  
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, include: APP_DIR, loader: 'babel' },
      { test: /\.scss$/, include: APP_DIR, loaders: ['style', 'css', 'sass']}
    ]
  },
  plugins: [htmlConfig]
}