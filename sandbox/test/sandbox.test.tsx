import React from "react"
import renderer from "react-test-renderer"
import { App } from "../index"

test("sandbox", () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
