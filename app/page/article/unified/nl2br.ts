import visit, { Visitor } from "unist-util-visit"
import { Node, Parent } from "unist"

const injectChild = (parent: Parent, children: Node[], index) => {
  return [
    ...parent.children.slice(0, index),
    ...children,
    ...parent.children.slice(index + 1)
  ]
}

const nodeLines = node => node.value.trim().split("\n")

// export const nl2brRemark = () => {
//   const transformer = tree => {
//     visit(tree, (node: any, index, parent: any) => {
//       if (node.type !== "text") return node
//       const lines = nodeLines(node)
//       if (lines < 1) {
//         return node
//       }

//       return tree
//     })
//   }
//   return transformer
// }

const isParent = (node: Node): node is Parent =>
  typeof node.children !== "undefined" && Array.isArray(node.children)

export const nl2brRehype = () => {
  const visitor: Visitor<Node> = (node: Node, index, parent: Node) => {
    if (node.type !== "text") return
    if (parent.tagName !== "p") return
    if (!isParent(parent)) return

    const lines = nodeLines(node)
    if (lines < 1) {
      return
    }
    const children = lines
      .map((v, i) => {
        return i == 0
          ? [{ type: "text", value: v }]
          : [{ type: "element", tagName: "br" }, { type: "text", value: v }]
      })
      // .flat()
      .reduce((a, b) => [...a, ...b], []) // TODO: Array.prototype.flat
    const newChildren = injectChild(parent, children, index)
    parent.children = newChildren
  }

  const transformer = tree => {
    visit(tree, visitor)
    return tree
  }

  return transformer
}
