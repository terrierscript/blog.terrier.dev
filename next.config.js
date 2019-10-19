const fs = require("fs")
const path = require("path")

const klawSync = require("klaw-sync")

const getMarkdowns = () => {
  const pagesPath = path.resolve("contents/pages")
  const markdowns = klawSync(pagesPath)
    .filter(p => {
      const ext = path.extname(p.path)
      return [".md"].includes(ext)
    })
    .map(item => {
      const name = item.path.replace(pagesPath, "")
      return {
        ...item,
        name
      }
    })
}

module.exports = {
  webpack: config => {
    config.plugins = config.plugins.filter(plugin => {
      if (plugin.constructor.name === "ForkTsCheckerWebpackPlugin") return false
      return true
    })
    return config
  }
}
