const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/Biscuit-Paradise/' : '/',
  configureWebpack: {
    performance: {
      hints: false, // 或 'warning' 或 'error'
      maxAssetSize: 1024 * 1024 * 1.5, // 設定單個檔案大小上限，這裡是1.5MB
      maxEntrypointSize: 1024 * 1024 * 1.5, // 設定 entrypoint 的大小上限，這裡是1.5MB
    },
  },
})
