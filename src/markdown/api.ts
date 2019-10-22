import path from "path"
import { PostWrap } from "../../app/list/Item"
import { getMarkdownFiles, getFile } from "./files"
import { contentPagePath } from "./contentConfig"
import grayMatter from "gray-matter"

export const getPagenateList = async ({ page = 1, limit = 10 }) => {
  const items = getMarkdownFiles().reverse()
  const converted = await Promise.all(
    items.slice((page - 1) * limit, limit).map(async item => {
      const file = await getFile(item.path)
      const matter = grayMatter(file)
      // console.log()
      const result: PostWrap = {
        node: {
          id: item.name,
          frontmatter: matter.data,
          fields: {
            slug: `blog${item.name}`
          }
        }
      }
      return result
    })
  )
  return converted
}

export type BlogItem = {
  content: string
  data: {
    data?: string
    published?: boolean
    tags?: string[]
    title?: string
  }
}
export const getItem = async ({ slug }): Promise<BlogItem> => {
  const filepath = path.resolve(contentPagePath, slug)
  const file = await getFile(filepath)
  return grayMatter(file)
}
