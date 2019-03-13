const path = require('path')
const merge = require('webpack-merge')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const autoPrefixer = require('autoprefixer')
const webpack = require('webpack')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist_prod'),
  },
  optimization: {
    minimizer: [
      new OptimizeCssPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeRedundantAttributes: true,
          collapseWhitespace: true,
          removeComments: true,
          useShortDoctype: true,
        },
      }),
    ],
  },
  plugins: [
  new MiniCssExtractPlugin({
    filename: '[name].[contentHash].css',
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoPrefixer(),
      ],
    },
  }),

],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
})