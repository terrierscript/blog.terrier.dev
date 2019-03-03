import React from "react"
import { Avater } from "../Avater"
import { SideBox } from "./Basics"
import { Box } from "grommet"

export const SideProfile = () => {
  return (
    <SideBox>
      <Box wrap={false} direction="row" align="center">
        <Box>
          <Avater />
        </Box>
        <Box pad="small">
          <div>Author: @terrierscript</div>
        </Box>
      </Box>
    </SideBox>
  )
}
