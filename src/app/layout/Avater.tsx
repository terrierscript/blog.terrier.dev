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
  border: 0 solid #333;
  background: white;
  vertical-align: middle;
`

const Center = styled.div`
  display: inline-block;
  margin-right: 0.2em;
`
const avater =
  "https://ja.gravatar.com/userimage/90616865/3f0dd48afcf32bb6927654c79cf1c245.png"
export const Avater = () => (
  <Center>
    <Img src={avater} size={48} />
  </Center>
)
