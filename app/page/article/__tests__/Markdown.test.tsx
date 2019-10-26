import React from "react"
import renderer from "react-test-renderer"
import { RawMarkdown } from "../Markdown"

export const removeIndent = str => str.trim().replace(/\n\s+/gm, "\n")

export const wrapCode = (codeSample, lang = "") =>
  ["```" + lang, codeSample, "“```"].join("\n")

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
  ${wrapCode(`
  a
  b
  c
  `)}
  `)
  const tree = renderer
    .create(<RawMarkdown markdown={sampleMarkdown} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test("web-component", () => {
  const sampleMarkdown = removeIndent(`
  aaa
  <x-some-item>foo</x-some-item>
  ccc
  `)
  const tree = renderer
    .create(<RawMarkdown markdown={sampleMarkdown} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
