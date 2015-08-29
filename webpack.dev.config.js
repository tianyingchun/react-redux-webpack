'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.base.config');

var config = Object.create(baseConfig);

//  Provider special entry point in development phase,
//  it will be able to get live reloads when doing changes to our source code.
config.entry.bundle.unshift('webpack/hot/only-dev-server');
config.entry.bundle.unshift('webpack-dev-server/client?http://localhost:3000');

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'library',
    filename: 'react-kits.js',
    minChunks: Infinity
  })
]);

config.module.loaders.push({ test: /\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ });

module.exports = config;
