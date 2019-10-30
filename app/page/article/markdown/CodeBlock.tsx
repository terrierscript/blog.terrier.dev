import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import prismStyle from "react-syntax-highlighter/dist/cjs/styles/prism/darcula"
import HljsSyntaxHighlighter from "react-syntax-highlighter"
import hljsStyle from "react-syntax-highlighter/dist/cjs/styles/hljs/darcula"

const HljsCodeBlock = ({ children, language }) => {
  return (
    <HljsSyntaxHighlighter language={language} style={hljsStyle}>
      {children}
    </HljsSyntaxHighlighter>
  )
}
const PrismCodeBlock = ({ children, language }) => {
  return (
    <SyntaxHighlighter language={language} style={prismStyle}>
      {children}
    </SyntaxHighlighter>
  )
}

export const CodeBlock = ({ value, language }) => {
  return <PrismCodeBlock language={language}>{value}</PrismCodeBlock>
  // if (language === "jsx") {
  // } else {
  //   return <HljsCodeBlock language={language}>{value}</HljsCodeBlock>
  // }
}
