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
  return group
}
