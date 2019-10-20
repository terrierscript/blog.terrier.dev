import rehypeReact from "rehype-react"
import React from "react"
import visit from "unist-util-visit"
import unified from "unified"
import remarkParse from "remark-parse"
import remark2react from "remark-react"
import rehypeParse from "rehype-parse"
import remarkRehype from "remark-rehype"
import rehypeRemark from "rehype-remark"
import rehypePrism from "@mapbox/rehype-prism"

const nl2br = () => {
  const transformer = tree => {
    visit(tree, (node: any, index, parent: any) => {
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

const highlightLang = () => {
  return tree => {
    visit(tree, "element", visitor)
  }

  function visitor(node, index, parent) {
    if (!parent || parent.tagName !== "pre" || node.tagName !== "code") {
      return
    }
    console.log(node)
  }
}

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler

export const renderHtmlAST = htmlAst => {
  // const a = processor.processSync(htmlAst)
  // console.log(a)
  const tree = unified()
    .use(remarkParse)
    .use(nl2br)
    .runSync(htmlAst)
  return renderAst(tree)
}

export const renderMarkdown = (markdownString: string) => {
  console.log("renderRem")
  const tree = unified()
    .use(remarkParse)
    .use(nl2br)
    // .use(rehypeParse)
    .use(remarkRehype)
    .use(highlightLang)
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypeRemark)
    .use(remark2react)
    .processSync(markdownString)
  console.log("t", tree)
  return tree.contents // renderAst(tree)
}
