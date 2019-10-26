import visit, { Visitor } from "unist-util-visit"
import { Node, Parent } from "unist"

// core
const injectChild = (parent: Parent, children: Node[], index) => {
  return [
    ...parent.children.slice(0, index),
    ...children,
    ...parent.children.slice(index + 1)
  ]
}

const nodeLines = node => node.value.trim().split("\n")
const isParent = (node: Node): node is Parent =>
  typeof node.children !== "undefined" && Array.isArray(node.children)

const travarseLine = (valueToNode: (v) => Node, brNode: Node) => {
  return (lines: string[]) =>
    lines
      .map((v, i) => {
        return i == 0 ? [valueToNode(v)] : [brNode, valueToNode(v)]
      })
      .reduce((a, b) => [...a, ...b], []) // TODO: .flat()
}

const nl2brVisitor = (isTargetNode, lineTravarse): Visitor<Node> => (
  node: Node,
  index,
  parent: Node
) => {
  if (!isTargetNode(node, parent)) return
  if (!isParent(parent)) return

  const lines = nodeLines(node)
  if (lines < 2) {
    return
  }
  const children = lineTravarse(lines)
  const newChildren = injectChild(parent, children, index)
  parent.children = newChildren
}

const remarkLineTraverse = travarseLine(v => ({ type: "text", value: v }), {
  type: "break"
})

const isValidRemarkNode = (node: Node, parent: Node) => {
  return node.type === "text"
}

// remark

export const nl2brRemark = () => {
  const visitor = nl2brVisitor(isValidRemarkNode, remarkLineTraverse)
  const transformer = tree => {
    visit(tree, visitor)
    return tree
  }
  return transformer
}

// rehype
const rehypeLineTraverse = travarseLine(v => ({ type: "text", value: v }), {
  type: "element",
  tagName: "br"
})

const isValidRehypeNode = (node: Node, parent: Node) => {
  return node.type === "text" && parent.tagName === "p"
}

export const nl2brRehype = () => {
  const visitor = nl2brVisitor(isValidRehypeNode, rehypeLineTraverse)

  const transformer = tree => {
    visit(tree, visitor)
    return tree
  }

  return transformer
}
