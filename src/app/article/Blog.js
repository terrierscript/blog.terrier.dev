import React from "react";
import Helmet from "react-helmet";
import { kebabCase } from "lodash";
import Link from "gatsby-link";

import Content, { HTMLContent } from "../Content";
import styled from "styled-components";
import { defaultFont } from "../layout/font";

const TagList = ({ tags }) => {
  if (!tags || tags.length == 0) {
    return null;
  }
  return (
    <div>
      <h4>Tags</h4>
      <ul>
        {tags.map(tag => (
          <li key={tag + `tag`}>
            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BlogBody = styled.div`
  padding-top: 1em;
`;

const Title = styled.h1`
  line-height: 1.2em;
  font-family: ${defaultFont};
`;

export const BlogArticle = ({ content, title }) => (
  <React.Fragment>
    <Title>{title}</Title>
    <HTMLContent content={content} />
  </React.Fragment>
);

export const BlogPostTemplate = ({ content, tags, title }) => {
  return (
    <section>
      <Helmet title={`${title} | Today 🐶 Learned`} />
      <BlogBody>
        <BlogArticle title={title} content={content} />
        <TagList tags={tags} />
      </BlogBody>
    </section>
  );
};
