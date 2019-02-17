import React, { useCallback, useState, useEffect, createContext, useContext } from "react"
import { useTransition, animated} from "react-spring"
import styled from "styled-components"

const Anim = styled(animated.div)`
  position: absolute;
  opacity: 0;
`

const AnimationContext = createContext({
  animations: [],
  addAnimation: () => {},
  completeAnimation: (i) => {}
})

export const FadeAnimation = ({children}) => {
  const { animations, completeAnimation } = useAnimationContext()
  const [_, set] = useState(false)
  const transitions = useTransition(animations, i => i, {
    from: { opacity: 0, transform: "translateY(-50px)"},
    enter: [
      { opacity: 1, transform: "translateY(-180px)"},
      { opacity: 0, transform: "translateY(-180px)"},
    ],
    leave:  { opacity: 0, transform: "translateY(-180px)"},
    onRest: (key) => {
      completeAnimation(key)
      set(false)
    }
  })
  useEffect( () => {
    console.log("SET")
    set(true)
  }, [])
  return transitions.map(({ item, key, props }) => {
    return item && <Anim style={props} key={key}>{children}</Anim>
  })
}

export const useAnimationContext = () => {
  return useContext(AnimationContext)
}

export const useAnimationState = () => {
  const [animations, setAnimations] = useState([])
  const addAnimation = useCallback( () => {
    const key = Math.random().toString() // ホントはuuidとか使うべき
    setAnimations( (arr) => [...arr, key])
  },[])
  const completeAnimation = (complete) => {
    setAnimations( (arr) => arr.filter( key => key !== complete))
  }

  return { animations, addAnimation, completeAnimation }
}

export const FadeAnimationProvider = ({children}) => {
  const value =  useAnimationState()
  return <AnimationContext.Provider value={value}>
    {children}
  </AnimationContext.Provider>
}