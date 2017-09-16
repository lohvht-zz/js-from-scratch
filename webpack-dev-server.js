const Express = require('express')
// eslint-disable-next-line import/no-extraneous-dependencies
const Webpack = require('webpack')

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const webpackConfig = require('./webpack.config.babel')

const compiler = new Webpack(webpackConfig)
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 7001

const serverOptions = {
  contentBase: `http://${host}:${port}`,
  quiet: false,
  noinfo: false,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
}

const app = new Express()
app.use(webpackDevMiddleware(compiler, serverOptions))
app.use(webpackHotMiddleware(compiler))

app.listen(port, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  } else {
    // eslint-disable-next-line no-console
    console.info(`==> 🚧  Webpack development server listening on port ${port}`)
  }
})
