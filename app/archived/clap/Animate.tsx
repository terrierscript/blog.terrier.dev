import React, {
  useCallback,
  useState,
  useEffect,
  createContext,
  useContext
} from "react"
import { useTransition, animated } from "react-spring"
import styled from "@emotion/styled"

const Anim = styled(animated.div)`
  position: absolute;
  opacity: 0;
`

const AnimationContext = createContext({
  animations: [],
  addAnimation: () => {},
  completeAnimation: i => {}
})

export const useAnimationContext = () => {
  return useContext(AnimationContext)
}

export const useAnimationState = () => {
  const [animations, setAnimations] = useState([])
  const addAnimation = useCallback(() => {
    // 重複しないユニークキーを生成する。ホントはuuidとか使うべき
    const key = Math.random().toString()
    setAnimations(arr => [...arr, key])
  }, [])
  // animation完了時
  const completeAnimation = complete => {
    // completeしたものを削除。filter関数だとパフォーマンスは良くないけど気にしない。
    setAnimations(arr => arr.filter(key => key !== complete))
  }

  return { animations, addAnimation, completeAnimation }
}

export const FadeAnimation : React.FC<{}> = ({ children }) => {
  const { animations, completeAnimation } = useAnimationContext()
  const [_, set] = useState(false)
  const transitions = useTransition(animations, i => i, {
    from: { opacity: 0, transform: "translateY(-50px) scale(1)" },
    // update: [{ opacity: 1, transform: "translateX(-20px)" }],
    enter: [
      {
        opacity: 1,
        transform: "translateY(-180px) scale(1)"
      }
      // {
      //   opacity: 0,
      //   transform: "translateY(-200px) scale(0)"
      // }
    ],
    trail: 10,
    config: {
      // tension: 500
      // duration: 100
    },
    leave: { opacity: 0, transform: "translateY(-200px) scale(0.5)" },
    // 完了処理
    // @ts-ignore
    onRest: key => {
      completeAnimation(key)
      set(false)
    }
  })
  useEffect(() => {
    set(true)
  }, [])
  return <>{transitions.map(({ item, key, props }) => {
    return (
      item && (
        <Anim style={props} key={key}>
          {children}
        </Anim>
      )
    )
  })}</>
}

export const FadeAnimationProvider = ({ children }) => {
  const value = useAnimationState()
  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  )
}
