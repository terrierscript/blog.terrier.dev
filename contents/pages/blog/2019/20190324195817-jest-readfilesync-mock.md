---
templateKey: blog-post
title: JestでreadFileSyncをmockするワンライナー
date: 2019-03-24T10:57:21.944Z
tags:
  - jest
---

雑にワンライナーでやる場合のを見つけたのでメモ。

```js
const content = "some text"
jest.spyOn(require("fs"), "readFileSync").mockReturnValue(content)
```
