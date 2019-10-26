import React, { FC } from "react"
import ReactMarkdown from "react-markdown/with-html" // for web components
import { nl2brRemark } from "./unified/nl2br"
import styled from "@emotion/styled"
import { PrismCodeBlock } from "./CodeBlock"
import {
  ARTICLE_COLOR,
  // TITLE_COLOR,
  ARTICLE_TITLE_COLOR
  // FEED_LINK_COLOR
} from "../../../layout/global/colors"

export const CodeWrapper = styled.div`
  margin-bottom: 1.8em;
`

const Link = styled.a`
  text-decoration: underline;
`
const ArticleWrapper = styled.div`
  font-size: 0.9em;
  color: ${ARTICLE_COLOR};
  line-height: 1.3em;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1em 0;
    color: ${ARTICLE_TITLE_COLOR};
  }
`

const CodeBlock = props => (
  <CodeWrapper>
    <PrismCodeBlock {...props} />
  </CodeWrapper>
)

const List = styled.ul`
  margin-bottom: 0.25em;
`
const ListItem = styled.li`
  margin-top: 0.25em;
`
const Paragraph = styled.p`
  margin-bottom: 0.8em;
`

const InlineCode = styled.span`
  border: 1px solid #ccc;
  background: #eee;
  border-radius: 4px;
  padding: 0.1em 0.4em;
  margin: 0.1em;
`

export const RawMarkdown: FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <ArticleWrapper>
      <ReactMarkdown
        source={markdown}
        escapeHtml={false} // for web components
        renderers={{
          paragraph: Paragraph,
          code: CodeBlock,
          link: Link,
          list: List,
          listItem: ListItem,
          inlineCode: InlineCode
        }}
        plugins={[nl2brRemark]}
      />
    </ArticleWrapper>
  )
}
