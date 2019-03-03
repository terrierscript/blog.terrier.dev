import React from "react"
import { BlogPostTemplate } from "../../app/article/Blog"
import { graphql } from "gatsby"
import { BlogLayout } from "../provider/BlogLayout"
const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  console.log("============--")
  return (
    <BlogLayout>
      <BlogPostTemplate
        content={post.html}
        tags={
          post.frontmatter.tags // description={post.frontmatter.description}
        }
        title={post.frontmatter.title}
        fileAbsolutePath={post.fileAbsolutePath}
        description={post.excerpt}
        id={post.id}
      />
    </BlogLayout>
  )
}

export default BlogPost

// @ts-ignore
export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      excerpt(pruneLength: 400)
      id
      html
      fileAbsolutePath
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
      }
    }
  }
`
