import React from "react"
import renderer from "react-test-renderer"
import { Tag } from "../Tag"

test("<Tag>", () => {
  const tree = renderer.create(<Tag tag={"foo"} />).toJSON()
  expect(tree).toMatchSnapshot()
})
