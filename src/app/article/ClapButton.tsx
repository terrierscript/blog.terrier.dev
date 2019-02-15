import React, { useCallback, useState, useRef } from "react"
import styled from "styled-components"
import { Subject, queueScheduler } from "rxjs"

const PositionFixed = styled.div`
  position: fixed;
  left: 50px;
  bottom: 50px;
`
const Button = styled.div`
  border: #e2468a;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  line-height: 2em;
  font-size: 2em;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
`

const url = "http://localhost:9000/clap"

const useClapCallback = (title, id) => {
  return useCallback(
    () => {
      return fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, title })
      })
    },
    [title, id]
  )
}
export const ClapButton = ({ title, id, children }) => {
  const onClick = useClapCallback(title, id)
  return (
    <PositionFixed>
      <Button onClick={onClick}>{children}</Button>
    </PositionFixed>
  )
}
