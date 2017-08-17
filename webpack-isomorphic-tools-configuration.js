// eslint-disable-next-line import/no-extraneous-dependencies
import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin'

export default {
  assets: {
    images: {
      extensions: ['jpeg', 'jpg', 'png', 'gif', 'ico'],
    },
    styles: {
      extensions: ['less', 'scss', 'css'],
      filter: (module, regex, options, log) => {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.styleLoaderFilter(module, regex, options, log)
        }
        return regex.test(module.name)
      },
      path: (module, options, log) => {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.styleLoaderPathExtractor(module, options, log)
        }
        return module.name
      },
      parser: (module, options, log) => {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.cssModulesLoaderParser(module, options, log)
        }
        return module.source
      },
    },
  },
}
