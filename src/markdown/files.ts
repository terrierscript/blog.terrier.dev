const { promisify } = require("util")
const fs = require("fs")
const path = require("path")

const klawSync = require("klaw-sync")
const grayMatter = require("gray-matter")

const readFile = promisify(fs.readFile)
type File = {
  path: string
  name: string
}
export const contentPagePath = path.resolve("contents/pages/blog")

export const getMarkdownFiles = () => {
  console.log("getMarkdownFiles")
  const files: File[] = klawSync(contentPagePath)
  const markdowns = files
    .filter(p => {
      const ext = path.extname(p.path)
      return [".md"].includes(ext)
    })
    .map(item => {
      const name = item.path.replace(contentPagePath, "")
      return {
        path: item.path,
        name
      }
    })
  return markdowns
}

export const getMatter = async (filepath: string) => {
  const content = await readFile(filepath, { encoding: "UTF-8" })
  return grayMatter(content)
}
