import { Visitor } from "unist-util-visit"
import { Node, Parent } from "unist"

// core
const injectChild = (parent: Parent, children: Node[], index) => {
  return [
    ...parent.children.slice(0, index),
    ...children,
    ...parent.children.slice(index + 1)
  ]
}

const isParent = (node: Node): node is Parent =>
  typeof node.children !== "undefined" && Array.isArray(node.children)

type TravarseLineFunction = (lines: string[]) => Node[]

type ValueToNode = (v: string) => Node
const travarseLineGenerator = (
  valueToNode: ValueToNode,
  valueToBreakNode: ValueToNode
): TravarseLineFunction => {
  return lines =>
    lines
      .map((v, i) => {
        return i == 0 ? [valueToNode(v)] : [valueToBreakNode(v), valueToNode(v)]
      })
      .reduce((a, b) => [...a, ...b], []) // TODO: .flat()
}

const nl2brTransformer = (
  isTargetNode: (node: Node, parent: Node) => boolean,
  lineTravarse: TravarseLineFunction
) => {
  const visitor: Visitor<Node> = (node: Node, index, parent: Node) => {
    if (!isTargetNode(node, parent)) return
    if (!isParent(parent)) return
    if (typeof node.value !== "string") return
    const lines = node.value.trim().split("\n")
    if (lines.length < 2) {
      return
    }
    const children = lineTravarse(lines)
    const newChildren = injectChild(parent, children, index)
    parent.children = newChildren
  }

  const transformer = tree => {
    visit(tree, visitor)
    return tree
  }
  return transformer
}

// remark
const remarkLineTraverse = travarseLineGenerator(
  v => ({ type: "text", value: v }),
  v => ({ type: "break" })
)

const isValidRemarkNode = (node: Node, parent: Node) => node.type === "text"

export const nl2brRemark = () =>
  nl2brTransformer(isValidRemarkNode, remarkLineTraverse)

// rehype
const rehypeLineTraverse = travarseLineGenerator(
  v => ({ type: "text", value: v }),
  v => ({ type: "element", tagName: "br" })
)

const isValidRehypeNode = (node: Node, parent: Node) =>
  node.type === "text" && parent.tagName === "p"

export const nl2brRehype = () =>
  nl2brTransformer(isValidRehypeNode, rehypeLineTraverse)
