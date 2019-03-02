---
templateKey: blog-post
title: next.jsとstyled-componentsを組み合わせたときはlinkにpassHrefを渡す
date: 2018-08-06T11:21:20.401Z
tags:
  - javascript
  - next.js
  - styled-components
  - react
---
next.jsで`<a>`タグ以外を`<Link>`でそのまま囲うとうまくいかない。
ので、`passHref`を渡す。

```js
import Link from "next/link"

const RedLink = styled("a")`
  color: red;
`

export const MyLink = ({ href, children, ...props }) => (
  // passHrefを与える
  <Link href={href} passHref>
    <LinkTag {...props}>{children}</LinkTag>
  </Link>
)
```

https://nextjs.org/docs/#routing
