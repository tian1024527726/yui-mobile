const path = require('path')
const distPath = path.resolve('dist')

module.exports = {
  build: {
    index: path.resolve(distPath, 'index.html'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    port: 2333,
    noInfo: true,
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    autoOpenBrowser: true,
    cssSourceMap: false
  },
  paths: {
    dist: distPath,
    site: path.resolve(`site/${process.env.SITE_TYPE}/src`),
    ui: path.resolve('src')
  },
  env: {
    development: require('./dev.env'),
    testing: require('./test.env'),
    production: require('./prod.env')
  }
}
