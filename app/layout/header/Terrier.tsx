import React from "react"
// @ts-ignore
import pretty from "./pretty.jpg"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import { RadiusImg } from "../../component/Avater"

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Img = styled(RadiusImg)`
  vertical-align: middle;
  animation: ${rotate360} 6s linear infinite;
  animation-play-state: paused;
  :hover {
    animation-play-state: running;
  }
`

const Dog = ({ size }) => <Img src={pretty} size={size} alt="🐶" />

const Container = styled.div`
  display: inline-block;
  margin-right: 0.2em;
`
export const Terrier = props => {
  return (
    <Container>
      <Dog {...props} />
    </Container>
  )
}
