// @ts-nocheck
const withImages = require("next-images")
const { getMarkdownFiles } = require("./src/markdown/")

module.exports = withImages({
  publicRuntimeConfig: {
    conf: "ping",
    files: getMarkdownFiles()
  },
  webpack: config => {
    config.plugins = config.plugins.filter(plugin => {
      if (plugin.constructor.name === "ForkTsCheckerWebpackPlugin") return false
      return true
    })
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    })
    return config
  }
  // exportPathMap: async defaultPathMap => {
  //   return {
  //     ...defaultPathMap,
  //     "/": { page: "/" }
  //   }
  // }
})
