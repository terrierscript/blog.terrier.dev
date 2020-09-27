---
templateKey: blog-post
title: react-springで拍手ボタンにアニメーションをつけた
date: 2019-02-17T20:45:04.240Z
tags:
  - React Spring
  - Javascript
  - React
---
[拍手ボタン](https://snippet.terrierscript.com/blog/20190216000000-netlify-functions-slack-clap/)をつけたのでアニメーションをつけてみた。

https://mobile.twitter.com/terrierscript/status/1097118187441729536


ボタンそのものはPopmotionで行ったが、ちょっとこの動きをさせるのは厳しそうで[react-spring](https://github.com/react-spring/react-spring)を使った
react-springのサンプルコードはrefsを使っていたりchildren as functionがあったりで色々と複雑でちょっと読み取りづらくこれはこれで苦労したのでメモをまとめておく

# 全体の構造

コードだけだと分かりづらい気がするので、全体のざっくり構造を記述する

* ふわっと浮き上がるものをアニメーションとしたい
* `useState`で一つ一つの浮き上がる要素を擬似的に管理する
    * このStateに対応する要素がDOMとなりアニメーションするイメージ
* 上記AnimationのStateは`Context`で受け渡して、イベントする位置とアニメーションする部分は分離しても使えるようにする
* `useTransition`にアニメーションする要素を渡す
* アニメーション終了の`onRest`でアニメーションを管理対象から消す（DOMとしても消える）

# コード

AnimationとContextとラップする部分をこんな感じで書く。

https://github.com/terrierscript/snippet.terrierscript.com/blob/8ec039bf2a0dda2e81b4dc15e39954de90fadbd8/src/app/article/clap/Animate.tsx#L10-L34 

```tsx
const AnimationContext = createContext({
  animations: [],
  addAnimation: () => {},
  completeAnimation: (i) => {}
})

export const useAnimationContext = () => {
  return useContext(AnimationContext)
}

export const useAnimationState = () => {
  const [animations, setAnimations] = useState([])
  const addAnimation = useCallback( () => {
    // 重複しないユニークキーを生成する。ホントはuuidとか使うべき
    const key = Math.random().toString() 
    setAnimations( (arr) => [...arr, key])
  },[])
  // animation完了時
  const completeAnimation = (complete) => {
    // completeしたものを削除。filter関数だとパフォーマンスは良くないけど気にしない。
    setAnimations( (arr) => arr.filter( key => key !== complete))
  }

  return { animations, addAnimation, completeAnimation }
}
```
そして実際のアニメーション部分はこんな具合にする

https://github.com/terrierscript/snippet.terrierscript.com/blob/8ec039bf2a0dda2e81b4dc15e39954de90fadbd8/src/app/article/clap/Animate.tsx#L36-L56 

```tsx
export const FadeAnimation = ({children}) => {
  const { animations, completeAnimation } = useAnimationContext()
  const [_, set] = useState(false)
  const transitions = useTransition(animations, i => i, {
    from: { opacity: 0, transform: "translateY(-50px) scale(1)"},
    enter: { opacity: 1, transform: "translateY(-180px) scale(1.2)"},
    leave:  { opacity: 0, transform: "translateY(-200px) scale(0.5)"},
    // 完了処理
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
```

アニメーションの利用側はこういう具合にする。

https://github.com/terrierscript/snippet.terrierscript.com/blob/8ec039bf2a0dda2e81b4dc15e39954de90fadbd8/src/app/article/clap/ClapButton.tsx#L46-L84 

```tsx
export const ClapButtonInternal = ({ title, id, children }) => {
  const onClap = useClapCallback(title, id)
  const { addAnimation }= useAnimationContext()
  const [onClick] = useEventCallback(event$ =>
    merge(
      event$.pipe(
        tap( () => {
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
        <Clap>{children}</Clap>
      </FadeAnimation>
    </PositionFixed>
  )
}

export const ClapButton = (props) => {
  return <FadeAnimationProvider>
    <ClapButtonInternal {...props} />
  </FadeAnimationProvider>
  
}
```

Rxでごちゃごちゃしてしまっているが、もしRxがなければこんな事をやっているだけになる

```jsx
export const ClapButtonInternal = ({ title, id, children }) => {
  const { addAnimation }= useAnimationContext()
  return (
    <Animation>
      <Button onClick={() => addAnimation()}>{children}</Button>
    </Animation>
  )
}
```
