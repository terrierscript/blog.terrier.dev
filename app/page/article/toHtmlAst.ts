import rehypeReact from "rehype-react"
import React from "react"
import visit from "unist-util-visit"
import highlight from "rehype-highlight"
import unified from "unified"

const nl2br = () => {
  const transformer = tree => {
    visit(tree, (node, index, parent) => {
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
        // .flat()
        .reduce((a, b) => [...a, ...b], []) // TODO: Array.prototype.flat

      const newChildren = [
        ...parent.children.slice(0, index),
        ...children,
        ...parent.children.slice(index + 1)
      ]
      parent.children = newChildren
    })
    return tree
  }
  return transformer
}

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler

export const renderHtmlAST = htmlAst => {
  // const a = processor.processSync(htmlAst)
  // console.log(a)
  const tree = unified()
    .use(highlight, { ignoreMissing: true })
    .use(nl2br)
    .runSync(htmlAst)
  return renderAst(tree)
}
