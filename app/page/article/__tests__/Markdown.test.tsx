import React from "react"
import renderer from "react-test-renderer"
import { RawMarkdown } from "../Markdown"

export const removeIndent = str => str.trim().replace(/\n\s+/gm, "\n")

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

test("nl2br", () => {
  const sampleMarkdown = removeIndent(`
  aaa
  bbb
  ccc
  `)
  const tree = renderer
    .create(<RawMarkdown markdown={sampleMarkdown} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
