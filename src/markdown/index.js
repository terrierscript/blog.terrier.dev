const { promisify } = require("util")
const fs = require("fs")
const path = require("path")

const klawSync = require("klaw-sync")
const grayMatter = require("gray-matter")

exports.getMarkdownFiles = () => {
  const pagesPath = path.resolve("contents/pages")
  const markdowns = klawSync(pagesPath)
    .filter(p => {
      const ext = path.extname(p.path)
      return [".md"].includes(ext)
    })
    .map(item => {
      const name = item.path.replace(pagesPath, "")
      return {
        path: item.path,
        name
      }
    })
  return markdowns
}
exports.getMatter = async path => {
  const content = await promisify(fs.readFile(path, { encoding: "UTF-8" }))
  console.log(content)
}
exports.getPagenateList = (page = 1, limit = 10) => {
  const items = exports.getMarkdownFiles()
  return items.slice((page - 1) * limit, limit)
}
