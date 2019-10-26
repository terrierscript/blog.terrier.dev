import rehypeReact from "rehype-react"
import React from "react"
import unified from "unified"
import { nl2brRehype } from "./unified/nl2br"

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler

export const renderHtmlAST = htmlAst => {
  // const a = processor.processSync(htmlAst)
  // console.log(a)
  const tree = unified()
    .use(nl2brRehype)
    .runSync(htmlAst)
  return renderAst(tree)
}
