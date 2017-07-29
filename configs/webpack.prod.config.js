const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const _build = path.resolve(__dirname, '../public/build');

module.exports = {

  entry: {
    'app': './src/index'
  },

  output: {
    path: _build,
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: 'babel-loader',
      include: path.join(__dirname, '../src')
    }, {
      test: /\.jsx$/,
      loaders: 'babel-loader',
      include: path.join(__dirname, '../src')
    }]
  },

  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {warnings: false},
      output: {comments: false},
      comments: false
    })
  ]
};
