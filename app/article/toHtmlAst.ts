import rehypeReact from "rehype-react"
import React from "react"
import visit from "unist-util-visit"
import unified from "unified"

const nr2br = htmlAst => {
  visit(htmlAst, (node, index, parent) => {
    if (node.type !== "text") return node
    if (parent.tagName !== "p") return node
    const values = node.value.trim().split("\n")
    if (values.length < 1) {
      return
    }
    const children = values
      .map((v, i) => {
        return i == 0
          ? [{ type: "text", value: v }]
          : [{ type: "element", tagName: "br" }, { type: "text", value: v }]
      })
      .flat()
    // .reduce((a, b) => [...a, ...b], []) // TODO: Array.prototype.flat

    const newChildren = [
      ...parent.children.slice(0, index),
      ...children,
      ...parent.children.slice(index + 1)
    ]
    parent.children = newChildren
  })
  return htmlAst
}

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler

const processor = unified().use(nr2br)
export const renderHtmlAST = htmlAst => {
  // const a = processor.processSync(htmlAst)
  // console.log(a)
  console.log(JSON.stringify(htmlAst, null, 2))
  return renderAst(nr2br(htmlAst))
}
