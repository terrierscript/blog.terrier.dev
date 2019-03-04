import rehypeReact from "rehype-react"
import React from "react"
import visit from "unist-util-visit"
import map from "unist-util-map"

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler

const nr2br = htmlAst => {
  const n = map(htmlAst, (node, i, parent) => {
    if (node.type !== "text") return node
    if (parent.tagName !== "p") return node
    const value = node.value.trim()
    if (value.indexOf("\n") < 0) {
      return node
    }
    const m = value
      .split("\n")
      .map((v, i) => {
        return i == 0
          ? { type: "text", value: v }
          : [{ type: "element", tagName: "br" }, { type: "text", value: v }]
      })
      .reduce((a, b) => a.concat(b), []) // TODO: flatten
    // console.log(parent)
    // TODO: inject
    return {
      type: "element",
      tagName: "span",
      children: m
    }
  })
  return n
}

export const renderHtmlAST = htmlAst => {
  return renderAst(nr2br(htmlAst))
}
