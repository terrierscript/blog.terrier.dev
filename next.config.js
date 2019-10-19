// @ts-nocheck
const withImages = require("next-images")

module.exports = withImages({
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
