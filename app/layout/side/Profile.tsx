import React from "react"
import { Avater } from "../Avater"
import { SideBox, Title } from "./Basics"
import { Box } from "grommet"

export const SideProfile = () => {
  return (
    <SideBox>
      <Title>Author</Title>
      <Box wrap={false} direction="row" align="center">
        <Box>
          <Avater />
        </Box>
        <Box pad="small">
          <div>
            <a href="https://twitter.com/terrierscript">@terrierscript</a>
          </div>
        </Box>
      </Box>
    </SideBox>
  )
}
