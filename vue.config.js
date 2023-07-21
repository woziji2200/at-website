const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    //   devServer: { disableHostCheck: true }
    devServer: {
        historyApiFallback: true,
        allowedHosts: "all",
    }
})
