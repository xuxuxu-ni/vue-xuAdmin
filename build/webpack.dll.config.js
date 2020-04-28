/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2020/4/28
 * Description: 文件描述
 */
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let vendors = [
  [
    "echarts",
    "wangeditor",
    "element-ui",
    "axios"
  ],[
    'vue/dist/vue.esm.js',
    'vue-router',
    'vuex'
  ]
]

module.exports = {
  entry: {
    // 多入口，单入口情况，只需写一个，key值自定义，value值为数组
    xuAdmin0: vendors[0],
    xuAdmin1: vendors[1]
  },
  output: {
    path: path.join(__dirname, "../static/dll"),
    filename: "[name].[chunkhash].dll.js",
    library: "[name]_[chunkhash]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "../dllManifest", "[name]-manifest.json"),
      name: "[name]_[chunkhash]",
      context: __dirname
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false
      }
    }),
  ]
}
