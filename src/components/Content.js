import React, { SFC } from "react"
import styled from "styled-components"

const Document = styled.div`
  font-size: 18px;
  line-height: 1.5em;
`

export const HTMLContent = ({ content, ...rest }) => (
  <Document {...rest} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, ...rest }) => (
  <Document {...rest}>HTML:{content}</Document>
)

// HTMLContent.propTypes = Content.propTypes;

export default Content
