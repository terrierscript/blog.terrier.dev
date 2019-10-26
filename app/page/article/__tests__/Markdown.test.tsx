import React from "react"
import renderer from "react-test-renderer"
import { RawMarkdown, CodeBlock } from "../Markdown"

const removeIndent = str => str.replace(/\n\s+/gm, "\n")

test("Sample block", () => {
  const sampleMarkdown = removeIndent(`
    # Foo
    ## Baz
    ### bar
    foo baz bar
    - a
    - b
    - c
  `)
  const tree = renderer
    .create(<RawMarkdown markdown={sampleMarkdown} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

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
