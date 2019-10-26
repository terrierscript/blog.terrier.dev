import React from "react"
import { Avater } from "../../component/Avater"
import { SideBox, Title } from "./Basics"
import styled from "@emotion/styled"
import { headerFont } from "../../utils/typography"
import { TwitterWidgetScript } from "../../page/article/ArticleFooter"

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-family: ${headerFont};
`

export const Author = () => {
  return (
    <>
      <div>
        <Link href="https://twitter.com/terrierscript">terrierscript</Link>
      </div>
    </>
  )
}

const TwiContainer = styled.div`
  padding-top: 0.5em;
  height: 2em;
  overflow: hidden;
`

const TwitterFollowButton = () => (
  <a
    href="https://twitter.com/terrierscript?ref_src=twsrc%5Etfw"
    className="twitter-follow-button"
    data-show-count="false"
  >
    {/* Follow @terrierscript */}
  </a>
)

const TwitterFollowBox = () => {
  return (
    <TwiContainer>
      <TwitterWidgetScript />
      <TwitterFollowButton />
    </TwiContainer>
  )
}

export const SideProfile = () => {
  return (
    <SideBox>
      <Title>Author</Title>
      <Box>
        <Avater />
        <Author />
      </Box>
      <TwitterFollowBox />
    </SideBox>
  )
}
