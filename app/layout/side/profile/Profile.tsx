import React, { lazy, Suspense } from "react"
import { Avater } from "../../../component/Avater"
import { SideBox, Title } from "../Basics"
import styled from "styled-components"
import { headerFont } from "../../../utils/typography"
import { TwitterFollowBox } from "./TwitterFollowBox"
import { TwitterWidgetScript } from "../../../page/article/ArticleFooter"
// import { TwitterWidgetScript } from "../../../page/article/ArticleFooter"

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

export const SideProfile = () => {
  return (
    <SideBox>
      <Title>Author</Title>
      <Box>
        <Avater />
        <Author />
      </Box>
      <TwitterWidgetScript />

      <TwitterFollowBox />
    </SideBox>
  )
}
