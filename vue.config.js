module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-trend" : "/",
  outputDir: 'dist',
  indexPath: 'index.html',
  filenameHashing: true,
  devServer: {
    port: 8080,
    https: false,
    hotOnly: false, // 热更新
    proxy: null, // 设置代理
  }
}