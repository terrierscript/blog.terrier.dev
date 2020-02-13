import React from "react"
import renderer from "react-test-renderer"
import { AutoLinkTag } from "../Tag"

test("<Tag>", () => {
  const tree = renderer.create(<AutoLinkTag tag={"foo"} />).toJSON()
  expect(tree).toMatchSnapshot()
})
