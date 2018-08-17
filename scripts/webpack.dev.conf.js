const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const config = require('../config')
const utils = require('./utils')

const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: [`./site/index.js`]
  },
  output: {
    path: config.paths.dist,
    publicPath: config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: 'Yzt Rui',
      filename: 'index.html',
      template: 'site/index.html',
      inject: true,
      favicon: 'site/favicon.ico'
    }),
    new FriendlyErrorsPlugin()
  ]
})

// add hot-reload related code to entry chunks
Object.keys(webpackConfig.entry).forEach(name => {
  webpackConfig.entry[name] = ['./scripts/dev-client'].concat(webpackConfig.entry[name])
})

module.exports = webpackConfig
