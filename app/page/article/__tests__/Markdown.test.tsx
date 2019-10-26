import React from "react"
import renderer from "react-test-renderer"
import { RawMarkdown } from "../Markdown"

export const removeIndent = str => str.replace(/\n\s+/gm, "\n")

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
