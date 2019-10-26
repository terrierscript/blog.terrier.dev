import visit from "unist-util-visit"
import { Node } from "unist"
import { nl2brVisitor, travarseLineGenerator } from "./nl2brCore"

// remark
const remarkLineTraverse = travarseLineGenerator(
  v => ({ type: "text", value: v }),
  {
    type: "break"
  }
)

const isValidRemarkNode = (node: Node, parent: Node) => {
  return node.type === "text"
}

export const nl2brRemark = () => {
  const visitor = nl2brVisitor(isValidRemarkNode, remarkLineTraverse)
  const transformer = tree => {
    visit(tree, visitor)
    return tree
  }
  return transformer
}
