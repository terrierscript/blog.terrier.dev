import React, { SFC } from "react"
import styled from "styled-components"

export const Article = styled.div`
  font-size: 18px;
  line-height: 1.5em;
`

export const HTMLContent = ({ content, ...rest }) => (
  <Article {...rest} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, ...rest }) => (
  <Article {...rest}>HTML:{content}</Article>
)

// HTMLContent.propTypes = Content.propTypes;

export default Content
