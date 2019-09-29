import React, { useState, useRef } from "react"
import styled, { css } from "styled-components"

const Container = styled.div`
  display: flex;
`

const Item = styled.div`
  padding-left: 0.5em;
  line-height: 1em;
  font-size: 1em;
`

const TweetButtons = () => (
  <a
    className="twitter-share-button"
    href={location.origin + location.pathname}
  >
    {/* Tweet */}
  </a>
)

export const TwitterWidgetScript = children => {
  // const [loaded, setLoaded] = useState() // TODO
  return (
    <>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
      {/* {loaded && children} */}
    </>
  )
}

const Modify = ({ fileAbsolutePath }) => {
  if (!fileAbsolutePath) {
    return null
  }
  const repo = "terrierscript/terrier.dev"

  const directory = "contents/pages/blog/"
  const filename = fileAbsolutePath.split("/").pop()
  const year = filename.substr(0, 4) // TODO: ちょっと無理やりになってる
  const url = `https://github.com/${repo}/edit/master/${directory}/${year}/${filename}`

  return <a href={url}>この記事の修正をする</a>
}

export const ArticleFooter = ({ fileAbsolutePath }) => {
  return (
    <>
      <TwitterWidgetScript />
      <Container>
        <Item>
          <Modify fileAbsolutePath={fileAbsolutePath} />
        </Item>
        <Item>|</Item>
        <Item>
          <TweetButtons />
        </Item>
        {/* <Item>
          <TwitterFollowButton />
        </Item> */}
      </Container>
    </>
  )
}
