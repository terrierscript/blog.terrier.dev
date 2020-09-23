---
templateKey: blog-post
title: linear-gradientを利用してQRCodeを表示する
date: '2019-09-18T12:12:54.461Z'
tags:
  - css
  - javascript
  - styled-components
published: true
---

Linear Gradientだけでドット絵が作れることがわかったので作った
https://linear-gradient-qr-code.netlify.com/

https://github.com/terrierscript/example-linear-gradient-qr-code

## 解説

### 基本

CSSのGradientには、同色を途中で切り替えると二色を切り分けるという可愛い特徴がある

```jsx
export const Dotted1 = styled.div`
  background: linear-gradient(red, red 0 10%, blue 10% 40%, green 40% 100%);
  height: 2em;
`
```

<img width="490" alt="1" src="https://user-images.githubusercontent.com/13282103/65520738-0c9d5e00-df23-11e9-8e9f-e69839bf078e.png">


例えばこれを90degにすれば

```jsx
export const Dotted = styled.div`
  background: linear-gradient(90deg, red, red 0 10%, blue 10% 40%, green 40% 100%);
  height: 2em;
`
```

<img width="490" alt="2" src="https://user-images.githubusercontent.com/13282103/65520736-0c9d5e00-df23-11e9-8bbd-b4d6f3c34ee0.png">

横並びになる

### 白黒を横に並べる

で、これを白黒で並べればpixelになるので、これをstyled-componentsで行うとこんな感じになる

```jsx
const toColor = (v) => (v ? "#000" : "#fff")

//  #000 10%, #fff 10% 20% みたいな列を作る
const generateGradient = (data) => {
  const division = 100 / data.length
  return data
    .reduce((acc, d, i) => {
      const before = i !== 0 ? `${toColor(data[i - 1])} ${division * i}` : null
      const current = `${toColor(d)} ${division * i}`
      return [...acc, before, current]
    }, [])
    .filter((i) => !!i)
    .join(",")
}

export const Stripe = styled.div.attrs(({ data }) => {
  const linearGradient = generateGradient(data)
  return {
    width: `${data.length / 2}em`,
    style: { background: `linear-gradient(90deg, ${linearGradient})` }
  }
})`
  width: ${({ width }) => width};
  height: 0.5em;
`

```

これで

```jsx
export const StripeSample = () => <Stripe data={[0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1]}/>
```

<img width="222" alt="3" src="https://user-images.githubusercontent.com/13282103/65520735-0c04c780-df23-11e9-883b-cd7327784d2c.png">

こんな感じに描画出来る


### 更に縦にも並べる。

CSSは複数のbackgroundを与えられる[multiple background](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)の仕組みがあるので、これを使ってちょっとずつ並べていくことで縦に伸ばしていく


```jsx
export const generateQrCss = (code) => {
  const rowDivision = 100 / code.length
  const backgroundImage = code.map((data) => {
    const linearGradient = generateGradient(data)
    return `linear-gradient(90deg, ${linearGradient})`
  })

  const backgroundSize = code.map(
    (_, i) => `auto ${round(rowDivision * (i + 1))}`
  )
  return {
    backgroundImage,
    backgroundSize
  }
}

export const Code = styled.div.attrs(({ code }) => {
  return {
    width: `${code.length / 4}em`,
    height: `${code.length / 4}em`
  }
})`
  ${({ code }) => generateQrCss(code)};
  background-repeat: no-repeat;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`
```

ここでbackground-imageの他にbackground-sizeも指定することで、後ろに描画される画像をちょっとずつ大きくする手法で縦方向に描画していっている。

background-sizeの代わりにbackground-positionでも良いが、空白が生まれるケースがあるので、background-sizeの方がおすすめ出来る

```tsx
export const QrSample = () => <Code code={[
  [0,0,0,1],
  [0,0,1,1],
  [0,1,1,0],
  [1,1,0,0]
]}/>
```

<img width="48" alt="4" src="https://user-images.githubusercontent.com/13282103/65520734-0c04c780-df23-11e9-8bd7-e0d4361dc042.png">

するとこんな感じでドット絵になる

## できあがり

あとはドットなら何でも描画出来る。
今回は手頃なところでQRコードを今回は使った。
QRコードの計算そのものは[node-qrcode](https://www.npmjs.com/package/qrcode)を利用している。

なお、生成されるコードは長くなるし割と複雑出し、容量の少なさを考えればbase64だしスケールしたときの綺麗さをみればCSS GridやSVCでやったほうが良く、ブラウザ互換性で考えても全く優位性は無い。