import React, { useState, useRef } from "react"
import styled from "@emotion/styled"
import { THIN_TEXT_COLOR } from "../../layout/global/colors"
import { ClapButton, HeartButton } from "../../archived/clap/ClapButton"
import { FaRegHeart } from "react-icons/fa"
import { Text, SimpleGrid, Box, Flex, Grid, Tooltip } from "@chakra-ui/core"
import { TweetButtons } from "./TwitterButton"

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

export const getFilename = fileAbsolutePath => {
  const filename = fileAbsolutePath.split("/").pop()
  const year = filename.substr(0, 4) // TODO: ちょっと無理やりになってる
  return `${year}/${filename}`
}

const ModifyLink = styled.a`
  font-size: 0.8em;
  color: ${THIN_TEXT_COLOR};
`

const Modify = ({ fileAbsolutePath }) => {
  if (!fileAbsolutePath) {
    return null
  }
  const repo = "terrierscript/terrier.dev"

  const directory = "contents/pages/blog/"
  const filename = getFilename(fileAbsolutePath)
  const url = `https://github.com/${repo}/edit/master/${directory}/${filename}`

  return <ModifyLink href={url}>Edit on Github</ModifyLink>
}

const StickyBottom = styled(Box)`
  position: sticky;
  bottom: 0;
  background: white;
  /* margin-top: 1em; */
  border-top: 2px solid rgba(0%, 0%, 0%, 20%);
`

export const ArticleFooter = ({ title, fileAbsolutePath }) => {
  return (
    <>
      {/* <TwitterWidgetScript /> */}
      <StickyBottom>
        <Grid
          autoFlow="column"
          gridGap="3em"
          padding="1em"
          templateColumns="min-content min-content 1fr"
        >
          <Box>
            <Tooltip
              aria-label="Like"
              label="役に立ったら押して下さい。今後の参考になります"
            >
              <Box>
                <HeartButton title={title} />
              </Box>
            </Tooltip>
          </Box>
          <Box cursor="pointer" paddingTop="1px">
            <Tooltip aria-label="Tweet" label="Share on Twitter">
              <Box>
                <TweetButtons
                  title={title}
                  fileAbsolutePath={fileAbsolutePath}
                />
              </Box>
            </Tooltip>
          </Box>
          <Box justifySelf="end">
            <Modify fileAbsolutePath={fileAbsolutePath} />
          </Box>
        </Grid>
      </StickyBottom>
    </>
  )
}
