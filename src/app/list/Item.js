import Link from "gatsby-link";
import React from "react";

export const BlogItem = ({ post }) => (
  <div>
    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    <small>{post.frontmatter.date}</small>
  </div>
);
