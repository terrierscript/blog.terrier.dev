import React from "react"
import Helmet from "react-helmet"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../app/list/Item' was resolved to '/Use... Remove this comment to see the full error message
import { BlogItem } from "../../app/list/Item"
import { graphql } from "gatsby"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../provider/BlogLayout' was resolved to '/... Remove this comment to see the full error message
import { BlogLayoutProvider } from "../provider/BlogLayout"
import { generatePostFragment } from "../query/query"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../app/component/NavLink' was resolved ... Remove this comment to see the full error message
import { NavLink } from "../../app/component/NavLink"

// const PostLinks = ({ posts }) =>
//   posts.map(post => (
//     <li key={post.node.fields.slug}>
//       <Link to={post.node.fields.slug}>
//         <h2>{post.node.frontmatter.title}</h2>
//       </Link>
//     </li>
//   ))

class TagRoute extends React.Component {
  render() {
    // console.log(this.props);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'data' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const posts = this.props.data.allMarkdownRemark.edges
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'pageContext' does not exist on type 'Rea... Remove this comment to see the full error message
    const tag = this.props.pageContext.lower
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'data' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const title = this.props.data.site.siteMetadata.title
    // const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `"${tag}”の記事`
    // console.log(posts);
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <BlogLayoutProvider pageContext={this.props.pageContext}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <section>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Helmet title={`${tag} | ${title}`} />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <h3>{tagHeader}</h3>
            {/* <ul>
            <PostLinks posts={posts} />
          </ul> */}
            {/* @ts-expect-error ts-migrate(7031) FIXME: Binding element 'post' implicitly has an 'any' typ... Remove this comment to see the full error message */}
            {posts.map(({ node: post }) => (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <BlogItem post={post} key={post.id} />
            ))}
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <NavLink to="/tags/">全てのタグを見る</NavLink>
            </p>
          </div>
        </section>
      </BlogLayoutProvider>
    )
  }
}

export const postFragment = generatePostFragment()
export const tagPageQuery = graphql`
  query TagPage($tags: [String]) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: $tags }, published: { ne: false } } }
    ) {
      totalCount
      edges {
        node {
          ...Post
        }
      }
    }
  }
`
export default TagRoute
