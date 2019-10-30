import React from "react"
import renderer from "react-test-renderer"
import { RawMarkdown } from "../Markdown"
import { CodeBlock } from "../CodeBlock"
import { removeIndent, wrapCode } from "./Markdown.test"
import { render } from "@testing-library/react"

// TODO
xdescribe("css-in-js bug", () => {
  // Prismの場合、このコードのハイライトバグる。
  const code = `
  const Item = styled.div\`
    grid-row: ${({ row }) => row};
    grid-columns: ${({ col }) => col};
  \``
  xit("snapshot", () => {
    const tree = renderer
      .create(<CodeBlock value={code} language={"tsx"} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  // it("include functions", () => {
  //   const result = render(<PrismCodeBlock value={code} language={"tsx"} />)
  //   const x = result.getByDisplayValue("${({", {
  //     exact: false
  //   })
  //   console.log(x)
  //   // expect(tree).toMatchSnapshot()
  // })
})
