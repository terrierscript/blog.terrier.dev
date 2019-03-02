---
templateKey: blog-post
title: JavaScriptで何が入ってるかわからないオブジェクトのメソッドを取得するのに__propt__を使う
date: '2018-07-23T09:29:33+09:00'
tags:
  - javascript
---
オブジェクトに入ってるメソッドを取得するのに`getOwnPropertyNames`を使うことはよく紹介されている。
https://stackoverflow.com/questions/2257993/how-to-display-all-methods-of-an-object
が、これだとprototype拡張されてインスタンスとして出来上がってる場合に出てこない。

ということで`__proto__`を使う

```js
console.log(someObject.__proto__)
```
