import React from "react"
import styled from "styled-components"

type Props = {
  size: number
}
const SizeImg = styled.img`
  width: ${({ size }: Props) => size}px;
  height: ${({ size }: Props) => size}px;
`
export const RadiusImg = styled(SizeImg)`
  border-radius: ${({ size }: Props) => size}px;
`

const Img = styled(RadiusImg)`
  /* border: 1px solid #ccc; */
  background: white;
  vertical-align: middle;
  margin-bottom: 4px;
`

const AvaterContainer = styled.div<any>`
  display: inline-block;
  margin-right: 0.2em;
  width: ${({ size }) => size}px;
`
const avater =
  "https://ja.gravatar.com/userimage/90616865/8a8d3f96f2d0be4c04607273030e1e17.png"

export const Avater = ({ size = 40 }) => (
  <AvaterContainer size={size}>
    <Img src={avater} size={size} alt="icon" />
  </AvaterContainer>
)
