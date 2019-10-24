import React, { useEffect } from "react"
import styled from "styled-components"
import { useExternalFeeds } from "../../../lib/feed/useExternalFeeds"
import { DateTime } from "luxon"

const FeedItem = styled.div`
  /* width: 100%; */
  display: block;
  font-size: 0.8em;
`

const Mark = styled.div<any>`
  display: inline-block;
  font-weight: bold;
  text-align: center;
  padding: 0.2em 0.6em;
  border-radius: 4px;
  min-width: 4em;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${props => props.color || "#fff"};
  margin: 0 0.5em;
  text-decoration: none;
  white-space: nowrap;
  font-size: 0.8em;
`

const Title = styled.span`
  font-weight: bold;
`
const Time = styled.div`
  padding-left: 0.5em;
`
const Link = styled.a`
  display: block;
  color: #333;
  :visited: {
    color: #333:
  }
`

const Feed = ({ title, link, date, media, bgColor, color }) => {
  return (
    <FeedItem>
      <div>
        <Time>{DateTime.fromISO(date.toLocaleString()).toISODate()}</Time>
      </div>
      <Link href={link}>
        <Mark backgroundColor={bgColor} color={color}>
          {media}
        </Mark>
        <Title>{title}</Title>
      </Link>
    </FeedItem>
  )
}

const Items = styled.div`
  display: grid;
  grid-gap: 0.5em;
`

export const Feeds = () => {
  const { updateFeeds, feeds } = useExternalFeeds()
  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    const polyfill = cb => setTimeout(cb, 5000)
    // @ts-ignore
    const raf = window.requestIdleCallback || polyfill
    // const raf = polyfill
    raf(() => {
      updateFeeds()
    })
  }, [])
  if (feeds.length === 0) {
    return <Items>Loading...</Items>
  }
  return (
    <Items>
      {feeds.map((item: any) => (
        <Feed key={item.link} {...item} />
      ))}
    </Items>
  )
}
