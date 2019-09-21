---
templateKey: blog-post
title: linear-gradientを利用してQRCodeを表示する
date: '2019-09-18T12:12:54.461Z'
tags:
  - css
  - javascript
published: true
---

CSSのGradientには、同色を途中で切り替えると二色を切り分けるという可愛い特徴がある
```jsx
export const Dotted = styled.div`
  background: linear-gradient(red, red 0 10%, blue 10% 40%, green 40% 100%);
  height: 2em;
`
```

