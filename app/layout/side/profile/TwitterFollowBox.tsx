import React from "react"
import styled from "styled-components"
import { TwitterWidgetScript } from "../../../page/article/ArticleFooter"

export const TwiContainer = styled.div`
  padding-top: 0.5em;
  height: 2em;
  overflow: hidden;
`

export const TwitterFollowButton = () => (
  <a
    href="https://twitter.com/terrierscript?ref_src=twsrc%5Etfw"
    className="twitter-follow-button"
    data-show-count="false"
  >
    {/* Follow @terrierscript */}
  </a>
)

export const TwitterFollowBox = () => {
  return (
    <TwiContainer>
      <TwitterWidgetScript />
      <TwitterFollowButton />
    </TwiContainer>
  )
}

// for lazy
export default TwitterFollowBox
