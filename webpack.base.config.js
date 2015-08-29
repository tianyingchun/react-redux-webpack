'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    library: ['react', 'redux', 'react-redux'],
    bundle: ['./app']
  },
  module: {
    loaders: [
      // Extract css files
      // Use the autoprefixer-loader
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")},
      // Optionally extract less files
      // or any other compile-to-css language
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")}
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin("[name].css")
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/public/'
  },
  resolve: {
    extensions: ['', '.js']
  }
};
