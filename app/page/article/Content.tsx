import React from "react"
import styled from "@emotion/styled"

export const Article = styled.div`
  padding: 0 0.5em;
`

export const HTMLContent = ({ content, ...rest }) => {
  // console.log("HTMLContent", content, React.isValidElement(content))
  if (React.isValidElement(content)) {
    return <Article>{content}</Article>
  }
  return <Article {...rest} dangerouslySetInnerHTML={{ __html: content }} />
}

export const Content = ({ content, ...rest }) => (
  <Article {...rest}>
    HTML:
    {content}
  </Article>
)

// HTMLContent.propTypes = Content.propTypes;
