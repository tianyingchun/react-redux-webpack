'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.base.config');

var config = Object.create(baseConfig);

// The production plugin definitions.
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'library',
    filename: 'react-kits.js',
    minChunks: Infinity
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: {
      // maybe we need to compatible with ie8
      screw_ie8: false,
      dead_code: true,
      warnings: false,
      drop_console: true
    }
  })
]);
config.module.loaders.push({ test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ });


module.exports = config;
