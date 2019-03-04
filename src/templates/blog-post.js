import React, { useMemo } from "react"
import { BlogPostTemplate } from "../../app/article/Blog"
import { graphql } from "gatsby"
import { BlogLayout } from "../provider/BlogLayout"
import { renderHtmlAST } from "../../app/article/toHtmlAst";

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const content =renderHtmlAST(post.htmlAst)
  
  return (
    <BlogLayout>
      <BlogPostTemplate
        content={content}
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
      htmlAst
      fileAbsolutePath
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
      }
    }
  }
`
