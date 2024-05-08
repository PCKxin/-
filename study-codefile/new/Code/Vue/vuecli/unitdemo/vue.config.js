const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false // 关闭eslint检查, enlint检查作用是检查代码规范
})
