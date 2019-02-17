import React, { useCallback } from "react"
import styled from "styled-components"
import posed from "react-pose"
import { useObservable } from "rxjs-hooks"

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

const url =
  process.env.NODE_ENV === "production"
    ? "https://snippet.terrierscript.com/.netlify/functions/clap"
    : "http://localhost:9000/clap"

const useClapCallback = (title, id) => {
  return useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      return
    }
    // @ts-ignore
    if (typeof ga === "function") {
      // ga()
    }
    return fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, title })
    })
  }, [title, id])
}

const Item = posed.div({
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
export const ClapButton = ({ title, id, children }) => {
  const clapCallback = useClapCallback(title, id)
  useObservable
  const onClick = useCallback(() => {
    // clapCallback()
    console.log("clap")
  }, [clapCallback])

  return (
    <PositionFixed>
      <Item>
        <Button onClick={onClick}>{children}</Button>
      </Item>
    </PositionFixed>
  )
}
