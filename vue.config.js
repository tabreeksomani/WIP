const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
},
  this.publicPath = process.env.NODE_ENV === 'production' ? '/wip/' : '/'
)
