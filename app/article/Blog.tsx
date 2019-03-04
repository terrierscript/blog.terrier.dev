import React from "react"
import Helmet from "react-helmet"

import { HTMLContent } from "./Content"
import styled from "styled-components"
import { defaultFont } from "../layout/font"
import { Tag } from "./Tag"
import { Comment } from "./Comment"
import { ClapButton } from "./clap/ClapButton"
import { renderHtmlAST } from "./toHtmlAst";

const TagList = ({ tags = [] }) => {
  if (tags.length === 0) {
    return null
  }
  return (
    <span>
      {tags.map(tag => (
        <Tag tag={tag} key={tag + `tag`} />
      ))}
    </span>
  )
}

const BlogBody = styled.div`
  display: grid;
  grid-gap: 1.5em;
  grid-auto-columns: 100%;
  /* padding-top: 1em; */
  word-break: break-word;
`
const ArticleWrapper = styled.div`
  background: #fff;
  /* padding: 1em; */
`

const Title = styled.h1`
  line-height: 1.2em;
  word-break: break-word;
  /* font-family: ${defaultFont}; */
`

const TagListWrapper = styled.div`
  margin-bottom: 1.2em;
`

const Modify = ({ fileAbsolutePath }) => {
  if (!fileAbsolutePath) {
    return null
  }
  const repo = "terrierscript/terrier.dev"

  const directory = "contents/pages/blog/"
  const filename = fileAbsolutePath.split("/").pop()
  const year = filename.substr(0, 4) // TODO: ちょっと無理やりになってる
  const url = `https://github.com/${repo}/edit/master/${directory}/${year}/${filename}`

  return <a href={url}>この記事の修正をする</a>
}

const BlogArticleWrapper = styled.div`
  padding-bottom: 3em;
  word-break: break-all;
`

export const BlogArticle = ({ content, title, tags }) => (
  <BlogArticleWrapper>
    <Title>{title}</Title>
    <TagListWrapper>
      <TagList tags={tags} />
    </TagListWrapper>
    <ArticleWrapper>
      <HTMLContent content={content} />
    </ArticleWrapper>
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
  console.log(fileAbsolutePath)
  return (
    <React.Fragment>
      <Helmet title={`${title} | terrier.dev 🐶`}>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <BlogBody>
        {/* <ClapButton id={id} title={title}>
          👍
        </ClapButton> */}

        <BlogArticle title={title} content={content} tags={tags} />
        <Modify fileAbsolutePath={fileAbsolutePath} />
        {/* <Comment identifier={id} title={title} /> */}
      </BlogBody>
    </React.Fragment>
  )
}
