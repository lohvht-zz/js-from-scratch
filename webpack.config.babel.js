// @flow

import path from 'path'
import webpack from 'webpack'

import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'

const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

const webpackIsomorphicConfiguration = require('./webpack-isomorphic-tools-configuration')

const webpackIsomorphicToolsPlugin = (isProd) ?
  new WebpackIsomorphicToolsPlugin(webpackIsomorphicConfiguration) :
  new WebpackIsomorphicToolsPlugin(webpackIsomorphicConfiguration).development()


export default {
  context: path.resolve(__dirname),
  entry: [
    'react-hot-loader/patch',
    './src/client',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // TODO: change dev to look at public instead of dist
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
  },
  module: {
    loaders: [
      {
        test: webpackIsomorphicToolsPlugin.regularExpression('images'),
        loader: 'url-loader?limit=10240',
      },
    ],
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // devServer: {
  //   port: WDS_PORT,
  //   hot: true,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //   },
  // },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
