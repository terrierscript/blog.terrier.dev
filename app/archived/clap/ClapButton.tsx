import React, { useRef, useState, useCallback } from "react"
import styled from "@emotion/styled"
import posed from "react-pose"
import { useEventCallback } from "rxjs-hooks"
import { bufferTime, tap, filter } from "rxjs/operators"
import { merge } from "rxjs"
import { useClapCallback } from "./useClapCallback"
import {
  FadeAnimationProvider,
  FadeAnimation,
  useAnimationContext
} from "./Animate"
import { BG_COLOR } from "../../layout/global/colors"
import { FaRegHeart, FaHeart } from "react-icons/fa"

const PositionFixed = styled.div`
  position: fixed;
  left: 20px;
  bottom: 20px;
`

const Clap = styled.div`
  padding: 0;
  margin: 0;
  width: 2em;
  height: 2em;
  line-height: 1.5em;
  font-size: 2em;
  text-align: center;
  vertical-align: middle;
  user-select: none;
`

const Item = styled.div`
  color: #e2468a;
`

const Button = styled(Clap)`
  /* border: #e2468a 2px solid; */
  border-radius: 50%;
  /* background: ${BG_COLOR}; */
  cursor: pointer;
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

const ClapButtonInternal = ({ title, onTap, fadeItem, children }) => {
  const onClap = useClapCallback(title)
  const { addAnimation } = useAnimationContext()
  const [onClick] = useEventCallback<any>(event$ =>
    merge(
      event$.pipe(
        tap(() => {
          if (onTap) {
            onTap()
          }
          addAnimation()
        })
      ),
      event$.pipe(
        bufferTime(5000),
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
      <FadeAnimation>
        <Clap>{fadeItem || children}</Clap>
      </FadeAnimation>
    </PositionFixed>
  )
}

export const ClapButton = (props: any) => {
  console.log(props)
  return (
    <FadeAnimationProvider>
      <ClapButtonInternal {...props} />
    </FadeAnimationProvider>
  )
}

export const HeartButton = props => {
  const [tapped, setTapped] = useState(false)
  return (
    <ClapButton
      onTap={() => {
        setTapped(true)
      }}
      fadeItem={
        <Item>
          <FaHeart />
        </Item>
      }
      title={props.title}
    >
      <Item>{tapped ? <FaHeart /> : <FaRegHeart />}</Item>
    </ClapButton>
  )
}
