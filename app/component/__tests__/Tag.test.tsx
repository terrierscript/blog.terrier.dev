import React from "react"
import renderer from "react-test-renderer"
import { AutoLinkTags } from "../Tag"
import { ThemeProvider } from "@chakra-ui/core"

test("<Tag>", () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <AutoLinkTags tags={["foo"]} />
      </ThemeProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
