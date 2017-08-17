// @flow

import path from 'path'
import webpack from 'webpack'
import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'
import webpackIsomorphicToolsConfig from './webpack-isomorphic-tools-configuration'

const webpackIsomorphicToolsPlugin = (isProd)
  ? new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig)
  : new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig).development()

export default {
  // Root of the project directory
  context: path.resolve(__dirname),
  entry: [
    'react-hot-loader/patch',
    './src/client',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/public/`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: webpackIsomorphicToolsPlugin.regularExpression('images'),
        use: [
          { loader: 'url-loader', options: { limit: 10240 } },
        ],
      },
      // {
      //   test: /\.(scss|css|less)$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'css-loader', options: { importLoaders: 2, sourceMap: true } },
      //     { loader: 'postcss-loader', options: { sourceMap: true } },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         outputStyle: 'expanded',
      //         sourceMap: true,
      //         sourceMapContents: true,
      //       },
      //     },
      //   ],
      // },
    ],
    loaders: [
      {
        test: webpackIsomorphicToolsPlugin.regularExpression('styles'),
        loader: (isProd)
          ? ExtractTextPlugin.extract('style-loader', 'css?modules&sourceMap&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]!postcss&sourceMap!sass&outputStyle="expanded"&sourceMap&sourceMapContents')
          : 'style-loader!css-loader?modules&sourceMap&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader&sourceMap!sass-loader&outputStyle="expanded"&sourceMap&sourceMapContents',
      },
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    webpackIsomorphicToolsPlugin,
    new ExtractTextPlugin('styles.css', { allChunks: true }),
  ],
}
