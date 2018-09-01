module.exports = (isDev) => {
  return {
    preserveWhitepace: true, // 去除尾部空格
    extractCSS: !isDev, // 单独打包vue中的css
    cssModules: {
      // 定义css module时的名字
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[name]-[hash:base64:5]',
      // vue中调用css时的命名方式
      camelCase: true
    },
    // postcss: {}, // postcss.config.js全局配置
  }
}