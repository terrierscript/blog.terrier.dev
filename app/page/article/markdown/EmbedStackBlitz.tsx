import { parse } from "url"
import React from "react"
import styled from "@emotion/styled"
import {
  ARTICLE_BORDER_COLOR,
  THIN_TEXT_COLOR
} from "../../../layout/global/colors"

// const BASE_URL = "https://stackblitz.com/"

const EmbedContainer = styled.div`
  width: 100%;
`
const BorderlessIFrame = styled.iframe`
  width: 100%;
  min-height: 300px;
  border: 1px solid ${ARTICLE_BORDER_COLOR};
`

const HeaderLink = styled.a`
  color: ${THIN_TEXT_COLOR};
`
const HeaderParts = styled.div`
  display: block;
  color: ${THIN_TEXT_COLOR};
  background: ${ARTICLE_BORDER_COLOR};
  padding: 0.1em 1em;
  font-size: 0.8em;
  width: 100%;
`

const sanitizedUrl = uri => {
  const { host, protocol, pathname } = parse(uri)
  return `${protocol}${host}${pathname}`
}

const Embed = ({ href }) => {
  return (
    <EmbedContainer>
      <HeaderParts>
        <HeaderLink href={href}>{sanitizedUrl(href)}</HeaderLink>
      </HeaderParts>
      <BorderlessIFrame src={href}></BorderlessIFrame>
    </EmbedContainer>
  )
}

export const isStackblitzUrl = uri => {
  const { host } = parse(uri)
  if (host === "stackblitz.com") {
    return true
  }
  return false
}

export const StackblitzEmbed = ({ href }) => {
  return <Embed href={href} />
}
