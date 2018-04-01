import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const Item = ({ post }) => (
  <div>
    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    <small>{post.frontmatter.date}</small>
    {post.excerpt}
    <Link to={post.fields.slug}>Keep Reading →</Link>
  </div>
);

export default class IndexPage extends React.Component<any, any> {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section onMouseOver={e => console.log("mouseover")}>
        {posts.map(({ node: post }) => <Item post={post} key={post.id} />)}
      </section>
    );
  }
}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
// export const query2 = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `
