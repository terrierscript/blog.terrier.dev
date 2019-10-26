import React from "react"
import renderer from "react-test-renderer"
import { RawMarkdown, CodeBlock } from "../Markdown"
import { removeIndent } from "./Markdown.test"
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
  const code = ["```tsx", codeSample, "“```"].join("\n")
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
      .create(<CodeBlock value={codeSample} language={"tsx"} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
