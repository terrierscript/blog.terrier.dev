const { promisify } = require("util")
const fs = require("fs")
const path = require("path")

const klawSync = require("klaw-sync")
const { contentPagePath } = require("./contentConfig")
// type File = {
//   path: string
//   name: string
// }

/**
 * @returns { {path: string, name: string}[]}
 */
export const getMarkdownFiles = () => {
  console.log("getMarkdownFiles")
  const files = klawSync(contentPagePath)
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

export const getFile = async filepath => {
  const rf = promisify(fs.readFile)
  return await rf(filepath, { encoding: "UTF-8" })
}
