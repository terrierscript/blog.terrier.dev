---
templateKey: blog-post
title: React Hooksを利用してCSS Grid上の要素をアニメーションする
date: '2019-11-04T11:49:10.698Z'
tags:
  - reacthooks
  - css-grid
  - react
published: false
---

CSS Gridは本来`grid-row`や`grid-columns`はアニメーション対象ではなく、Grid上を移動するようなものをそのまま作るのは難しい。

今回計算用の疑似要素を配置することでアニメーションさせる方法を見つけたのでメモする。


今回は[UpLabsのSmoothBottomBar](https://www.uplabs.com/posts/smoothbottombar-android-library)を再現してみた。


## 作り方
### 1. まずは基礎部分用意

<img width="585"  src="https://user-images.githubusercontent.com/13282103/68120744-7c066480-ff49-11e9-8c00-f32af06fc19e.png">

https://stackblitz.com/edit/react-ts-animation-grid-1?ctl=1&embed=1&file=index.tsx

最初は素の感じでGridを作る。Iconの利用だけ配列を使っているところだけ若干トリッキーかもしれない

```jsx
import { FiUser, FiHome, FiInbox } from "react-icons/fi"

export const Menu1 = () => {
  const icons = [FiHome, FiInbox, FiUser]

  return (
    <Container>
      <MenuGrid>
        {icons.map((Icon) => (
          <IconWrap>
            <Icon />
          </IconWrap>
        ))}
      </MenuGrid>
    </Container>
  )
}
```


### 2. 計算用のCellを追加

![2](https://user-images.githubusercontent.com/13282103/68121380-f97ea480-ff4a-11e9-9e4c-f1516468eea2.gif)

https://stackblitz.com/edit/react-ts-animation-grid-2?ctl=1&embed=1&file=index.tsx

この辺からhooksが出てくる。

まず先程のiconをGridのCellとして配置するように書き換える。

```tsx

const Item = styled.div`
  ${({ x }) => css`
    grid-column: ${x};
  `}
  grid-row: 1;
`

export const Menu2 = () => {
  const [gridPosition, setGridPosition] = useState<number>(1)

  // ...
        {icons.map((Icon, i) => (
          <Item x={i + 1} onMouseOver={(e) => setGridPosition(i + 1)}>
            <IconWrap>
              <Icon />
            </IconWrap>
          </Item>
        ))}
  // ...
}
```

そして計算用のGridCellも配置する。今回は`PositionCalcurator`と名付けた。

```tsx

// これもItemを継承しているので、colとrowが設定される
const PositionCalcurator = styled(Item)`
  border: 1px solid red; // debug用のborder
`

export const Menu2 = () => {
  const [gridPosition, setGridPosition] = useState<number>(1)
  const calcuratorRef = useRef<HTMLElement>(null)

  const icons = [FiHome, FiInbox, FiUser]

  return (
    <Container>
      {/* ... */}
        <PositionCalcurator ref={calcuratorRef} x={gridPosition} />
      {/* ... */}
    </Container>
  )
}
```

ここまで来るとこんな具合に動く様子が確認できる

### 3. カーソル部分を追加

![3](https://user-images.githubusercontent.com/13282103/68121379-f97ea480-ff4a-11e9-894d-24bb18e308c1.gif)

https://stackblitz.com/edit/react-ts-animation-grid-3?ctl=1&embed=1&file=index.tsx

2で計算用のrefを配置した。今度は`useEffect`で計算用のcellの矩形を取得する。
この結果は`cursorRect`と名付けた`state`へ格納する。
また、effectの`dependency`として`gridPosition`を利用している（が、もしかしたらこれは`eslint-plugin-react-hooks`に怒られるかもしれない）


```jsx
export const Menu3 = () => {
  const [gridPosition, setGridPosition] = useState<number>(1)
  const [cursorRect, setCursor] = useState<null | Rect>(null) // append
  const calcuratorRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!calcuratorRef.current) return
    const top = calcuratorRef.current.offsetTop
    const left = calcuratorRef.current.offsetLeft
    const width = calcuratorRef.current.clientWidth
    const height = calcuratorRef.current.clientHeight
    const cursor = { top, left, width, height }
    setCursor(cursor)
  }, [gridPosition])
  
```

あとはこの矩形を`Cursor`と名付けたコンポーネントに与えて描画させる。
`position:absolute;`にしたGridから独立した要素なのでアニメーションができる

```jsx

const Cursor = styled.div`
  position: absolute;
  transition: 0.4s;
  transition-timing-function: ease-in-out;
  background: green;
  opacity: 0.5;
  ${({ top, left, width, height }) => css`
    top: ${top}px;
    left: ${left}px;
    width: ${width}px;
    height: ${height}px;
  `};
`
export const Menu3 = () => {
  const [cursorRect, setCursor] = useState<null | Rect>(null) // append
  
  // ...
  return (
    <Container>
      {/* 先頭に置く! */}
      {cursorRect && <Cursor {...cursorRect} />}

```
### 4. アイコンに文字を出す

![4](https://user-images.githubusercontent.com/13282103/68121378-f97ea480-ff4a-11e9-9339-792b24d367d5.gif)

https://stackblitz.com/edit/react-ts-animation-grid-4?ctl=1&embed=1&file=index.tsx

ほぼこれで完成に近いが、あとは本家に習って文字を出すのも追加してみる。

こんな具合でanimationさせる要素を追加するだけになる。
hoverの疑似クラスだけだとカーソルと合わなくなるため、`active`というpropsを利用することにした。


```jsx
export const Menu4 = () => {
  const [gridPosition, setGridPosition] = useState<number>(1)
  const isActive = useCallback((x) => gridPosition === x, [gridPosition])
  const icons = [["Home", FiHome], ["Inbox", FiInbox], ["Profile", FiUser]]
  return (
    {/* ... */}
    {icons.map(([text, Icon], i) => (
      <Item x={i + 1} onMouseOver={(e) => setGridPosition(i + 1)}>
        <AnimateIcon
          x={i + 1}
          onMouseOver={(e) => setGridPosition(i + 1)}
          text={text}
          active={isActive(i + 1)}
        >
          <Icon />
        </AnimateIcon>
      </Item>
    ))}
  )
```

`AnimateIcon`周りはこんな感じ

```jsx
const AnimateIconInner = styled(IconWrap)`
  transition: 0.5s;
  ::after {
    font-size: 0.6em;
    transition: 0.5s;

    overflow: hidden;
    content: attr(data-text);
    ${({ active }) => css`
      width: ${active ? "100%" : "0px"};
    `}
  }
`

const AnimationContainer = styled.div`
  width: auto;
`

const AnimateIcon = ({ x, onMouseOver, active, children, text }) => {
  return (
    <Item x={x} onMouseOver={onMouseOver}>
      <AnimateIconInner active={active} data-text={text}>
        <AnimationContainer>{children}</AnimationContainer>
      </AnimateIconInner>
    </Item>
  )
}
```


### 5. 諸々調整する

![5](https://user-images.githubusercontent.com/13282103/68121377-f8e60e00-ff4a-11e9-966f-2f8985f6a0d8.gif)

あとは色々とパラメータを調整したバージョンが下記になる。

https://stackblitz.com/edit/react-ts-animation-grid-final?ctl=1&embed=1&file=index.tsx


## まとめ
CSS Gridのアニメーションについて考察してみた。やはりどうしてもhooksに多くの部分を頼ってしまうことにはなるが、Flexなどでやるよりは等間隔であることを保ちやすかったり、素のjavascriptですべて計算するよりはメリットが大きそうな感覚がある