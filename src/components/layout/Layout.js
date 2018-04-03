import React, { SFC } from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import { desktop } from "../lib/media"
import { Meta } from "./Meta"
import { Container } from "./Grid"

export const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Navbar />

      <Container>
        <div>{children()}</div>
      </Container>
    </div>
  )
}
