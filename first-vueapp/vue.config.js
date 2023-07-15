// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     proxy: {
//       '^/api': {
//         target: 'https://localhost:5000',
//         changeOrigin: true,
//         logLevel: 'debug',
//         pathRewrite: {'^/api': '/'}
//       },
//     }
//   }
// })



module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: {'^/api': '/'}
        }
      }
    }
}
