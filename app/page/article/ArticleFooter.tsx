import React, { useState, useRef, FC } from "react"
import styled from "@emotion/styled"
import { THIN_TEXT_COLOR } from "../../layout/global/colors"
import { ClapButton, HeartButton } from "../../archived/clap/ClapButton"
import { FaRegHeart } from "react-icons/fa"
const Container = styled.div`
  display: flex;
`

const Item = styled.div`
  padding-left: 0.5em;
  line-height: 1em;
  font-size: 1em;
`

const getShareUrl = fileAbsolutePath => {
  if (typeof location === "undefined") {
    const filename = getFilename(fileAbsolutePath).replace(/.md/, "")
    return `https://terrier.dev/blog/${filename}`
  }
  return location.origin + location.pathname
}
// TODO: SSR
const TweetButtons = ({ title, fileAbsolutePath }) => {
  const url = getShareUrl(fileAbsolutePath)
  return (
    <a data-text={title} className="twitter-share-button" href={url}>
      Tweet
    </a>
  )
}

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

const getFilename = fileAbsolutePath => {
  const filename = fileAbsolutePath.split("/").pop()
  const year = filename.substr(0, 4) // TODO: ちょっと無理やりになってる
  return `${year}/${filename}`
}

const ModifyLink = styled.a`
  font-size: 0.8em;
  color: ${THIN_TEXT_COLOR};
`

const Modify: FC<{ fileAbsolutePath: string }> = ({ fileAbsolutePath }) => {
  if (!fileAbsolutePath) {
    return null
  }
  const repo = "terrierscript/terrier.dev"

  const directory = "contents/pages/blog/"

  const filename = getFilename(fileAbsolutePath)
  const url = `https://github.com/${repo}/edit/master/${directory}/${filename}`

  return <ModifyLink href={url}>Edit on Github</ModifyLink>
}

export const ArticleFooter: FC<{ title: string; fileAbsolutePath: string }> = ({
  title,
  fileAbsolutePath
}) => {
  return (
    <>
      <HeartButton title={title} />
      <TwitterWidgetScript />
      <Container>
        <Item>
          <Modify fileAbsolutePath={fileAbsolutePath} />
        </Item>
        <Item>|</Item>
        <Item>
          <TweetButtons title={title} fileAbsolutePath={fileAbsolutePath} />
        </Item>
        {/* <Item>
          <TwitterFollowButton />
        </Item> */}
      </Container>
    </>
  )
}
