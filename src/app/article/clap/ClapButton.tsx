import React, { useRef, useState, useCallback } from "react"
import styled from "styled-components"
import posed from "react-pose"
import { useEventCallback } from "rxjs-hooks"
import { bufferTime, tap, filter } from "rxjs/operators"
import { merge } from "rxjs"
import { useClapCallback } from "./hooks";
import { Faders } from "./Animate";

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
    scale: 0.8
  },
  hover: {
    scale: 1.2
  }
})

const useFadeAnimator = () => {
  const [faders, setFaders] = useState([])

  const addFader = useCallback( () => {
    setFaders(arr => [...arr, {finished: false}])
  }, [setFaders])
  const completeFader = useCallback( (i) => {
    setFaders( arr => {
      const newArr = arr.concat()
      newArr[i] = {finished: true}
      return newArr
    })
  }, [setFaders])
  return {faders, addFader, completeFader}
}
export const ClapButton = ({ title, id, children }) => {
  const onClap = useClapCallback(title, id)
  const animateRef = useRef([])
  const {faders, addFader, completeFader} = useFadeAnimator()
  const [onClick] = useEventCallback(event$ =>
    merge(
      event$.pipe(
        tap( () => {
          console.log("tap")
          addFader()
          // animateRef.current.push({
          //   finished: false
          // })
        })
      ),
      event$.pipe(
        bufferTime(3000),
        filter(events => events.length > 0),
        tap(events => {
          const count = events.length
          console.log(count)
          onClap(count)
        })
      )
    )
  )  
  return (
    <PositionFixed>
      <Animation>
        <Button onClick={onClick}>{children}</Button>
      </Animation>
      <Faders faderRef={animateRef} faders={faders} completeFader={completeFader}/>
    </PositionFixed>
  )
}
