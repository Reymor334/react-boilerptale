const webpack = require('webpack');
const path = require('path');

const _build = path.resolve(__dirname, '../public/build');

module.exports = {
    resolve: {
        alias: {
            'react': 'react',
            'react-dom': 'react-dom'
        }
    },

    devtool: 'source-map',

    entry: {
        'app': [
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
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
    ],

    devServer: {
        host: 'localhost',
        port: 3030
    }
};
