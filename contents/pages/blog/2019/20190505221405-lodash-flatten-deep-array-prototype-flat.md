---
templateKey: blog-post
title: lodashのflattenDeepをArray.prototype.flatで代用する
date: '2019-05-05T13:14:05.608Z'
tags:
  - javascript
published: false
---

ES2019で追加された関数に`Array.prototype.flat`がある。
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

今までreduceでやってたようなflattenの処理が書き換えられる

```js
// 今まではこんなやり方をやってたりした
const flatten = [1, [2, [3, [4]], 5]].reduce( (a, b) => [...a, ...b], [])
// => [1, 2, [3, [4]], 5]	 

// lodashならこう
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]	 

// それがこうできる
const flatten = [1, [2, [3, [4]], 5]].flat()
 // => [1, 2, [3, [4]], 5]
```

`flat`は引数として`depth`を入れることができる。上記例だと1回しかflatしてないが、例えばこんなふうに記述できる

```js
const flatten = [1, [2, [3, [4]], 5]].flat(2)
// => [1, 2, [3, [4]], 5]
```

そしてここで`flattenDeep`のように、どれだけdepthがあるかわからない場合は`Infinity`が利用できる

```js
const flatten = [1, [2, [3, [4]], 5]].flat(Infinity)
// => [1, 2, 3, 4, 5]
```


# 参考
* https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore