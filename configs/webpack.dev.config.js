const webpack = require('webpack');
const path = require('path');

const _build = path.resolve(__dirname, '../public/build');

module.exports = {

  devtool: 'source-map',

  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },

  output: {
    path: _build,
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot-loader/webpack', 'babel-loader'],
      include: path.join(__dirname, '../src')
    }, {
      test: /\.jsx$/,
      loaders: ['react-hot-loader/webpack', 'babel-loader'],
      include: path.join(__dirname, '../src')
    }]
  },

  plugins: [
    new webpack.NamedModulesPlugin()
  ]
};
