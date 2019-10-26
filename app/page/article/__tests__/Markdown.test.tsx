import React from "react"
import renderer from "react-test-renderer"
import { RawMarkdown } from "../Markdown"

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
test("Sample block", () => {
  const codeSample = `
    const foo = hoge
    const onClick = (e: Event) => {
      dispatch(e ** 2)
    }
    <SomeComponent>
      hello {foo}
    </SomeComponent>
  `
  const code = ["```tsx", codeSample, "“```"]
  const sampleMarkdown = removeIndent(`
    This is code
    ${code}
  `)
  const tree = renderer
    .create(<RawMarkdown markdown={sampleMarkdown} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
