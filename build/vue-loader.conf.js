'use strict'
const utils = require('./utils')
const config = require('../config')
const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/vue-loader'),
  cacheIdentifier: 'cache-loader:{version} {process.env.NODE_ENV}'
}
