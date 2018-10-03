module.exports = {
  runtimeCompiler: true,

  css: {
    sourceMap: true,
    extract: false
  },

  // modify the webpack chain
  chainWebpack: config => {
    config.module.rule('media')
      .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)

    config.module.rule('markdown')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      // .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      // .end()

    // config.module.rule('markdown').use('html-loader').loader('markdown-loader').end()
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  productionSourceMap: undefined,
  parallel: undefined
}