/** @format */

// vue.config.js
module.exports = {
  chainWebpack: config => {
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
