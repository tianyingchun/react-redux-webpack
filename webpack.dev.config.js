'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.base.config');

var config = baseConfig();

// Add source mapping for debuging.
config.devtool = 'source-map';

// Provider special entry point in development phase,
// it will be able to get live reloads when doing changes to our source code.
config.entry.bundle.unshift('webpack/hot/only-dev-server');
config.entry.bundle.unshift('webpack-dev-server/client?http://localhost:3000');

// plugins for development
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
]);

// loaders for development
config.module.loaders.push({
  test: /\.js$/,
  loaders: ['react-hot', 'babel-loader'],
  exclude: /node_modules/
});

module.exports = config;
