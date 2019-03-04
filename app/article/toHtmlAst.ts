import rehypeReact from "rehype-react"
import React from "react"
import visit from "unist-util-visit"
import map from "unist-util-map"

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler

const nr2br = htmlAst => {
  return map(htmlAst, (node, index, parent) => {
    if (node.type !== "text") return node
    if (parent.tagName !== "p") return node
    const value = node.value.trim()
    if (value.indexOf("\n") < 0) {
      return node
    }
    const c = value.split("\n").map((v, i) => {
      return i == 0
        ? [{ type: "text", value: v }]
        : [{ type: "element", tagName: "br" }, { type: "text", value: v }]
    })
    let children = []
    for (let i = 0; i < c.length; i++) {
      children = [...children, ...c[i]]
    }
    // TODO: inject to parent
    return {
      type: "element",
      tagName: "span",
      children
    }
  })
}

export const renderHtmlAST = htmlAst => {
  return renderAst(nr2br(htmlAst))
}
