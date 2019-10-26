import React, { FC } from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow"
import htmlParser from "react-markdown/plugins/html-parser"

const parseHtml = htmlParser({
  isValidNode: () => {
    console.log("iVn")
    return true
  },
  processingInstructions: [
    {
      shouldProcessNode: function(node) {
        console.log(node)
        return node.parent && node.parent.name && node.parent.name === "p"
      },
      processNode: function(node, children) {
        console.log(node)
        return node
      }
    }
  ]
})

export const CodeBlock = ({ value, language }) => {
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
      astPlugins={
        [
          // e => {
          //   console.log("astsat", e)
          //   throw "XXX"
          // },
          // parseHtml
        ]
      }
    />
  )
}
