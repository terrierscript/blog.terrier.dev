---
templateKey: blog-post
title: GatsbyでデザインSandbox環境を作る時に__PATH_PREFIX__が無いエラーが出た時の対処
date: '2019-02-28T12:19:14.470Z'
tags:
  - Gatsby
  - Parcel
  - JavaScript
  - React
  - Typography.js
---

Storybookやreact-cosmosなどデザインの調整のためのツールは様々あるが、Gatsbyなどwebpackを使ってない環境だと少々面倒だ。

結果としてparcelで軽いsandbox環境を作るのが楽だったりする。

ただそのまま実行するとGatsbyの`<Link>`タグで様々エラーが出て引っかかる

この辺の対処はStorybookの場合を参考にすると良かった

https://www.gatsbyjs.org/docs/visual-testing-with-storybook/#setting-up-your-environment

ざっくりこんな感じでglobalにpolyfillを作ることで回避する。あまりきれいではないけども・・・

```js
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
```

https://github.com/terrierscript/snippet.terrierscript.com/blob/3ac8ab24baaaeaead1756cce06ed32c3feec91c0/sandbox/gatsby-polyfill.js#L1-L12

ついでにTypography.js周りもgatsbyが処理してしまっていてそのまま吐くとうまくいかなかったでのこちらも自前で追加した

```jsx
import React, { useEffect } from "react"
import { TypographyStyle, GoogleFont } from "react-typography"
import typography from "../src/app/utils/typography.js"

export const Fonts = () => {
  return (
    <>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </>
  )
}
```

https://github.com/terrierscript/snippet.terrierscript.com/blob/3ac8ab24baaaeaead1756cce06ed32c3feec91c0/sandbox/fonts.tsx#L1-L12

