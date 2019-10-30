import React from "react"
import renderer from "react-test-renderer"
import { RawMarkdown } from "../Markdown"

describe("StackBlitz iframe", () => {
  it("sample", () => {
    const example =
      "https://stackblitz.com/edit/react-ts-egg6dg?embed=1&file=index.tsx&hideExplorer=1&view=preview&ctl=1"
    const tree = renderer.create(<RawMarkdown markdown={example} />).toJSON()
  })
})
