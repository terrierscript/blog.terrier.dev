---
templateKey: blog-post
title: Clipboard.jsをReact Hooksで使うやつ
date: 2019-02-23T10:30:38.016Z
tags:
  - React
  - JavaScript
---
[Clipboard.js](https://clipboardjs.com/)、便利だけどこれもまたrefsを利用するので色々厄介だったがHooksでいい感じにできる。

[React Clipboard](https://github.com/nihey/react-clipboard.js)などは比較的安定している方ではありつつ、やっぱり自前でやれるならやれたほうが良い。（内部を見ると結構むちゃしているなーという感じはする）

あとcopiedでちょろっとアニメーションするようにしている

```jsx
import React, { useRef, useLayoutEffect, useCallback, useState } from "react"
import { render } from "react-dom"
import Clipboard from "clipboard"

// targetを指定する時
const useClipboard = (onCopySuccess) => {
  const buttonRef = useRef(null)
  const targetRef = useRef(null)

  useLayoutEffect(() => {
    const cb = new Clipboard(buttonRef.current, {
      target: () => targetRef.current
    })
    cb.on("success", (e) => {
      onCopySuccess()
    })
    // cb.on("error", (e) => {
    // })
    return () => {
      cb.destroy()
    }
  }, [])
  return { buttonRef, targetRef }
}

export const CopyWithTarget = () => {
  const [copyed, setCopied] = useState(false)
  const onCopySuccess = useCallback(() => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }, [])
  const { buttonRef, targetRef } = useClipboard(onCopySuccess)
  return (
    <div>
      <textarea ref={targetRef} defaultValue={Math.random().toString()} />
      <button ref={buttonRef}>Copy</button>
      {copyed && <span>Copied!</span>}
    </div>
  )
}

// textを固定でコピーすれば良い時
const useClipboardText = (onCopySuccess) => {
  const buttonRef = useRef(null)

  useLayoutEffect(() => {
    const cb = new Clipboard(buttonRef.current, {
      text: () => "This is copied text"
    })
    cb.on("success", (e) => {
      onCopySuccess()
    })
    cb.on("error", (e) => {
      console.error(e)
    })
    return () => {
      cb.destroy()
    }
  }, [])
  return { buttonRef }
}

export const CopyWithText = () => {
  const [copyed, setCopied] = useState(false)
  const onCopySuccess = useCallback(() => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }, [])
  const { buttonRef } = useClipboardText(onCopySuccess)
  return (
    <div>
      <span>Copy text</span>
      <button ref={buttonRef}>Copy</button>
      {copyed && <span>Copied!</span>}
    </div>
  )
}

```
