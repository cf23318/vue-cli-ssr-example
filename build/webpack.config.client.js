const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'

let config

const defaultPluins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin()
]
const devServer = {
  port: 8000,
  host: 'localhost',
  overlay: {
    errors: true
  },
  hot: true
}

if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader'
              // options: {
              //   module: true,
              //   // 定义css module时的名字
              //   localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[name]-[hash:base64:5]',
              // }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    devServer,
    plugins: defaultPluins.concat(defaultPluins, [
      new webpack.HotModuleReplacementPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/index.js')
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: ExtractPlugin.extract({
            fallback: 'vue-style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              'stylus-loader'
            ]
          })
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: true
    },
    plugins: defaultPluins.concat(defaultPluins, [
      new ExtractPlugin('styles.[hash:8].css')
    ])
  })
}

module.exports = config
