---
templateKey: blog-post
title: styled-componentsでmedia queryを使う
date: '2018-04-08T21:16:33+09:00'
tags:
  - css
  - javascript
  - styled-components
---

styled-components使うならレスポンシブ対応は`@media query`に任せたい。
本家には`media templates`という章で記載されている

https://www.styled-components.com/docs/advanced#media-templates

ただこれ若干いちいち用意するのがめんどくさいのと、地味にTypescriptなどに優しくない記述になっている。

ということで、`styled-media-query`というパッケージに頼っちゃうと良い

https://github.com/morajabi/styled-media-query

`lessThan`, `greaterThan`とかで管理。サイズはデフォルト値があるがカスタマイズも可能。
ざっくり作るだけでいいならこれで十分そう

```js
const Logo = styled(Link)`
  font-size: 20px;
  ${media.lessThan("small")`
    font-size: 18px;
  `};
`;
```
