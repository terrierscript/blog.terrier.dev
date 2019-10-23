// @ts-nocheck

import React from "react"
import { BlogPostTemplate } from "../../app/page/article/Blog"
import { graphql } from "gatsby"
import { MainLayoutWithGatsby } from "../provider/MainLayout"
import { renderHtmlAST } from "../../app/page/article/toHtmlAst"
import { generatePostFragment } from "../query/query"

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  // const content = renderHtmlAST(post.htmlAst)
  return (
    <MainLayoutWithGatsby pageContext={pageContext}>
      <BlogPostTemplate
        // content={content}
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
    </MainLayoutWithGatsby>
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
