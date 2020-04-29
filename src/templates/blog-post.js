import React from "react"
import { BlogPostTemplate } from "../../app/page/article/BlogPage"
import { graphql } from "gatsby"
import { BlogLayoutProvider } from "../provider/BlogLayout"
// import { renderHtmlAST } from "../../app/page/article/toHtmlAst"
import { generatePostFragment } from "../query/query"

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  return (
    <BlogLayoutProvider pageContext={pageContext}>
      <BlogPostTemplate
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
    </BlogLayoutProvider>
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
