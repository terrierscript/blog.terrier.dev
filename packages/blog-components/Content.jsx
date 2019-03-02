import React from "react"
import styled from "styled-components"

export const Article = styled.div`
  padding: 0 0.5em;
`

export const HTMLContent = ({ content, ...rest }) => {
  if (React.isValidElement(content)) {
    return <Article>{content}</Article>
  }
  return <Article {...rest} dangerouslySetInnerHTML={{ __html: content }} />
}

const Content = ({ content, ...rest }) => (
  <Article {...rest}>
    HTML:
    {content}
  </Article>
)

// HTMLContent.propTypes = Content.propTypes;

export default Content
