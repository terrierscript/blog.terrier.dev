import React from "react"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../app/page/article/BlogPage' was resol... Remove this comment to see the full error message
import { BlogPostTemplate } from "../../app/page/article/BlogPage"
import { graphql } from "gatsby"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../provider/BlogLayout' was resolved to '/... Remove this comment to see the full error message
import { BlogLayoutProvider } from "../provider/BlogLayout"
// import { renderHtmlAST } from "../../app/page/article/toHtmlAst"
import { generatePostFragment } from "../query/query"

const BlogPost = ({
  data,
  pageContext
}: any) => {
  const { markdownRemark: post } = data
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <BlogLayoutProvider pageContext={pageContext}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...Post
    }
  }
`
