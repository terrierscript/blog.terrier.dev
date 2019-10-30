---
templateKey: blog-post
title: styled-componentsで複数のpropsを利用したい時にcss helperを使ったいい感じのやり方を考える
date: '2019-10-30T05:59:11.089Z'
tags:
  - styled-components
  - css
  - css-in-js
---
<!-- react-syntax-highglighterがjs + template functionで死んでいる -->
styled-componentsで、複数のpropsを扱いたいことがちょいちょいある。

```js
const Item = styled.div`
  grid-row: ${({ row }) => row};
  grid-columns: ${ ({ col }) => col};
`
```

少量でも`${({}) => ...}`と無駄に記号が多くシンドい。
また、例えば変数を計算したい場合などはこれも面倒になる。

[attrs](https://www.styled-components.com/docs/api#attrs)などもあるが、これもほぼ書き方としては同じような感じになる。

## まとめて記法する

実は下記のような書き方も可能だったりする。これならだいぶ楽なハズだ。

```js
const Item = styled.div`
  ${({ row, col }) => `
    grid-row: ${row};
    grid-columns: ${col};
  `}
`
```

ただし、これだとVS Codeで補完・highlightされないなど地味にしんどい

## CSS helperを利用する。

styled-componentsには[css](https://www.styled-components.com/docs/api#css)というヘルパー関数が存在する。

元来はmixinを処理するものだが、これを利用してみる

```js
const Item = styled.div`
  ${({ row, col }) => css`
    grid-row: ${row};
    grid-columns: ${col};
  `}
`
```

分かりづらいがこんな具合でハイライトされる。

before
<img width="305" alt="before" src="https://user-images.githubusercontent.com/13282103/67833274-8bd81000-fb27-11e9-8f71-f54f73e04b0a.png">

after
<img width="305" alt="after" src="https://user-images.githubusercontent.com/13282103/67833275-8bd81000-fb27-11e9-8171-a57feda3243c.png">
