// https://cli.vuejs.org/

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // publicPath: '../../'
  baseUrl: process.env.baseUrl,
  outputDir: process.env.outputDir,
  //  eslint校验
  lintOnSave: false,
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('utils', resolve('src/utils'))
      .set('store', resolve('src/store'))
      .set('router', resolve('src/router'))

    config.resolve.extensions
      .add('.js')
      .add('.vue')
      .add('.styl')

    config.module.rule('svg').uses.clear()
    config.module
      .rule('svg')
      .use('raw-loader')
      .loader('raw-loader')
  },

  productionSourceMap: false,
  css: {
    sourceMap: false
  },

  devServer: {
    // open: process.platform === 'darwin',
    //项目启动后自动弹出浏览器
    open: true,
    host: '0.0.0.0',
    port: 8234,
    https: false,
    hotOnly: false
    // proxy: {
    //   '/api:': {
    //     target: '', //请求地址
    //     ws: true,
    //     changeOrigin: true, //允许跨域
    //     //路径重写
    //     pathRewrite: {
    //       '^api/': '' //请求地址
    //     }
    //   }
    // }
  }
}
