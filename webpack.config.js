const { defineConfig } = require('@vue/cli-service')

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = defineConfig({
  transpileDependencies: true,
  plugins: [
    // Certifique-se de que o plugin do AngularWebpackPlugin é inicializado primeiro
    new AngularWebpackPlugin(),
    // ... outros plugins ...
  ]

})