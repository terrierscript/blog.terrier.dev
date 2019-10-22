import React from "react"
import { BlogPostTemplate } from "../../app/page/article/Blog"
import { graphql } from "gatsby"
import { BlogLayout } from "../provider/BlogLayout"
import { renderHtmlAST } from "../../app/page/article/toHtmlAst"
import { generatePostFragment } from "../query/query"

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const content = renderHtmlAST(post.htmlAst)
  return (
    <BlogLayout pageContext={pageContext}>
      <BlogPostTemplate
        content={content}
        tags={
          post.frontmatter.tags // description={post.frontmatter.description}
        }
        rawMarkdown={post.rawMarkdownBody}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        fileAbsolutePath={post.fileAbsolutePath}
        description={post.excerpt}
        // id={post.id}
      />
    </BlogLayout>
  )
}

export default BlogPost

export const postFragment = generatePostFragment()

// @ts-ignore
export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...Post
    }
  }
`
