import React from "react"
import renderer from "react-test-renderer"
import { SandboxApp } from "../SandboxApp"
import { ThemeProvider } from "@chakra-ui/core"
test("sandbox", () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <SandboxApp />
      </ThemeProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
