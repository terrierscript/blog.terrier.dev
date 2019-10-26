import React from "react"
import renderer from "./node_modules/react-test-renderer"
import { RawMarkdown } from "../../Markdown"
import { PrismCodeBlock } from "../CodeBlock"
import { removeIndent, wrapCode } from "./Markdown.test"

describe("Syntax Highlight", () => {
  const codeSample = `
    const foo = hoge
    const onClick = (e: Event) => {
      dispatch(e ** 2)
    }
    <SomeComponent>
      hello {foo}
    </SomeComponent>
  `
  const code = wrapCode(codeSample, "tsx")
  const sampleMarkdown = removeIndent(`
    This is code
    ${code}
  `)
  it("as Markdown", () => {
    const tree = renderer
      .create(<RawMarkdown markdown={sampleMarkdown} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("as CodeBlock", () => {
    const tree = renderer
      .create(<PrismCodeBlock value={codeSample} language={"tsx"} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
