import React from "react"
// @ts-ignore
import pretty from "./pretty.jpg"
import styled, { keyframes } from "styled-components"
import { RadiusImg } from "../component/RadiusImg"

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
`

const Dog = ({ size }) => <Img src={pretty} size={size} />

export class Terrier extends React.Component {
  render() {
    return <Dog {...this.props} />
  }
}
