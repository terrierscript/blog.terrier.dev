import React from "react"
import { graphql } from "gatsby"
import { generatePostFragment } from "../query/query"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../provider/BlogLayout' was resolved to '/... Remove this comment to see the full error message
import { BlogLayoutProvider } from "../provider/BlogLayout"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../app/page/list/ListPage' was resolved... Remove this comment to see the full error message
import { Index } from "../../app/page/list/ListPage"

export default class IndexPage extends React.Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'data' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'pageContext' does not exist on type 'Rea... Remove this comment to see the full error message
    const { pageContext } = this.props
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <BlogLayoutProvider pageContext={pageContext}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Index posts={posts} />
      </BlogLayoutProvider>
    )
  }
}

export const postFragment = generatePostFragment()
export const query = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          published: { ne: false }
        }
      }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          ...Post
        }
      }
    }
  }
`
