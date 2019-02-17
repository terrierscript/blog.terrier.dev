import React, { useCallback } from "react"
import styled from "styled-components"
import posed from "react-pose"
import { useEventCallback } from "rxjs-hooks"
import { bufferTime, tap, filter } from "rxjs/operators"

const PositionFixed = styled.div`
  position: fixed;
  left: 50px;
  bottom: 50px;
`
const Button = styled.div`
  border: #e2468a 2px solid;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  line-height: 2em;
  font-size: 2em;
  text-align: center;
  background: white;
  vertical-align: middle;
  cursor: pointer;
  transition: 0.3s;
  user-select: none;
`

const Animation = posed.div({
  pressable: true,
  hoverable: true,
  init: {
    scale: 1
  },
  press: {
    scale: 0.3
  },
  hover: {
    scale: 1.2
  }
})

const url =
  process.env.NODE_ENV === "production"
    ? "https://snippet.terrierscript.com/.netlify/functions/clap"
    : "http://localhost:9000/clap"

const useGoogleAnalyticsEvent = (title, id) => {
  // @ts-ignore
  return useCallback(
    count => {
      if (typeof ga === "function") {
        ga("send", {
          hitType: "event",
          eventCategory: "clap",
          eventAction: title,
          eventLabel: count
        })
      }
    },
    [title, id]
  )
}

const useClapCallback = (title, id) => {
  return useCallback(
    count => {
      if (process.env.NODE_ENV !== "production") {
        return
      }
      return fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, title, count })
      })
    },
    [title, id]
  )
}

export const ClapButton = ({ title, id, children }) => {
  const clapCallback = useClapCallback(title, id)
  const gaEvent = useGoogleAnalyticsEvent(title, id)
  const [onClick] = useEventCallback(event$ =>
    event$.pipe(
      bufferTime(3000),
      filter(events => events.length > 0),
      tap(events => {
        const count = events.length
        // console.log(events)
        console.log(count)
        clapCallback(count)
        gaEvent(count)
      })
    )
  )

  return (
    <PositionFixed>
      <Animation>
        <Button onClick={onClick}>{children}</Button>
      </Animation>
    </PositionFixed>
  )
}
