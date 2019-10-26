import visit from "unist-util-visit"
import { Node } from "unist"
import { nl2brVisitor, travarseLineGenerator } from "./nl2brCore"

const rehypeLineTraverse = travarseLineGenerator(
  v => ({ type: "text", value: v }),
  {
    type: "element",
    tagName: "br"
  }
)

const isValidRehypeNode = (node: Node, parent: Node) => {
  return node.type === "text" && parent.tagName === "p"
}

// rehype
export const nl2brRehype = () => {
  const visitor = nl2brVisitor(isValidRehypeNode, rehypeLineTraverse)
  const transformer = tree => {
    visit(tree, visitor)
    return tree
  }
  return transformer
}
