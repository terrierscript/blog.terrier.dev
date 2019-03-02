import { useStaticQuery, graphql } from "gatsby"

export const useTagQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query Tag {
      allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  return allMarkdownRemark.group
}
