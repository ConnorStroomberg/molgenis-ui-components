var merge = require('webpack-merge')
var base = require('./webpack.config.base')

var outputFile = 'molgenis-ui-components'
var globalName = 'molgenis-ui-components'

module.exports = merge(base, {
  output: {
    path: './dist',
    filename: outputFile + '.common.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  devtool: 'eval-source-map',
})
