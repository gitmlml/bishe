const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  // 解决跨域
  // publicPath: '/',
  // lintOnSave: false,
  // devServer: {
  //   open: true,
  //   port: 8080,
  //   proxy: {
  //     '/': {
  //       // 连接到后端的路径
  //       target: 'http://localhost:8081/student',
  //       changeOrigin: true,
  //       secure: false,
  //       pathRewrite: {
  //         '^/': '/'
  //       }
  //     }
  //   }
  // }

})
