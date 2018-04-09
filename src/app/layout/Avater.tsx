import React from "react"
import styled from "styled-components"

type Props = {
  size: number
}
const SizeImg = styled.img`
  width: ${({ size }: Props) => size}px;
  height: ${({ size }: Props) => size}px;
`
const RadiusImg = styled(SizeImg)`
  border-radius: ${({ size }: Props) => size}px;
`

const Img = styled(RadiusImg)`
  /* outline: 1px solid #e1e1e1; */
  background: white;
  display: inline-block;
  vertical-align: middle;
`

// const Center = styled.div`
//   display: inline-block;
//   margin-right: 0.2em;
// `

const filepath = "90616865/3f0dd48afcf32bb6927654c79cf1c245.png"
const avater = `https://ja.gravatar.com/userimage/${filepath}`

export const Avater = ({ size = 48 }) => <Img src={avater} size={size} />
