import React from "react"
import { Avater } from "../Avater"
import { Links } from "./Link"
import { SideBox } from "./SideBox"

export const SideProfile = () => {
  return (
    <SideBox>
      <Avater />
      <div>Author: @terrierscript</div>
      <Links />
    </SideBox>
  )
}
