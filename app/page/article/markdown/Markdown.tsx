import React, { FC } from "react"
import ReactMarkdown from "react-markdown/with-html" // for web components
import { nl2brRemark } from "./unified/nl2br"
import styled from "@emotion/styled"
import { PrismCodeBlock } from "./CodeBlock"

export const CodeWrapper = styled.div`
  margin-bottom: 2rem;
`

const CodeBlock = props => (
  <CodeWrapper>
    <PrismCodeBlock {...props} />
  </CodeWrapper>
)

export const RawMarkdown: FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <ReactMarkdown
      source={markdown}
      escapeHtml={false} // for web components
      renderers={{ code: CodeBlock }}
      plugins={[nl2brRemark]}
    />
  )
}
