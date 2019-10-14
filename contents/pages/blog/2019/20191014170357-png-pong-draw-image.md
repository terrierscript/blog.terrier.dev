---
templateKey: blog-post
title: png-pongでReact HooksからPNGを直描画
date: '2019-10-14T08:03:57.157Z'
tags: 
  - React Hooks
  - React
  - png
published: true
---

[png-pong](https://github.com/gdnmobilelab/png-pong)でReact Hooksを通して画像を描画出来たメモ。

デモ：

<stackblitz-iframe src="https://stackblitz.com/edit/react-ts-yaiy4a?embed=1&hideExplorer=1">
</stackblitz-iframe>

<!-- <iframe width="100%" height="300px" src="https://stackblitz.com/edit/react-ts-yaiy4a?embed=1&hideExplorer=1"></iframe> -->

こんな感じでeffectを利用しているが、正直別にreactの機能そんなに使ってない。

```jsx
const Img = styled.div<{
  size: number
  bg: string
}>(({ size, bg }) => ({
  width: `${size}px`,
  height: `${size}px`,
  backgroundImage: `url(${bg})`,
  filter: "blur(0.2px)"
}))

const NoiseImage = () => {
  const [bgurl, setBgurl] = useState<string>("")
  const width = 100
  const height = 100

  useEffect(() => {
    const bitmap = noise(width, height, 5)
    setBgurl(bitsToStr(bitmap))
  }, [])
  return <Img size={100} bg={bgurl}></Img>
}
```

生成したビットマップを下記のように`createFromRGBAArray`で渡してる。
その結果をbase64のURLとして保持し、あとはそのまま`background-image`としてstyled-componentsに流し込んでる
このへんは完全にpng-pongのおかげだ。

```ts
const bitsToStr = (bits: number[][][]) => {
  const width = bits[0].length
  const height = bits.length
  const bit = new Uint8ClampedArray(bits.flat(2))
  const buffer = createFromRGBAArray(width, height, bit)
  const b642 = base64.fromByteArray(new Uint8Array(buffer))

  return "data:image/png;base64," + b642
}
```

これだけだと正直Canvasの方が良いが、pngが使えることで`background-clip: text`の背景に使うことなども出来る。

<stackblitz-iframe src="https://stackblitz.com/edit/react-ts-egg6dg?embed=1&file=index.tsx&hideExplorer=1&view=preview">
</stackblitz-iframe>

<!-- <iframe width="100%" height="400px" src="https://stackblitz.com/edit/react-ts-egg6dg?embed=1&file=index.tsx&hideExplorer=1&view=preview"></iframe> -->

今の所Canvasに勝る利点はなさそうではあるが、bitmap部分が複雑でWASMを利用するなどでCanvasよりも素早く描画出来るなどの可能性がありそう