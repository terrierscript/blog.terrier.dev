import React, { useCallback } from "react"
import { useTransition, animated} from "react-spring"
import styled from "styled-components"

const Anim = styled(animated.div)`
  position: absolute;
  opacity: 0;
`


const Fader = ({onRest}) => {
  const props = useTransition({
    from: { opacity: 0, transform: "translateY(0px)"},
    enter: { opacity: 1, transform: "translateY(-10px)"},
    leave:  { opacity: 0, transform: "translateY(-100px)"},
    delay: 0,
    onRest: () => {
      onRest()
    }
  })
  return <Anim style={props}>👏</Anim>
}

export const Faders = ({faderRef, faders, completeFader}) => {
  console.log(faders)
  return faders.map( ({finished}, i) => {
    if(finished){
      return
    }
    return <div key={i}>
      <Fader key={i} onRest={() => {
        completeFader(i)
        // faderRef.current[i] = { finished: true}
      }} />
    </div>
  })
}