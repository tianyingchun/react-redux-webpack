var webpack = require('webpack');
var webpackDevConfig = require('./webpack.dev.config');
var webpackProdConfig = require('./webpack.prod.config');

module.exports = function (grunt) {

  grunt.initConfig({
    webpack: {
      dev: webpackDevConfig,
      prod: webpackProdConfig
    },
    // Eslint task for current project.
    eslint: {
      //http://eslint.org/docs/rules/
      //https://www.npmjs.com/package/grunt-eslint
      options: {
        configFile: '.eslintrc'
          // outputFile:''
          // format: require('eslint-tap')
      },
      react: [
        './app/**/*{.jsx,.js}'
      ]
    },
    'webpack-dev-server': {
      options: {
        webpack: webpackDevConfig,
        publicPath: webpackDevConfig.output.publicPath
      },
      start: {
        keepAlive: true,
        hot: true,
        historyApiFallback: true,
        host: 'localhost',
        port: 3000,
        stats: {
          colors: true
        }
      }
    },
    watch: {
      app: {
        files: ['**/*.js'],
        tasks: ['webpack:dev'],
        options: {
          spawn: false,
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);


  // The development server (the recommended option for development)
  grunt.registerTask('default', ['webpack-dev-server:start']);

  // Build and watch cycle (another option for development)
  // Advantage: No server required, can run app from filesystem
  // Disadvantage: Requests are not blocked until bundle is available,
  //               can serve an old app on too fast refresh
  grunt.registerTask('dev', ['webpack:dev', 'watch:app']);

  // Production build
  grunt.registerTask('prod', ['webpack:prod']);
};
