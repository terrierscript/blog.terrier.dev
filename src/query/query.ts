import { graphql } from "gatsby"

export const generatePostFragment = () => {
  return graphql`
    fragment Post on MarkdownRemark {
      excerpt(pruneLength: 400)
      id
      rawMarkdownBody
      fields {
        slug
      }
      # html
      # htmlAst
      fileAbsolutePath
      frontmatter {
        title
        templateKey
        date(formatString: "YYYY/MM/DD")
        tags
      }
    }
  `
}
