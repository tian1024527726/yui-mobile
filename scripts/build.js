// https://github.com/shelljs/shelljs
'use strict'

require('./check-versions')()
require('shelljs/global')

env.isBuild = true

const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.build.conf')

const spinner = ora('building for production...')
spinner.start()

mkdir('-p', config.paths.dist)

const compiler = webpack(webpackConfig)
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
compiler.apply(new ProgressPlugin())

compiler.run((err, stats) => {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  console.log(chalk.cyan(`  Build complete.`))
  console.log(chalk.yellow(
    '  Tip 1: execute `npm run package` to get \n' + 
    '       a compressed file for deployment.\n' +
    '  Tip 2: built files are meant to be served over an HTTP server.\n' +
    '       Opening index.html over file:// won\'t work.\n'
  ))
})

