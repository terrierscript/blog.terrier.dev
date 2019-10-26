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

const nodeLines = node => node.value.trim().split("\n")
const isParent = (node: Node): node is Parent =>
  typeof node.children !== "undefined" && Array.isArray(node.children)

type TravarseLineFunction = (lines: string[]) => Node[]
export const travarseLineGenerator = (
  valueToNode: (v) => Node,
  brNode: Node
): TravarseLineFunction => {
  return lines =>
    lines
      .map((v, i) => {
        return i == 0 ? [valueToNode(v)] : [brNode, valueToNode(v)]
      })
      .reduce((a, b) => [...a, ...b], []) // TODO: .flat()
}

export const nl2brVisitor = (isTargetNode, lineTravarse): Visitor<Node> => (
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
