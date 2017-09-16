const WebpackIsomorphicTools = require('webpack-isomorphic-tools')
// TODO CLEAN UP AND MOVE OVER CONFIG TO SERVER SIDE FROM THE ROOT FOLDER!
const webpackIsomorphicToolsConfig = require('./../../webpack-isomorphic-tools-configuration')

const projectBasePath = require('path').resolve(__dirname, '../..')

const webpackIsomorphicTools =
  new WebpackIsomorphicTools(webpackIsomorphicToolsConfig).server(
    projectBasePath,
    // eslint-disable-next-line global-require
    () => require('./index'),
  )

export default webpackIsomorphicTools
