import React from "react"
import Helmet from "react-helmet"

import { HTMLContent } from "./Content"
import styled from "@emotion/styled"
import { defaultFont } from "../../layout/font"
import { Tag } from "../../component/Tag"
import { Layout } from "../../layout/Layout"
import AdSense from "react-adsense"
import { ArticleFooter } from "./ArticleFooter"
import { RawMarkdown } from "./Markdown"

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

const BlogBody = styled.section`
  display: grid;
  grid-gap: 1.5em;
  grid-auto-columns: 100%;
  /* padding-top: 1em; */
  word-break: break-word;
  img {
    border: 1px solid gray;
  }
`
const ArticleWrapper = styled.div`
  background: #fff;
  /* padding: 1em; */
`

const Title = styled.h1`
  line-height: 1.2em;
  word-break: break-word;
  font-size: 2.5rem;
  /* font-family: ${defaultFont}; */
`

const TagListWrapper = styled.div`
  margin-bottom: 1.2em;
`

const BlogArticleWrapper = styled.div`
  padding-bottom: 3em;
  word-break: break-all;
`

const Date = styled.small`
  color: gray;
  font-size: 12px;
`
export const BlogArticle = ({
  // content,
  title,
  tags,
  date,
  markdown
}) => (
  <BlogArticleWrapper>
    <Date>posted: {date}</Date>
    <Title>{title}</Title>
    <TagListWrapper>
      <TagList tags={tags} />
    </TagListWrapper>
    <ArticleWrapper>
      {/* <HTMLContent content={content} /> */}
      <RawMarkdown markdown={markdown} />
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
  // content,
  description = "",
  tags,
  title,
  date,
  rawMarkdown = null,
  fileAbsolutePath = null
}) => {
  return (
    <>
      <Helmet title={`${title} | terrier.dev 🐶`}>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          name="og:image"
          content="https://ja.gravatar.com/userimage/90616865/8a8d3f96f2d0be4c04607273030e1e17.png"
        />
      </Helmet>
      <BlogBody>
        {/* <ClapButton id={id} title={title}>
          👍
        </ClapButton> */}

        <BlogArticle
          title={title}
          // content={content}
          tags={tags}
          date={date}
          markdown={rawMarkdown}
        />
        {/* TODO fileAbsolutePathなんとかしたい */}
        <ArticleFooter fileAbsolutePath={fileAbsolutePath}></ArticleFooter>
        <AdSense.Google
          layout="in-article"
          format="fluid"
          client="ca-pub-9836926490768601"
          slot="2319260593"
        />
        {/* <Comment identifier={id} title={title} /> */}
      </BlogBody>
    </>
  )
}
