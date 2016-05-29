var path = require('path');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var paths = [
    "/",
    "/about"
];

module.exports = {
  entry:  {
        main: APP_DIR + '/entry.js'
  },

  resolve: {
      extensions: ['', '.js', '.jsx', '.scss']
  },
  
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, include: APP_DIR, loader: 'babel' },
      { test: /\.scss$/, include: APP_DIR, loaders: ['style', 'css', 'sass']}
    ]
  },
  
  plugins: [
      new StaticSiteGeneratorPlugin('main', paths)
  ]
}