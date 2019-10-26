import React, { FC } from "react"
import ReactMarkdown from "react-markdown/with-html" // for web components
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow"
import { nl2brRemark } from "./unified/nl2br"
import styled from "@emotion/styled"

const CodeWrapper = styled.div`
  margin-bottom: 2rem;
`

export const CodeBlock = ({ value, language }) => {
  return (
    <CodeWrapper>
      <SyntaxHighlighter language={language} style={style}>
        {value}
      </SyntaxHighlighter>
    </CodeWrapper>
  )
}

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
