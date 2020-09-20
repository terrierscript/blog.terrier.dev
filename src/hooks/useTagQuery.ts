import { useStaticQuery, graphql } from "gatsby"

export const useTagQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query Tag {
      allMarkdownRemark(limit: 10000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  const { group } = allMarkdownRemark
  const countMap = group.reduce((curr: any, {
    fieldValue,
    totalCount
  }: any) => {
    const lower = fieldValue.toLowerCase()
    curr[lower] = curr[lower] ? curr[lower] + totalCount : totalCount
    return curr
  }, {})
  return Object.entries(countMap).map(([fieldValue, totalCount]) => {
    return {
      fieldValue,
      totalCount
    }
  })

  return group
}
