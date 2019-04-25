/** @format */

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // 添加新的svg-sprite-loader处理svgIcon
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/icons')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })

    // 原有的svg图像处理loader添加exclude
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()

    // 这里是对环境的配置，不同的环境对应不同的 BASE_URL,以便 axios 的请求地址不同
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
    })
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/theme'],
      },
    },
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true,
    },
  },
}
