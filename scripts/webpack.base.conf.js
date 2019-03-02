const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const utils = require('./utils')

module.exports = {
  // disable devtool for production env
  // '#source-map' is an alternative option for '#eval-source-map'
  devtool: process.env.NODE_ENV === 'production' ? false : '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.env[process.env.NODE_ENV]
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json'],
    alias: {
      '@site': config.paths.site,
      '@ui': config.paths.ui
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: [ config.paths.site, config.paths.ui ],
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [ config.paths.site, config.paths.ui ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  },
  performance: {
    hints: false
  }
}
