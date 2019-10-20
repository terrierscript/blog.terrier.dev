import { PostWrap } from "../../app/list/Item"

const { promisify } = require("util")
const fs = require("fs")
const path = require("path")

const klawSync = require("klaw-sync")
const grayMatter = require("gray-matter")

type File = {
  path: string
  name: string
}
export const getMarkdownFiles = () => {
  console.log("getMarkdownFiles")
  const pagesPath = path.resolve("contents/pages")
  const files: File[] = klawSync(pagesPath)
  const markdowns = files
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
export const getMatter = async path => {
  const content = await promisify(fs.readFile)(path, { encoding: "UTF-8" })
  return grayMatter(content)
}
export const getPagenateList = async ({ page = 1, limit = 10 }) => {
  const items = getMarkdownFiles().reverse()
  const converted = await Promise.all(
    items.slice((page - 1) * limit, limit).map(async item => {
      const matter = await getMatter(item.path)
      // console.log()
      const result: PostWrap = {
        node: {
          id: item.name,
          frontmatter: matter.data,
          fields: {
            slug: item.path
          }
        }
      }
      return result
    })
  )
  return converted
}
