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
  /* line-height: 2em; */
  /* font-family: ${defaultFont}; */
`;

const Modify = ({ fileAbsolutePath }) => {
  const repo = "terrierscript/snippet.terriercript.com";
  const directory = "contents/pages/blog";
  const filename = fileAbsolutePath.split("/").pop();
  const url = `https://github.com/${repo}/edit/master/${directory}/${filename}`;

  return <a href={url}>この記事の修正を提案する</a>;
};

const BlogArticleWrapper = styled.div`
  padding-bottom: 3em;
`;
export const BlogArticle = ({ content, title }) => (
  <BlogArticleWrapper>
    <Title>{title}</Title>
    <HTMLContent content={content} />
  </BlogArticleWrapper>
);

export const BlogPostTemplate = ({
  content,
  tags,
  title,
  fileAbsolutePath
}) => {
  return (
    <section>
      <Helmet title={`${title} | Snippet 🐶`} />
      <BlogBody>
        <BlogArticle title={title} content={content} />
        <TagList tags={tags} />
        <Modify fileAbsolutePath={fileAbsolutePath} />
      </BlogBody>
    </section>
  );
};
