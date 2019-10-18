---
templateKey: blog-post
title: React HooksからCanvasを通してimg生成する
date: '2019-10-18T13:13:56.708Z'
tags: 
  - Canvas
  - JavaScript
  - React
  - React Hooks
published: true
---

先日[png-pongを使って背景画像](https://terrier.dev/blog/2019/20191014170357-png-pong-draw-image/)を生成したが、よく考えたらcanvasで良かった。

<sb-iframe height="500px">
  https://stackblitz.com/edit/react-ts-x3yyna?ctl=1&embed=1&file=index.tsx
</sb-iframe>


肝になってるのはこのへん。canvasは隠しつつ、imageとして吐き出している。
ただ当然canvasの上限サイズを越えてたりするとimgの変換から切れるので注意が必要

```jsx
const CloakCanvas = styled.canvas`
  display: none;
`

const NoiseCanvas: FC<{ bitmap: number[] }> = ({ bitmap }) => {
  const ref = useRef<HTMLCanvasElement>()
  const [url, setUrl] = useState()
  useLayoutEffect(() => {
    if (ref.current === undefined) {
      return
    }
    const ctx = ref.current.getContext("2d")
    if (ctx === null) {
      return
    }
    const img = ctx.createImageData(100, 100)
    bitmap.forEach((c, i) => {
      img.data[i] = c
    })
    ctx.putImageData(img, 0, 0)
    const imgUrl = ref.current.toDataURL("image/png")
    setUrl(imgUrl)
  }, [bitmap])
  return (
    <div>
      <CloakCanvas ref={ref}></CloakCanvas>
      <img src={url} />
    </div>
  )
}

