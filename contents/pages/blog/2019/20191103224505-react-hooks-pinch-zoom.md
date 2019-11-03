---
templateKey: blog-post
title: React Hooksでモバイルデバイスのpinch zoomを抑止する
date: '2019-11-03T13:45:05.900Z'
tags:
  - react hooks
  - react
  - javascript
---

久々にpinchを抑制しようとしたら`<meta>`タグの`user-scroll=no`ではダメになってたので覚え書き。

* https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
* https://qiita.com/yukiTTT/items/773356c2483b96c9d4e0
* http://iphone.f-tools.net/html5/Kakudai-Kinsi.html

この辺を参考にしながら、hooksにすると下記のような具合になった。

```js
const useDisablePinchZoomEffect = () => {
  useEffect(() => {
    const disablePinchZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }
    document.addEventListener("touchmove", disablePinchZoom, { passive: false })
    return () => {
      document.removeEventListener("touchmove", disablePinchZoom)
    }
  }, [])
}

```

`document`でなく一部の要素を抑止したいならこんな感じだろう。

```js

const SuspendPinchZoom = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const target = ref.current
    if (!target) return
    const disablePinchZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }
    target.addEventListener("touchmove", disablePinchZoom, { passive: false })
    return () => {
      target.removeEventListener("touchmove", disablePinchZoom)
    }
  }, [])
  return <div ref={ref}>{children}</div>
}
```