import { graphql } from "gatsby"

export const generatePostFragment = () => {
  return graphql`
    fragment Post on MarkdownRemark {
      fields {
        slug
      }
      excerpt(pruneLength: 400)
      id
      fields {
        slug
      }
      html
      frontmatter {
        title
        templateKey
        date(formatString: "YYYY/MM/DD")
        tags
      }
    }
  `
}
