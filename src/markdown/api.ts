import path from "path"
import { PostWrap } from "../../app/list/Item"
import { getMarkdownFiles, getMatter, contentPagePath } from "./files"

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
            slug: item.name
          }
        }
      }
      return result
    })
  )
  return converted
}
export const getItem = async ({ slug }) => {
  const filepath = path.resolve(contentPagePath, slug)
  return getMatter(filepath)
}
