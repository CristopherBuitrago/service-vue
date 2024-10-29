const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // add scsss load config
  css:{
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_vars.scss";
        `
      }
    }
  }
})
