const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const config = require('../config')
const utils = require('./utils')
const isDebug = process.env.NODE_ENV === 'testing'

function _externals() {
  let dependencies = ['react','classnames','prop-types','better-scroll','react-dom']
  let externals = {}
  for (let dep of dependencies) {
    externals[dep] = 'commonjs ' + dep
  }
  return externals
}

module.exports = merge(baseWebpackConfig, {
  entry: {
    main: ['./components/style/index.scss','./components/index.js']
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  output: {
    path: config.paths.dist,
    publicPath: '/dist/',
    filename: 'yzt.rui.min.js',
    library: 'iview',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: _externals(),
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      'screw-ie8': true,
      sourceMap: true,
      compress: {
        warnings: false,
        drop_debugger: !isDebug,
        drop_console: !isDebug
      },
      output: {
        comments: false
      }
    }),
    // extract css into its own file
    new ExtractTextPlugin(utils.assetsPath('yzt.rui.min.css')),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
})
