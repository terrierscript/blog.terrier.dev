import React, { useCallback, useState, useEffect } from "react"
import { useTransition, animated} from "react-spring"
import styled from "styled-components"

const Anim = styled(animated.div)`
  position: absolute;
  opacity: 0;
`


const Fader = ({onRest}) => {
  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0, transform: "translateY(0px)"},
    enter: { opacity: 1, transform: "translateY(-150px)"},
    leave:  { opacity: 0, transform: "translateY(-150px)"},
    onRest: () => {
      set(false)
      // onRest()
    }
  })
  useEffect( () => {
    console.log("SET")
    set(true)
  }, [])
  return transitions.map(({ item, key, props }) =>
    item && <Anim style={props} key={key}>👏</Anim>
  )
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