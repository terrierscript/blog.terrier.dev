import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";
import { BlogArticleCompact } from "../article/Blog";
import { headerFont } from "../utils/typography";

const Title = styled.div`
  font-weight: bold;
  font-family: ${headerFont};
`;

const Item = styled.div`
  margin: 1.2em;
`;

export const BlogItem = ({ post }) => (
  <Item>
    <Title>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </Title>
    <small>{post.frontmatter.date}</small>
  </Item>
);
