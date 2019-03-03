import React from "react"
// @ts-ignore
import pretty from "./pretty.jpg"
import styled, { keyframes } from "styled-components"
import { RadiusImg } from "../Avater"

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Img = styled(RadiusImg)`
  animation: ${rotate360} 8s linear infinite;
  :hover {
    animation-duration: 0.1s;
  }
`

const Dog = ({ size }) => <Img src={pretty} size={size} />

export const Terrier = props => {
  return <Dog {...props} />
}
