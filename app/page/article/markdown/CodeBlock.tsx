import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow"
// import SyntaxHighlighter from "react-syntax-highlighter"
// import style from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-sulphurpool-dark"

export const PrismCodeBlock = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language} style={style}>
      {value}
    </SyntaxHighlighter>
  )
}
