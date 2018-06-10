import React, { ReactNode, ReactElement } from "react"
import { SFC } from "react"
import Helmet from "react-helmet"

import Content, { HTMLContent } from "../Content"
import styled from "styled-components"
import { defaultFont } from "../layout/font"
import { Tag } from "./Tag"
import { Comment } from "./Comment"

const TagList = ({ tags = [] }) => {
  if (tags.length === 0) {
    return null
  }
  return <span>{tags.map(tag => <Tag tag={tag} key={tag + `tag`} />)}</span>
}

const BlogBody = styled.div`
  padding-top: 1em;
`

const Title = styled.h1`
  line-height: 1.2em;
  /* font-family: ${defaultFont}; */
`

const TagListWrapper = styled.div`
  margin-bottom: 1.2em;
`

const Modify = ({ fileAbsolutePath }) => {
  if (!fileAbsolutePath) {
    return null
  }
  const repo = "terrierscript/snippet.terriercript.com"
  const directory = "contents/pages/blog"
  const filename = fileAbsolutePath.split("/").pop()
  const url = `https://github.com/${repo}/edit/master/${directory}/${filename}`

  return <a href={url}>この記事の修正をする</a>
}

const BlogArticleWrapper = styled.div`
  padding-bottom: 3em;
`

export const BlogArticle = ({ content, title, tags }) => (
  <BlogArticleWrapper>
    <Title>{title}</Title>
    <TagListWrapper>
      <TagList tags={tags} />
    </TagListWrapper>
    <HTMLContent content={content} />
  </BlogArticleWrapper>
)

export const BlogArticleCompact = ({ content, title }) => (
  <BlogArticleWrapper>
    <Title>{title}</Title>
    <HTMLContent content={content} />
  </BlogArticleWrapper>
)

export const BlogPostTemplate = ({
  content,
  description = "",
  tags,
  title,
  id,
  fileAbsolutePath = null
}) => {
  return (
    <section>
      <Helmet title={`${title} | Snippet 🐶`}>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <BlogBody>
        <BlogArticle title={title} content={content} tags={tags} />
        <Modify fileAbsolutePath={fileAbsolutePath} />
        <Comment identifier={id} title={title} url={""} />
        
      </BlogBody>
    </section>
  )
}
