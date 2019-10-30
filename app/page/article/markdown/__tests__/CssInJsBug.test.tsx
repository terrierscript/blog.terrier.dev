import React from "react"
import renderer from "react-test-renderer"
import { RawMarkdown } from "../Markdown"
import { PrismCodeBlock } from "../CodeBlock"
import { removeIndent, wrapCode } from "./Markdown.test"

describe("Syntax Highlight", () => {
  it("css-in-js bug", () => {
    const code = `
    const Item = styled.div\`
      grid-row: ${({ row }) => row};
      grid-columns: ${({ col }) => col};
    \``
    const tree = renderer
      .create(<PrismCodeBlock value={code} language={"tsx"} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
