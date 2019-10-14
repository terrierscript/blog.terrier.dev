---
templateKey: blog-post
title: Web Componentsをgatsbyで使えばmdxいらずである程度色々出来る
date: '2019-10-14T09:41:31.803Z'
tags:
  - webcomponents
  - gatsby
published: true
---

Gatsbyのmarkdownで「ちょっとだけ凝ったことがしたい！」というとき、割とよく出てくるものにmdxを使うという選択肢がある。

ただトランスパイラが面倒になったりで色々と嫌なとこがあり嫌な部分がある。

そこでWebComponentsが使えそうだ。

タイマーのサンプルはこんな感じ↓

<sample-timer></sample-timer>

コードはこんな具合だ。

```js
import { css } from "styled-components"

const container = css`
  border: dotted 3px #ccc;
  padding: 1em;
`
export class SampleTimer extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" })
    window.setInterval(() => {
      shadowRoot.innerHTML = this.template()
    }, 500)
  }
  template() {
    return `<div style="${container}">現在時刻: ${new Date()}</div>`
  }
}
```

あとはdefineすれば使える。ただgatsbyの場合SSRのタイミングで壊れるので`window`のアリナシで判定してdynamic importかrequireで解決する必要がある

```js
export async function loadWebComponent() {
  if (typeof window !== `undefined`) {
    const { StackbritzIframe } = await import("./Stackblitz")
    const { SampleTimer } = await import("./SampleTimer")

    customElements.define("stackblitz-iframe", StackbritzIframe)
    customElements.define("sample-timer", SampleTimer)
  }
}

```

Markdown側にこんなふうに書けばOKだ

```html
<sample-timer></sample-timer>
```

