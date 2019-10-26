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

test("nl2br-link", () => {
  const sampleMarkdown = removeIndent(`
  http://example.com
  bbb
  `)
  const tree = renderer
    .create(<RawMarkdown markdown={sampleMarkdown} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
test("nl2br-link-not-break", () => {
  const sampleMarkdown =
    "今回は[`react-markdown`](https://github.com/rexxars/react-markdown#parsing-html)と[`react-sytnax-highlight`](https://github.com/conorhastings/react-syntax-highlighter)"
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
