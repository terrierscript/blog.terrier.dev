import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import { BlogItem } from "../../app/list/Item"
import { graphql } from "gatsby"
import { BlogLayout } from "../provider/BlogLayout"
import { generatePostFragment } from "../query/query"

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
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.lower
    const title = this.props.data.site.siteMetadata.title
    // const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `"${tag}”の記事`
    // console.log(posts);
    return (
      <BlogLayout>
        <section>
          <Helmet title={`${tag} | ${title}`} />
          <div>
            <h3>{tagHeader}</h3>
            {/* <ul>
            <PostLinks posts={posts} />
          </ul> */}
            {posts.map(({ node: post }) => (
              <BlogItem post={post} key={post.id} />
            ))}
            <p>
              <Link to="/tags/">全てのタグを見る</Link>
            </p>
          </div>
        </section>
      </BlogLayout>
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
