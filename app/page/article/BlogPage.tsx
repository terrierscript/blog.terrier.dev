import React from "react"
import Helmet from "react-helmet"

import { HTMLContent } from "./Content"
import styled from "@emotion/styled"
import { impactFont } from "../../layout/font"
import { AutoLinkTags } from "../../component/Tag"
import { Layout } from "../../layout/Layout"
import AdSense from "react-adsense"
import { ArticleFooter } from "./ArticleFooter"
import { RawMarkdown } from "./markdown/Markdown"
import { ARTICLE_BORDER_COLOR } from "../../layout/global/colors"
import { Date } from "../../component/Date"
import { Divider } from "@chakra-ui/core"

const TagList = ({ tags = [] }) => {
  if (tags.length === 0) {
    return null
  }
  return (
    <span>
      <AutoLinkTags tags={tags} />
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
const ArticleBg = styled.div`
  padding: 2em 0 0;
  /* border-top: 1px solid ${ARTICLE_BORDER_COLOR}; */
  /* border-bottom: 1px solid ${ARTICLE_BORDER_COLOR}; */
`

const ArticleTitle = styled.h1`
  line-height: 1.2em;
  word-break: break-word;
  font-size: 1.6rem;
  letter-spacing: 0.02em;
  margin-bottom: 0.2em;
  /* font-family: ${impactFont}; */
`

const TagListWrapper = styled.div`
  margin-bottom: 2.5em;
`

const BlogArticleWrapper = styled.div`
  /* padding-bottom: 3em; */
  word-break: break-all;
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
    <ArticleTitle>{title}</ArticleTitle>
    <TagListWrapper>
      <TagList tags={tags} />
    </TagListWrapper>
    <Divider />
    <ArticleBg>
      {/* <HTMLContent content={content} /> */}
      <RawMarkdown markdown={markdown} />
    </ArticleBg>
  </BlogArticleWrapper>
)

export const BlogArticleCompact = ({ content, title }) => (
  <BlogArticleWrapper>
    <ArticleTitle>{title}</ArticleTitle>
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
    <Layout showSide={false}>
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
        <BlogArticle
          title={title}
          tags={tags}
          date={date}
          markdown={rawMarkdown}
        />
        {/* TODO fileAbsolutePathなんとかしたい */}
        <ArticleFooter
          title={title}
          fileAbsolutePath={fileAbsolutePath}
        ></ArticleFooter>
        <AdSense.Google
          layout="in-article"
          format="fluid"
          client="ca-pub-9836926490768601"
          slot="2319260593"
        />
        {/* <Comment identifier={id} title={title} /> */}
      </BlogBody>
    </Layout>
  )
}
