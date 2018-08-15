require('./check-versions')()
// require dev modules
const Koa = require('koa')
const c2k = require('koa2-connect')
const chalk = require('chalk')
const path = require('path')
const webpack = require('webpack')
const opn = require('opn')
const config = require('../config')
const KWM = require('koa-webpack-middleware')
const chafMiddleware = require('connect-history-api-fallback')
const webpackConfig = require('./webpack.dev.conf')

// set process env
process.env.isBuild = false

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port

// init koa server
const app = new Koa()
const compiler = webpack(webpackConfig)

const devMiddleware = KWM.devMiddleware(compiler, {
  noInfo: config.dev.noInfo,
  watchOptions: {
    aggregateTimeout: 300,
    poll: false
  },
  publicPath: config.dev.assetsPublicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

// only client need hot middleware
const hotMiddleware = KWM.hotMiddleware(compiler)
// force page reload when html-webpack-plugin template changes
// compiler.plugin('compilation', compilation => {
//   compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

app.env = 'development'
app.use(c2k(chafMiddleware()))
app.use(devMiddleware)
app.use(hotMiddleware)

// start dev server
const uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(() => {
  console.log(chalk.green(`> Listening at ${uri} \n`))
})

module.exports = app.listen(port, err => {
  if (err) {
    console.log(chalk.red(err))
    return
  }

  // automatically open default browser
  if (config.dev.autoOpenBrowser) {
    opn(uri)
  }
})
