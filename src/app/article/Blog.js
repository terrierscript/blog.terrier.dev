import React from "react";
import Helmet from "react-helmet";

import Content, { HTMLContent } from "../Content";
import styled from "styled-components";
import { defaultFont } from "../layout/font";
import { Tag } from "./Tag";

const TagList = ({ tags }) => {
  if (!tags || tags.length == 0) {
    return null;
  }
  return <span>{tags.map(tag => <Tag tag={tag} key={tag + `tag`} />)}</span>;
};

const BlogBody = styled.div`
  padding-top: 1em;
`;

const Title = styled.h1`
  line-height: 1.2em;
  /* font-family: ${defaultFont}; */
`;

const TagListWrapper = styled.div`
  margin-bottom: 1.2em;
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
export const BlogArticle = ({ content, title, tags }) => (
  <BlogArticleWrapper>
    <Title>{title}</Title>
    <TagListWrapper>
      <TagList tags={tags} />
    </TagListWrapper>

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
        <BlogArticle title={title} content={content} tags={tags} />
        <Modify fileAbsolutePath={fileAbsolutePath} />
      </BlogBody>
    </section>
  );
};
