import React from "react"
import renderer from "react-test-renderer"
import { SandboxApp } from "../SandboxApp"

test("sandbox", () => {
  const tree = renderer.create(<SandboxApp />).toJSON()
  expect(tree).toMatchSnapshot()
})
