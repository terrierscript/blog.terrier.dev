import React from "react";
// import PropTypes from "prop-types";
import { BlogItem } from "../app/list/Item";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section onMouseOver={e => console.log("mouseover")}>
        {posts.map(({ node: post }) => <BlogItem post={post} key={post.id} />)}
      </section>
    );
  }
}

// @ts-ignore
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
          html
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY/MM/DD")
            tags
          }
        }
      }
    }
  }
`;
