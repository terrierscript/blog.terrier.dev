import React from "react";
import { BlogPostTemplate } from "../app/article/Blog";
import Content, { HTMLContent } from "../app/Content";

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <BlogPostTemplate
      content={post.html}
      // description={post.frontmatter.description}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  );
};

export default BlogPost;

// @ts-ignore
export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
      }
    }
  }
`;
