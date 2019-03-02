import { useStaticQuery, graphql } from "gatsby"

export const useTagQuery = () => {
  return useStaticQuery(graphql`
      allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
  `)
}

export const useSiteMeta = () => {
  return useStaticQuery(graphql`
    site {
      siteMetadata {
        title
      }
    }
  `)
}
