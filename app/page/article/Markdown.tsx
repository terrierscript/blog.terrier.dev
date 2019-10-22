import React, { FC } from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow"

const CodeBlock = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language} style={style}>
      {value}
    </SyntaxHighlighter>
  )
}

export const RawMarkdown: FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <ReactMarkdown
      source={markdown}
      escapeHtml={false} // for web components
      renderers={{ code: CodeBlock }}
    />
  )
}
