---
templateKey: blog-post
title: 内部要素のサイズに合わせてfont-sizeを調整するcomponentをhooksで作る
date: '2019-10-13T13:33:28.451Z'
tags:
  - react hooks
  - react
  - javascript
published: true
---

作ったものメモ。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">なんかiOSの「内容に合わせて横幅フィットさせる」ってこんな感じだったと思う。hooksだとわりとさくっと出来るな（めんどいしあんまり実用性無さそうだけど） <a href="https://t.co/FO5PW95jHk">pic.twitter.com/FO5PW95jHk</a></p>&mdash; terrierscript (@terrierscript) <a href="https://twitter.com/terrierscript/status/1183039483702202368?ref_src=twsrc%5Etfw">October 12, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

ふとiOSで`adjustsFontSizeToFitWidth`という横幅に合わせてフォントサイズが変わるのがあったな、というのを思い出したので再現してみた。

```js
import React, { useState, useRef, useLayoutEffect, useEffect } from "react"
import stringWidth from "string-width"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
`

const AutoSizedButton = ({ text }) => {
  const ref = useRef()
  const [width, setWidth] = useState(0)
  const [fontSize, setFontSize] = useState("auto")
  useEffect(() => {
    const sizePx = (width / stringWidth(text)) * 2
    setFontSize(`${sizePx}px`)
  }, [width, text])

  useLayoutEffect(() => {
    // @ts-ignore
    const obs = new ResizeObserver((e) => setWidth(e[0].contentRect.width))
    obs.observe(ref.current)
    return () => obs.disconnect()

  }, [])
  return (
    <Container ref={ref} fontSize={fontSize}>
      {text}
    </Container>
  )
}
```

[`ResizeObserver`](https://developer.mozilla.org/ja/docs/Web/API/ResizeObserver)を利用している。
まだこれも不安定なツールなので、そこまで実用的なものではない。

フォントサイズの計算として、`string-width`を利用している。昔は`encodeURIComponent`での計算方法などがあったが、今は3byteで判定されるので使えなくなっている。

カスタムhooksとして切り出すならこんな感じだろう
（が、refsを渡すのはいまいちなので切り出しに向いてない）

```js
const useAutoFontSize = (targetRef, text) => {
  const [width, setWidth] = useState(0)
  const [fontSize, setFontSize] = useState("auto")
  useEffect(() => {
    const sizePx = (width / stringWidth(text)) * 2
    setFontSize(`${sizePx}px`)
  }, [width, text])
  
  useLayoutEffect(() => {
    // @ts-ignore
    const obs = new ResizeObserver((e) => setWidth(e[0].contentRect.width))
    obs.observe(targetRef.current)
    return () => obs.disconnect()
  }, [])
  return fontSize
}
```

