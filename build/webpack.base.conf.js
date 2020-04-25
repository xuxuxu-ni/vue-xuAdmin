'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const threadLoader = require('thread-loader')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const WorkerPool = {
  workers: 2,
  workerParallelJobs: 50,
  poolTimeout: 2000,
  poolRespawn: false,
  name: "my-pool"
};

threadLoader.warmup(WorkerPool, ['vue-loader', 'babel-loader']);

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  plugins: [
    new VueLoaderPlugin(),
    new HardSourceWebpackPlugin({
      // cacheDirectory是在高速缓存写入。默认情况下，将缓存存储在node_modules下的目录中，因此如
      // 果清除了node_modules，则缓存也是如此
      cacheDirectory: '../node_modules/.cache/hard-source/[confighash]',
      // Either an absolute path or relative to webpack's options.context.
      // Sets webpack's recordsPath if not already set.
      recordsPath: '../node_modules/.cache/hard-source/[confighash]/records.json',
      // configHash在启动webpack实例时转换webpack配置，并用于cacheDirectory为不同的webpack配
      // 置构建不同的缓存
      configHash: function(webpackConfig) {
        // node-object-hash on npm can be used to build this.
        return require('node-object-hash')({sort: false}).hash(webpackConfig);
      },
      // 当加载器，插件，其他构建时脚本或其他动态依赖项发生更改时，hard-source需要替换缓存以确保输
      // 出正确。environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存
      environmentHash: {
        root: process.cwd(),
        directories: [],
        files: ['package-lock.json', 'yarn.lock'],
      }
    })
  ],
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        use:[
          {
            loader: 'thread-loader',
            options: WorkerPool
          },
          'cache-loader',
          {
            loader: 'vue-loader',
            options: vueLoaderConfig
          }
        ]
      },
      {
        test: /\.js$/,
        use:[
          {
            loader: 'thread-loader',
            options: WorkerPool
          },
          'cache-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ],
        include: [resolve('src'), resolve('test')],
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          esModule: false,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        },
        exclude: [resolve('src/icons')],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          esModule: false,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          esModule: false,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
          publicPath: "../../"
        }
      },
      {
        test: /\.sass$/,
        use: [process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', {
          loader: 'css-loader',
          options: {
            sourceMap: true
          },
        }, "sass-loader"],
        include: [resolve('src'), resolve('test')],
        exclude: /(node_modules)/,
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
