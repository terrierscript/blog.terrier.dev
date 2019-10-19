const { promisify } = require("util")
const fs = require("fs")
const path = require("path")

const klawSync = require("klaw-sync")
const grayMatter = require("gray-matter")

export const getMarkdownFiles = () => {
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
  return markdowns
}
export const getMatter = async path => {
  const content = await promisify(fs.readFile(path, { encoding: "UTF-8" }))
  console.log(content)
}
export const getPagenateList = (page = 1, limit = 10) => {
  const items = getMarkdownFiles()
  return items.slice((page - 1) * limit, limit)
}
