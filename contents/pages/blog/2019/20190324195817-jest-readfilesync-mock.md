---
templateKey: blog-post
title: JestでreadFileSyncをmockするワンライナー
date: 2019-03-24T10:57:21.944Z
tags:
  - jest
---

雑に最短でやる場合のを見つけたのでメモ。

```js
jest.mock("fs") // これは必要

const content = "some text"
jest.spyOn(require("fs"), "readFileSync").mockReturnValue(content)
```
